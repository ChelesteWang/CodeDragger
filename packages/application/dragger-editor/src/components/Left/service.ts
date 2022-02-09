import http from '@cdl-pkg/request'

export interface MaterialType {
  remoteComponent?: boolean
  name?: string
  desc: string
  schema: Record<string, unknown>
}

export interface GetMaterialListResponse {
  data: MaterialType[]
}

export function getMaterialList(): Promise<GetMaterialListResponse> {
  return Promise.resolve({
    data: [
      {
        remoteComponent: true,
        name: '62011592ec3be240902f635a',
        desc: '按钮',
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
              interaction: 'drop_down'
            },
            buttonText: {
              type: 'string',
              default: 'Button',
              interaction: 'inupt'
            },
            width: {
              type: 'number',
              isCssProp: 'true',
              default: 40,
              minimum: 40,
              maximum: 200,
              interaction: 'stepper'
            },
            height: {
              type: 'number',
              isCssProp: 'true',
              default: 80,
              minimum: 40,
              maximum: 200,
              interaction: 'stepper'
            }
          }
        }
      }
    ]
  })
}
