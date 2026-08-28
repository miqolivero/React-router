import { useParams, useNavigate, Link, Outlet } from 'react-router-dom'
import { Typography, Button, Result, Image, Space } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import peliculas from '../data.js'

const { Title, Paragraph } = Typography

function Detalle() {
  // useParams lee el :id de la URL
  const { id } = useParams()
  // useNavigate permite volver de forma programática (no con <Link>)
  const navigate = useNavigate()

  const pelicula = peliculas.find((p) => p.id === Number(id))

  // Caso borde: id que no existe en el array
  if (!pelicula) {
    return (
      <div style={{ maxWidth: 600, margin: '60px auto' }}>
        <Result
          status="warning"
          title="Elemento no encontrado"
          subTitle={`No existe ninguna película con el id "${id}" en el catálogo.`}
          extra={
            <Button type="primary" onClick={() => navigate('/catalogo')}>
              Volver al catálogo
            </Button>
          }
        />
      </div>
    )
  }

  return (
    <div style={{ maxWidth: 700, margin: '40px auto', padding: '0 24px' }}>
      <Button
        icon={<ArrowLeftOutlined />}
        onClick={() => navigate('/catalogo')}
        style={{ marginBottom: 16 }}
      >
        Volver al catálogo
      </Button>

      <Image
        src={pelicula.imagen}
        alt={pelicula.nombre}
        style={{ borderRadius: 8 }}
      />
      <Title level={2} style={{ marginTop: 16 }}>
        {pelicula.nombre}
      </Title>
      <Paragraph style={{ fontSize: 16 }}>{pelicula.descripcion}</Paragraph>

      <Space style={{ marginBottom: 16 }}>
        <Link to={`/catalogo/${pelicula.id}/comentarios`}>
          Ver comentarios
        </Link>
      </Space>

      {/* Ruta anidada /catalogo/:id/comentarios se renderiza acá */}
      <Outlet context={{ pelicula }} />
    </div>
  )
}

export default Detalle
