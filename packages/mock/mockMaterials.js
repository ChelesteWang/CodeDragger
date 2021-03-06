export default [
  {
    name: '按钮',
    icon: 'xxx',
    schema: {
      $schema: 'http://json-schema.org/draft-04/schema#',
      $id: 'https://codedragger.com/component/antd-mobile/Button',
      title: 'codedagger/component/antd-mobile/Button',
      description: 'antd-mobile Button attributes',
      type: 'object',
      properties: {
        shape: {
          type: 'string',
          oneof: ['rect', 'radius', 'round', 'circle'],
          default: 'react',
          interaction: 'single_choice'
        },
        width: {
          type: 'number',
          default: 40,
          minimum: 40,
          maximum: 200,
          interaction: 'stepper'
        },
        height: {
          type: 'number',
          default: 80,
          minimum: 40,
          maximum: 200,
          interaction: 'stepper'
        }
      }
    }
  }
]
