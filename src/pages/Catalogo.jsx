import { Link, useSearchParams } from 'react-router-dom'
import { Row, Col, Card, Typography, Input, Empty } from 'antd'
import peliculas from '../data.js'

const { Title } = Typography
const { Meta } = Card

function Catalogo() {
  // useSearchParams maneja el query param ?buscar=texto (punto extra)
  const [searchParams, setSearchParams] = useSearchParams()
  const buscar = searchParams.get('buscar') || ''

  const peliculasFiltradas = peliculas.filter((p) =>
    p.nombre.toLowerCase().includes(buscar.toLowerCase()),
  )

  const handleBuscar = (valor) => {
    if (valor) {
      setSearchParams({ buscar: valor })
    } else {
      setSearchParams({})
    }
  }

  return (
    <div style={{ maxWidth: 1100, margin: '40px auto', padding: '0 24px' }}>
      <Title level={2}>Catálogo</Title>

      <Input.Search
        placeholder="Buscar película por nombre..."
        allowClear
        defaultValue={buscar}
        onSearch={handleBuscar}
        onChange={(e) => {
          // filtra en vivo mientras se escribe, actualizando la URL
          handleBuscar(e.target.value)
        }}
        style={{ maxWidth: 400, marginBottom: 24 }}
      />

      {peliculasFiltradas.length === 0 ? (
        <Empty description="No se encontraron películas con ese nombre" />
      ) : (
        <Row gutter={[16, 16]}>
          {peliculasFiltradas.map((pelicula) => (
            <Col xs={24} sm={12} md={8} key={pelicula.id}>
              <Link to={`/catalogo/${pelicula.id}`}>
                <Card
                  hoverable
                  cover={<img alt={pelicula.nombre} src={pelicula.imagen} />}
                >
                  <Meta
                    title={pelicula.nombre}
                    description={
                      pelicula.descripcion.length > 80
                        ? pelicula.descripcion.slice(0, 80) + '...'
                        : pelicula.descripcion
                    }
                  />
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      )}
    </div>
  )
}

export default Catalogo
