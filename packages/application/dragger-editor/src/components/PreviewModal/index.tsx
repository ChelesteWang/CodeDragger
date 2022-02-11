import * as React from 'react';
import Modal from '@mui/material/Modal';
import { componentsManager, layoutManager }from '../../store';
import { renderData } from '@cdl-pkg/preview-pages/src/main';
import phonePNG from '../../static/phone-mockup.png'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 377,
  boxShadow: 24,
  height: 752,
};

function BasicModal({ visible, close }:{ visible:any, close:any}) {

  const handleClose = () => {
    close();
  };

  const onRefChange = (element: HTMLElement) => {
    if(element) {
      const componentsData = [];
      const componentKeys = Object.keys(componentsManager.state);
      for (let key of componentKeys) {
        const component = {
          key,
          remoteComponent: true,
          attributes: JSON.parse(JSON.stringify((componentsManager as any).state[key]))
        }
        componentsData.push(component);
      }
  
      console.log('element', element);
      // @ts-ignore
      renderData(element, componentsData, { positions: JSON.parse(layoutManager.state.value ?? '[]') });
    }
  };

  return (
    <Modal
      outline={0}
      open={visible}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {/* <Box sx={style}>
        <iframe
          title='preview'
          ref={iFrameRef}
          style= {{
            height:750, width:375, border: 'none'
          }}
        src={'http://localhost:3001/'} 
      />
      </Box> */}
      <>
        <div
        // @ts-ignore
          ref={onRefChange}
          id='1b1b11b'
          // @ts-ignore
          style={style}
        />
        <img
        // @ts-ignore      
          style={{
            ...style,
            pointerEvents:"none",
            width: 424,
            height: 795
          }}
          alt="phone-mockup"
          src={phonePNG}
        />
      </>
    </Modal>
  );
}

export default React.memo(BasicModal)