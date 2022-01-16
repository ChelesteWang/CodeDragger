import { FC, useContext } from 'react'
import DarkModeIcon from '@mui/icons-material/Brightness3'
import LightModeIcon from '@mui/icons-material/WbSunny'
import { styled } from '@mui/material'
import isPropValid from '@emotion/is-prop-valid'

import { ChosenTheme } from '@/providers'

const DarkModeToggle: FC = () => {
  const { theme, setTheme } = useContext(ChosenTheme)
  return (
    <Root>
      <Checkbox
        type='checkbox'
        id='dark-mode-toggle'
        checked={theme === 'dark'}
        onChange={({ target: { checked } }) => {
          const themeToSet = checked ? 'dark' : 'light'
          setTheme(themeToSet)
        }}
      />
      <Label htmlFor='dark-mode-toggle'>
        <MoonIcon>
          <DarkModeIcon color='inherit' fontSize='small' />
        </MoonIcon>
        <SunIcon>
          <LightModeIcon color='inherit' fontSize='small' />
        </SunIcon>
        <Ball isChecked={theme === 'dark'} />
      </Label>
    </Root>
  )
}

const Checkbox = styled('input')`
  opacity: 0;
  position: absolute;
`

interface BallProps {
  isChecked: boolean
}
const Ball = styled('div', {
  shouldForwardProp: isPropValid
})<BallProps>`
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  height: 16px;
  width: 16px;
  transform: translateX(0px);
  transition: transform 0.2s linear;
  ${({ isChecked }) => (isChecked ? 'transform: translateX(17px);' : '')}
`

const Label = styled('label')`
  background-color: #111;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  height: 20px;
  width: 35px;
  transform: scale(1.5);
`

const Root = styled('div')`
  transition: background 0.2s linear;
`

const SunIcon = styled('i')`
  color: #f39c12;
  & svg {
    & path {
      color: #f39c12 !important;
    }
    font-size: 0.6em;
  }
`
const MoonIcon = styled('i')`
  color: #f1c40f;
  & svg {
    & path {
      color: #f1c40f !important;
    }
    font-size: 0.6em;
  }
`

export default DarkModeToggle
