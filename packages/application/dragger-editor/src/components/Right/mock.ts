let selectedNode = {
  shape: 'rect',
  width: 20,
  height: 20,
  images: []
}

const getSchema = (id: string) => {
  return {
    shape: {
      type: 'string',
      oneof: ['rect', 'radius', 'round', 'circle'],
      interaction: 'single_choice'
    },
    width: {
      type: 'number',
      minimum: 0,
      maximum: 2000,
      interaction: 'input'
    },
    height: {
      type: 'number',
      minimum: 0,
      maximum: 2000,
      interaction: 'input'
    },
    images: {
      type: 'array',
      items: {
        type: 'string'
      },
      defaultValues: [
        'http://img2.baidu.com/it/u=98371021,1121096365&fm=253&app=53&size=w500&n=0&g=0n&f=jpeg?sec=1646925132&t=f0c793085fc57119a78220e8bbf93962',
        'http://img1.baidu.com/it/u=3788606852,2363382091&fm=253&app=53&size=w500&n=0&g=0n&f=jpeg?sec=1646925132&t=556ed322c34aabcb4329fd2513452a38',
        'http://img2.baidu.com/it/u=3062469291,1117322059&fm=253&app=53&size=w500&n=0&g=0n&f=jpeg?sec=1646925132&t=344dff3be8bb20510487af397a300d87'
      ]
    }
  }
}
const dispatch: string[] = []
export { selectedNode, getSchema, dispatch }
