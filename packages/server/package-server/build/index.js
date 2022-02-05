var __create = Object.create
var __defProp = Object.defineProperty
var __getOwnPropDesc = Object.getOwnPropertyDescriptor
var __getOwnPropNames = Object.getOwnPropertyNames
var __getProtoOf = Object.getPrototypeOf
var __hasOwnProp = Object.prototype.hasOwnProperty
var __markAsModule = (target) =>
  __defProp(target, '__esModule', { value: true })
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true })
}
var __reExport = (target, module2, copyDefault, desc) => {
  if (
    (module2 && typeof module2 === 'object') ||
    typeof module2 === 'function'
  ) {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== 'default'))
        __defProp(target, key, {
          get: () => module2[key],
          enumerable:
            !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable
        })
  }
  return target
}
var __toESM = (module2, isNodeMode) => {
  return __reExport(
    __markAsModule(
      __defProp(
        module2 != null ? __create(__getProtoOf(module2)) : {},
        'default',
        !isNodeMode && module2 && module2.__esModule
          ? { get: () => module2.default, enumerable: true }
          : { value: module2, enumerable: true }
      )
    ),
    module2
  )
}
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return (
      (cache && cache.get(module2)) ||
      ((temp = __reExport(__markAsModule({}), module2, 1)),
      cache && cache.set(module2, temp),
      temp)
    )
  }
})(typeof WeakMap !== 'undefined' ? /* @__PURE__ */ new WeakMap() : 0)

// index.ts
var package_server_exports = {}
__export(package_server_exports, {
  build: () => build,
  compress: () => compress
})

// compile/build.ts
var import_path = require('path')
var import_tsup = require('tsup')
async function build(opt) {
  const destPath = (0, import_path.join)(
    __dirname,
    '../src/index.ts'
  ).replaceAll('\\', '/')
  console.log(destPath)
  const option = Object.assign(
    {
      entry: [destPath],
      sourcemap: false,
      clean: false,
      minify: true,
      external: ['react'],
      dts: {
        resolve: true,
        entry: [destPath]
      }
    },
    opt
  )
  await (0, import_tsup.build)(option)
}

// compile/compress.ts
var import_compressing = __toESM(require('compressing'))
var import_pump = __toESM(require('pump'))
var FileStream = import_compressing.tgz.FileStream
function streamToBuffer(stream) {
  return new Promise((resolve, reject) => {
    const buffers = []
    stream.on('error', reject)
    stream.on('data', (data) => buffers.push(data))
    stream.on('end', () => resolve(Buffer.concat(buffers)))
  })
}
async function compress(source) {
  const tarStream = new import_compressing.default.tar.Stream()
  tarStream.addEntry(source)
  const destStream = (0, import_pump.default)(
    tarStream,
    new import_compressing.default.gzip.FileStream()
  )
  return await streamToBuffer(destStream)
}
module.exports = __toCommonJS(package_server_exports)
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    build,
    compress
  })
