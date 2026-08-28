import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import esES from 'antd/locale/es_ES'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Todo el árbol de rutas queda envuelto en BrowserRouter */}
    <BrowserRouter>
      <ConfigProvider locale={esES}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
