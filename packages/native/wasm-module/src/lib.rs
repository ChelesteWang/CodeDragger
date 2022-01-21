extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;
macro_rules! console_log {
    ($($t:tt)*) => (log(&format_args!($($t)*).to_string()))
}
macro_rules! console_warn {
    ($($t:tt)*) => (warn(&format_args!($($t)*).to_string()))
}

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
    #[wasm_bindgen(js_namespace = console)]
    fn warn(s: &str);
}

#[wasm_bindgen]
pub fn hello(name: &str)  {
    console_log!("Hello, {}!", name);
}
#[wasm_bindgen]
pub fn strlen(k: &str) -> i32 {
    k.len() as i32
}