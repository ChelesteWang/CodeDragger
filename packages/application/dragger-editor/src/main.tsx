import { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import { ChosenThemeProvider, ThemeProvider } from '@/providers'
import App from './App'

ReactDOM.render(
  <StrictMode>
    <ChosenThemeProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ChosenThemeProvider>
  </StrictMode>,
  document.getElementById('root')
)
