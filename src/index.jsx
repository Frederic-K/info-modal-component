import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// check CssBaseLine if it worthy :
// import { CssBaseline, ThemeProvider } from "@mui/material";
// <React.StrictMode>
// <Provider store={store}>
//  <ThemeProvider theme={globalTheme}>
//  <CssBaseline enableColorScheme />
//    <App />
//  </ThemeProvider>
//</Provider>
//</React.StrictMode>,

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
