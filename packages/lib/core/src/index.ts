class EditorConfiguration {
  ComponentList: Array<any> = []
  registerComponent(component: any) {
    this.ComponentList.push(component)
  }
}

const EditorConfigurationInstance = new EditorConfiguration()

EditorConfigurationInstance.registerComponent({
  name: 'Button',
  description: 'MUI Button',
  image: '',
  src: '',
  props: [
    {
      name: 'variant',
      type: 'string',
      default: 'contained',
      options: ['contained', 'outlined', 'text']
    },
    {
      name: 'color',
      type: 'string',
      default: 'primary',
      options: ['primary', 'secondary', 'inherit', 'default', 'error']
    },
    {
      name: 'size',
      type: 'string',
      default: 'medium',
      options: ['small', 'medium', 'large']
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: false,
      options: []
    },
    {
      name: 'onClick',
      type: 'function',
      default: '',
      options: []
    },
    {
      name: 'children',
      type: 'string',
      default: '',
      options: []
    }
  ]
})

EditorConfigurationInstance.registerComponent({
  name: 'TextField',
  description: 'MUI TextField',
  image: '',
  src:'',
  props: [
    {
      name: 'variant',
      type: 'string',
      default: 'outlined',
      options: ['standard', 'outlined', 'filled']
    },
    {
      name: 'size',
      type: 'string',
      default: 'medium',
      options: ['small', 'medium', 'large']
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: false,
      options: []
    },
    {
      name: 'onClick',
      type: 'function',
      default: '',
      options: []
    },
    {
      name: 'children',
      type: 'string',
      default: '',
      options: []
    }
  ]
})

console.log(EditorConfigurationInstance.ComponentList)