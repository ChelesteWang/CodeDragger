import http from '@cdl-pkg/request'

const mockData = [
  {
    remoteComponent: true,
    name: '62011592ec3be240902f635a',
    desc: '按钮',
    src: 'https://qckvp9.file.qingfuwucdn.com/file/c6d12b2b72860094_1644417856151.png',
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
          default: 'rect',
          interaction: 'single_choice'
        },
        buttonText: {
          type: 'string',
          default: 'Button',
          interaction: 'input'
        },
        width: {
          type: 'number',
          isCssProp: 'true',
          default: 80,
          minimum: 40,
          maximum: 200,
          interaction: 'input'
        },
        height: {
          type: 'number',
          isCssProp: 'true',
          default: 40,
          minimum: 40,
          maximum: 200,
          interaction: 'input'
        }
      }
    }
  },
  {
    remoteComponent: true,
    name: '6203e6ccec3be24090dd511f',
    desc: '轮播图',
    src: 'https://qckvp9.file.qingfuwucdn.com/file/3052cc2440655ce6_1644423610774.png',
    schema: {
      $schema: 'http://json-schema.org/draft-04/schema#',
      $id: 'https://codedragger.com/component/zarm/Carousel',
      title: 'codedagger/component/zarm/Carousel',
      description: 'zarm Carousel attributes',
      type: 'object',
      properties: {
        images: {
          type: 'array',
          default: [
            'https://static.zhongan.com/website/health/zarm/images/banners/1.png',
            'https://static.zhongan.com/website/health/zarm/images/banners/2.png',
            'https://static.zhongan.com/website/health/zarm/images/banners/3.png'
          ],
          interaction: 'input'
        },
        width: {
          type: 'number',
          isCssProp: 'true',
          default: 375,
          minimum: 40,
          maximum: 375,
          interaction: 'input'
        },
        height: {
          type: 'number',
          isCssProp: 'true',
          default: 185,
          minimum: 40,
          maximum: 200,
          interaction: 'input'
        }
      }
    }
  },
  {
    remoteComponent: true,
    name: '6203eccfec3be24090decf8e',
    desc: '图片',
    src: 'https://qckvp9.file.qingfuwucdn.com/file/c699812f6b0c3f97_1644424470758.png',
    schema: {
      $schema: 'http://json-schema.org/draft-04/schema#',
      $id: 'https://codedragger.com/component/native/Images',
      title: 'codedagger/component/native/Images',
      description: 'native images attributes',
      type: 'object',
      properties: {
        src: {
          type: 'string',
          default:
            'https://static.zhongan.com/website/health/zarm/images/banners/1.png',
          interaction: 'input'
        },
        width: {
          type: 'number',
          isCssProp: 'true',
          default: 200,
          minimum: 40,
          maximum: 375,
          interaction: 'input'
        },
        height: {
          type: 'number',
          isCssProp: 'true',
          default: 185,
          minimum: 40,
          maximum: 200,
          interaction: 'input'
        }
      }
    }
  }
  // {
  //   remoteComponent: true,
  //   name: '6203e6ccec3be24090dd511f',
  //   desc: '轮播图',
  //   src: 'https://qckvp9.file.qingfuwucdn.com/file/3052cc2440655ce6_1644423610774.png',
  //   schema: {
  //     $schema: 'http://json-schema.org/draft-04/schema#',
  //     $id: 'https://codedragger.com/component/zarm/Carousel',
  //     title: 'codedagger/component/zarm/Carousel',
  //     description: 'zarm Carousel attributes',
  //     type: 'object',
  //     properties: {
  //       images: {
  //         type: 'array',
  //         default: [
  //           'https://static.zhongan.com/website/health/zarm/images/banners/1.png',
  //           'https://static.zhongan.com/website/health/zarm/images/banners/2.png',
  //           'https://static.zhongan.com/website/health/zarm/images/banners/3.png'
  //         ],
  //         interaction: 'input'
  //       },
  //       width: {
  //         type: 'number',
  //         isCssProp: 'true',
  //         default: 375,
  //         minimum: 40,
  //         maximum: 375,
  //         interaction: 'input'
  //       },
  //       height: {
  //         type: 'number',
  //         isCssProp: 'true',
  //         default: 185,
  //         minimum: 40,
  //         maximum: 200,
  //         interaction: 'input'
  //       }
  //     }
  //   }
  // }
]
export interface MaterialType {
  remoteComponent?: boolean
  src?: string
  name?: string
  desc: string
  schema: Record<string, unknown>
}

export interface GetMaterialListResponse {
  data: MaterialType[]
}

export function getMaterialList(): Promise<GetMaterialListResponse> {
  return Promise.resolve({
    data: mockData
  })
}
