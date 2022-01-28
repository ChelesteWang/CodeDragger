import React, { useState, useEffect, useRef } from 'react'
import _debounce from 'lodash/debounce'
// @ts-ignore
import { createEditor } from './utils'
// import MonacoEditor from "react-monaco-editor";

function SandBox() {
  const viewRef = useRef(null)
  const runtimeRef = useRef<typeof createEditor>(null)
  const [code, setCode] = useState(`
    function Components() {
      return <Hello message="React" />
    }
    function Hello({message}){
      return <span>Hello,{message}</span>
    }
  `)

  useEffect(() => {
    runtimeRef.current = createEditor(viewRef.current)
    runtimeRef.current.run(code)
    console.log('compile', runtimeRef.current.compile(code))
    console.log(
      'generate CompiledCode',
      runtimeRef.current.getCompiledCode(code)
    )
  }, [])

  // 热更新 每 0.5 秒更新一次
  const run = _debounce((newCode) => {
    runtimeRef.current.run(newCode || code)
  }, 500)

  // handle onChange
  const onCodeChange = ({ target: { value } }: any) => {
    setCode(value)
    run(value)
  }

  return (
    <div className='container' style={{ display: 'flex' }}>
      <div className='code-editor' style={{ flex: 1 }}>
        <textarea value={code} onChange={onCodeChange} />
      </div>
      <div style={{ flex: 1 }}>
        <div className='preview' ref={viewRef} />
      </div>
    </div>
  )
}

export default SandBox
