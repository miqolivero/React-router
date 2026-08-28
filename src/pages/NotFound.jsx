import { useNavigate } from 'react-router-dom'
import { Result, Button } from 'antd'

function NotFound() {
  const navigate = useNavigate()

  return (
    <div style={{ maxWidth: 600, margin: '60px auto' }}>
      <Result
        status="404"
        title="404"
        subTitle="Lo sentimos, la página que buscás no existe."
        extra={
          <Button type="primary" onClick={() => navigate('/')}>
            Volver al inicio
          </Button>
        }
      />
    </div>
  )
}

export default NotFound
