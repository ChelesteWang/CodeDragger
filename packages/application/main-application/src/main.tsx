import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { SnackbarProvider } from 'notistack'
import { ChosenThemeProvider, ThemeProvider } from '@/providers'
import App from './App'

ReactDOM.render(
  <StrictMode>
    <ChosenThemeProvider>
      <ThemeProvider>
        <SnackbarProvider maxSnack={3}>
          <App />
        </SnackbarProvider>
      </ThemeProvider>
    </ChosenThemeProvider>
  </StrictMode>,
  document.getElementById('root')
)
