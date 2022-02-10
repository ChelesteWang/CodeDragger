import React, { useEffect, useState } from 'react'
import TabPanel from './component/TabPanelProps/TabPanelProps'
import Material from './component/Material'
import {
  getMaterialList,
  GetMaterialListResponse,
  MaterialType
} from './service'
import './Left.css'
import { WithDraggable } from '../../utils/WithDraggable'
import RemoteComponent from '@cdl-pkg/remote-component'
import { getDefaultInstance } from '../../utils/JsonSchema'
import { GenNonDuplicateID } from '../../utils'

function MockIcon({ src, desc }: { src: string; desc: string }) {
  return (
    <div
      style={{
        width: '90px',
        height: '45px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <img src={src} alt={desc} />
    </div>
  )
}

export default function Left() {
  const [loadingStatus, setLoadingStatus] = useState<
    'loading' | 'ready' | 'error'
  >('loading')
  const [materialList, setMaterialList] = useState<MaterialType[]>([])

  useEffect(() => {
    getMaterialList()
      .then((res: GetMaterialListResponse) => {
        setMaterialList(res.data)
        setLoadingStatus('ready')
      })
      .catch((_reason) => setLoadingStatus('error'))
  }, [])

  const renderMaterialPanel = () => {
    return materialList.map((material: MaterialType) => {
      if (material.remoteComponent) {
        const { name, desc, schema, src } = material
        const defaultProps = getDefaultInstance(schema)
        defaultProps.name = name
        console.log(defaultProps.id)
        const Draggable = WithDraggable(
          'RemoteComponent',
          defaultProps
        )(RemoteComponent)
        return (
          <Material desc={desc} key={name}>
            <Draggable style={{ width: '100%', height: '100%', flex: 0.5 }}>
              {/* @ts-ignore */}
              <MockIcon src={src} desc={desc} />
            </Draggable>
          </Material>
        )
      }
      return <div>unknown</div>
    })
  }

  const renderContenr = () => {
    if (loadingStatus === 'loading') {
      return <div>loading</div>
    } else if (loadingStatus === 'error') {
      return <div>加载失败</div>
    } else if (loadingStatus === 'ready') {
      return renderMaterialPanel()
    }
  }

  return (
    <div className='left'>
      <div className='options'>
        <TabPanel />
      </div>
      <div
        className='component'
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: '300px',
          overflow: 'hidden'
        }}
      >
        {renderContenr()}
      </div>
    </div>
  )
}
