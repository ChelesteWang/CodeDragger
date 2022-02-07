import { styled } from '@mui/material/styles'
import MuiToolbar from '@mui/material/Toolbar'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Toolbar = styled(MuiToolbar)(({ theme }: { theme: any }) => ({
  height: 64,
  [theme.breakpoints.up('sm')]: {
    height: 70
  }
}))

export default Toolbar
