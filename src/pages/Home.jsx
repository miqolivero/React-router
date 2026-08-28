import { Link } from 'react-router-dom'
import { Typography, Button, Space } from 'antd'

const { Title, Paragraph } = Typography

function Home() {
  return (
    <div style={{ maxWidth: 700, margin: '60px auto', textAlign: 'center' }}>
      <Title>Bienvenido a CineCatálogo</Title>
      <Paragraph style={{ fontSize: 16 }}>
        Un catálogo simple de películas creado como actividad práctica de{' '}
        <strong>React Router</strong>. Navegá entre las distintas secciones
        usando el menú de arriba, explorá el catálogo completo y entrá al
        detalle de cada película.
      </Paragraph>
      <Space>
        <Link to="/catalogo">
          <Button type="primary" size="large">
            Ver catálogo
          </Button>
        </Link>
        <Link to="/nosotros">
          <Button size="large">Sobre el proyecto</Button>
        </Link>
      </Space>
    </div>
  )
}

export default Home
