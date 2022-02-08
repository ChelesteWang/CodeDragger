extern crate wasm_bindgen;

use std::error::Error;
use std::fmt::format;
use std::iter::Map;
use serde_json::Value;
use wasm_bindgen::prelude::*;

const __SPACE__: char = ' ';
const __LEFT_BOUND__: char = '<';
const __RIGHT_BOUND__: char = '>';
const __ENTER__: char = '\n';
const __SPLITTER__: char = '/';
const __BUILTIN_PROPS__: [&str; 3] = [
    "children",
    "innerText",
    "component_name"
];

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
    #[wasm_bindgen]
    fn encodeURI(s: &str) -> String;
}

#[wasm_bindgen]
pub fn hello(name: &str) {
    console_log!("Hello, {}!", name);
}

#[wasm_bindgen]
pub fn strlen(k: &str) -> i32 {
    k.len() as i32
}

pub fn build_props(props: &serde_json::Map<String, Value>) -> String {
    let mut res = String::new();
    for (key, value) in props {
        if !__BUILTIN_PROPS__.contains(&&**key) {
            res += &format!(" {}={}"
                            , encodeURI(key)
                            , value.to_string()
            );
        }
    }
    res
}

pub fn get_jsx_by_jsx_tree(component_name: &str, props: &serde_json::Map<String, Value>, indent: usize, children: Option<&Value>) -> Option<String> {
    let mut jsx = format!(
        "{}{}{}{}{}{}",
        __SPACE__.to_string().repeat(indent),
        __LEFT_BOUND__,
        component_name,
        build_props(props),
        __RIGHT_BOUND__,
        __ENTER__
    );
    if let Some(children_some) = children {
        jsx += &*get_jsx_by_jsx_tree(
            children_some.get("component_name")?.as_str()?,
            children_some.as_object()?,
            indent + 2,
            children_some.get("children"),
        )?
    } else if let Some(text) = props.get("InnerText") {
        jsx += text.as_str()?;
    }
    Some(format!(
        "{}{}{}{}{}{}{}",
        jsx,
        __SPACE__.to_string().repeat(indent),
        __LEFT_BOUND__,
        __SPLITTER__,
        component_name,
        __RIGHT_BOUND__,
        __ENTER__,
    ))
}

#[wasm_bindgen]
pub fn json_to_jsx(json: &str) -> Option<String> {
    let json: Value = serde_json::from_str(json).ok()?;
    get_jsx_by_jsx_tree(
        json.get("component_name")?.as_str()?,
        json.as_object()?,
        0,
        json.get("children"),
    )
}
