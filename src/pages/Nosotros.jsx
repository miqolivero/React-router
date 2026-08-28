import { Typography } from 'antd'

const { Title, Paragraph } = Typography

function Nosotros() {
  return (
    <div style={{ maxWidth: 700, margin: '40px auto', padding: '0 24px' }}>
      <Title level={2}>Sobre el proyecto</Title>
      <Paragraph style={{ fontSize: 16 }}>
        CineCatálogo es un proyecto práctico desarrollado como actividad de
        aprendizaje de <strong>React Router</strong>. Todo el enrutamiento de
        la aplicación (Home, Catálogo, Detalle, Nosotros y 404) se maneja con
        los componentes y hooks de <code>react-router-dom</code>:{' '}
        <code>BrowserRouter</code>, <code>Routes</code>, <code>Route</code>,{' '}
        <code>Link</code>, <code>NavLink</code>, <code>useParams</code>,{' '}
        <code>useNavigate</code>, <code>useSearchParams</code> y{' '}
        <code>Outlet</code>.
      </Paragraph>
      <Paragraph style={{ fontSize: 16 }}>
        La parte visual está construida con la librería <strong>Ant Design</strong>{' '}
        (antd), sin CSS escrito a mano.
      </Paragraph>
    </div>
  )
}

export default Nosotros
