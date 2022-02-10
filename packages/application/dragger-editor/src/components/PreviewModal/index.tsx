import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { componentsManager, layoutManager }from '../../store';
import { LegacyRef } from 'react';
import { renderData } from '@cdl-pkg/preview-pages/src/main';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 375,
  bgcolor: 'background.paper',
  boxShadow: 24,
  height: 750,
};

export default function BasicModal({ visible, close }) {

  const handleClose = () => {
    close();
  };

  const iFrameRef: LegacyRef<HTMLIFrameElement> = React.useRef(null);

  console.log('componentsManager.state', componentsManager.state);
  console.log('layoutManager.state', layoutManager.state);

  React.useEffect(() => {
    const componentsData = [];
    const componentKeys = Object.keys(componentsManager.state);
    for (let key of componentKeys) {
      const component = {
        key,
        remoteComponent: true,
        attributes: componentsManager.state[key]
      }
      componentsData.push(component);
    }
    renderData('1b1b11b', componentsData, { positions: JSON.parse(layoutManager.state.value ?? '[]') });
    // iFrameRef.current?.contentWindow?.postMessage({
    //   type: 'cdl_components_data',
    //   data: {
    //     components: componentsData,
    //     layout: {
    //       windowWidth: 375,
    //       cols: 375,
    //       positions: JSON.parse(layoutManager.state)
    //     }
    //   }
    // })
  }, [visible]);

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
      <div
        id='1b1b11b'
        style={{
          height: 750,
          width: 375
        }}
      />
    </Modal>
  );
}