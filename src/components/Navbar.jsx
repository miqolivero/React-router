import { NavLink } from 'react-router-dom'
import { Layout } from 'antd'

const { Header } = Layout

// Estilos base para cada link del navbar
const linkStyle = {
  color: 'rgba(255,255,255,0.75)',
  fontSize: 16,
  padding: '6px 14px',
  borderRadius: 6,
  textDecoration: 'none',
  transition: 'background-color 0.2s, color 0.2s',
}

// Estilo adicional cuando el link corresponde a la ruta activa
const activeLinkStyle = {
  color: '#fff',
  backgroundColor: '#1677ff',
  fontWeight: 600,
}

function Navbar() {
  // NavLink recibe una función en className/style que indica si está "isActive"
  const getStyle = ({ isActive }) =>
    isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle

  return (
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}
    >
      <span style={{ color: '#fff', fontWeight: 700, marginRight: 24 }}>
        🎬 CineCatálogo
      </span>
      <NavLink to="/" end style={getStyle}>
        Home
      </NavLink>
      <NavLink to="/catalogo" style={getStyle}>
        Catálogo
      </NavLink>
      <NavLink to="/nosotros" style={getStyle}>
        Nosotros
      </NavLink>
    </Header>
  )
}

export default Navbar
