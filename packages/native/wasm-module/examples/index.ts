import * as wasm_module from '../pkg/wasm_module'
wasm_module.hello('WASM')
console.log(wasm_module.strlen('Hello World'))
console.log(
  wasm_module.json_to_jsx(
    `{
        "component_name": "name",
        "a": 3,
        "b": "ab",
        "children": {
            "component_name": "child"
        }
    }`
  )
)
