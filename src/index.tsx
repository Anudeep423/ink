import React , {createContext} from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import App from './App'
import reportWebVitals from './reportWebVitals'
import colorCodes from './common/colors'
import { StoreProvider } from './context/StoreContext'
import './index.scss'
;

const themeObj = {
  color: colorCodes
}

ReactDOM.render(
  <React.StrictMode>
      <StoreProvider>
        <ThemeProvider theme={themeObj}>
          <App />
        </ThemeProvider>
      </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
