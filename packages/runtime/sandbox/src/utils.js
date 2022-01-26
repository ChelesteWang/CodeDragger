import React from 'react'
import ReactDOM from 'react-dom'
import ObjPath from 'object-path'
import { parse } from 'acorn'
import { generate as generateJs } from 'escodegen'
import { transform as babelTransform } from '@babel/standalone'

// 搜索目标节点
export function findReactNode(ast) {
  const { body } = ast

  return body.find((node) => {
    const { type } = node
    const obj = ObjPath.get(node, 'expression.callee.object.name')
    const func = ObjPath.get(node, 'expression.callee.property.name')
    return (
      type === 'ExpressionStatement' &&
      obj === 'React' &&
      func === 'createElement'
    )
  })
}

function compileCode(code) {
  const fn = new Function('sandbox', code)
  return (sandbox) => {
    const proxy = new Proxy(sandbox, {
      has(target, key) {
        return true
      },
      get(target, key, receiver) {
        if (key === Symbol.unscopables) {
          return undefined
        }
        return Reflect.get(target, key, receiver)
      }
    })
    return fn(proxy)
  }
}

export function createEditor(domElement, moduleResolver = () => null) {
  function render(node) {
    ReactDOM.render(node, domElement)
  }

  function require(moduleName) {
    return moduleResolver(moduleName)
  }

  // 核心 with babel
  function getWrapperFunction(code) {
    try {
      const esCode = babelTransform(code, { presets: ['es2015', 'react'] }).code

      const ast = parse(esCode, {
        sourceType: 'module'
      })

      //找到 <Components />
      const rnode = findReactNode(ast)
      console.log('rnode: ', rnode)

      // 执行 Render(<Components />)
      if (rnode) {
        // 先找到位置，便于后面直接替换
        const nodeIndex = ast.body.indexOf(rnode)
        console.log('nodeIndex: ', nodeIndex)
        const createElSrc = generateJs(rnode).slice(0, -1)
        const renderCallAst = parse(`render(${createElSrc})`).body[0]
        ast.body[nodeIndex] = renderCallAst
      }
      return new Function('React', 'render', 'require', generateJs(ast))
      // return compileCode(generateJs(ast))(window)
    } catch ({ message }) {
      // 兜底 输出错误
      // render(<pre style={{ color: "red" }}>{message}</pre>);
    }
  }

  return {
    compile(code) {
      return getWrapperFunction(code)
    },
    run(code) {
      this.compile(code)(React, render, require)
    },
    getCompiledCode(code) {
      return getWrapperFunction(code).toString()
    }
  }
}
