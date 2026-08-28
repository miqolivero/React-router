import { Routes, Route } from 'react-router-dom'
import { Layout } from 'antd'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Catalogo from './pages/Catalogo.jsx'
import Detalle from './pages/Detalle.jsx'
import Comentarios from './pages/Comentarios.jsx'
import Nosotros from './pages/Nosotros.jsx'
import NotFound from './pages/NotFound.jsx'

const { Content, Footer } = Layout

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Navbar />
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/catalogo/:id" element={<Detalle />}>
            {/* Ruta anidada: /catalogo/:id/comentarios, renderizada con <Outlet /> en Detalle */}
            <Route path="comentarios" element={<Comentarios />} />
          </Route>
          <Route path="/nosotros" element={<Nosotros />} />
          {/* Ruta comodín para cualquier URL que no matchee */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        CineCatálogo © 2026 — Actividad de React Router
      </Footer>
    </Layout>
  )
}

export default App
