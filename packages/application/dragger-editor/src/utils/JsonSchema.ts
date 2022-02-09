const constructors: Record<string, (v: unknown) => unknown> = {
  string: (v: unknown) => String(v),
  number: (v: unknown) => Number(v)
}

const fallBack = {
  string: '',
  number: 0
}

// {
//   "$schema": "http://json-schema.org/draft-04/schema#",
//   "$id": "https://codedragger.com/component/antd-mobile/Button",
//   "title": "codedagger/component/antd-mobile/Button",
//   "description": "antd-mobile Button attributes",
//   "type": "object",
//   "properties": {
//     "shape": {
//       "type": "string",
//       "oneof": ["rect" , "radius" , "round" , "circle"],
//       "default": "rect",
//       "interaction": "single_choice"
//     },
//     "width": {
//       "type": "number",
//       "default": 40,
//       "minimum": 40,
//       "maximum": 200,
//       "interaction": "stepper"
//     },
//     "height": {
//       "type": "number",
//       "default": 80,
//       "minimum": 40,
//       "maximum": 200,
//       "interaction": "stepper"
//     }
//   }
// }

/**
 * instantiate a object type schema arrcording to the default value of its proporty
 * @param schema
 * @returns {}
 */
export function getDefaultInstance(
  schema: Record<string, unknown> | string
): any {
  let schemaObj: any = {}

  if (typeof schema === 'string') {
    try {
      schemaObj = JSON.parse(schema)
    } catch (e) {
      console.error(e)
      return {}
    }
  } else {
    schemaObj = schema
  }

  const { type, properties } = schemaObj
  if (type !== 'object') {
    console.log('is a trap!')
    return {}
  }
  const res: any = {
    style: {}
  }
  for (const key of Object.keys(properties)) {
    const {
      type: propType,
      default: defaultValue,
      isCssProp
    }: { type: string; default: unknown; isCssProp: boolean } = properties[key]
    if (defaultValue === undefined) {
    }
    if (isCssProp) {
      res.style[key] = constructors[propType](defaultValue)
    } else {
      res[key] = constructors[propType](defaultValue)
    }
  }
  return res
}
