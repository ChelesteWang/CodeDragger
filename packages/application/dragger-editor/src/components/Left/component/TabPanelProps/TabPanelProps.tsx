import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0)

  // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  //   setValue(newValue)
  // }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        {/* <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          <Tab label='Component' {...a11yProps(0)} />
          <Tab label='NodeTrees' {...a11yProps(1)} />
        </Tabs> */}
      </Box>
    </Box>
  )
}
