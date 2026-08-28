import { useOutletContext } from 'react-router-dom'
import { List, Avatar, Typography, Card } from 'antd'
import { UserOutlined } from '@ant-design/icons'

const { Title } = Typography

// Comentarios de ejemplo hardcodeados
const comentariosEjemplo = [
  { autor: 'Lucía', texto: '¡Excelente película, la vi tres veces!' },
  { autor: 'Martín', texto: 'El final me sorprendió totalmente.' },
  { autor: 'Sofía', texto: 'La fotografía es una obra de arte.' },
]

function Comentarios() {
  // useOutletContext recibe el contexto pasado por <Outlet context={...}> en Detalle
  const { pelicula } = useOutletContext()

  return (
    <Card style={{ marginTop: 8 }}>
      <Title level={4}>Comentarios sobre "{pelicula.nombre}"</Title>
      <List
        itemLayout="horizontal"
        dataSource={comentariosEjemplo}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar icon={<UserOutlined />} />}
              title={item.autor}
              description={item.texto}
            />
          </List.Item>
        )}
      />
    </Card>
  )
}

export default Comentarios
