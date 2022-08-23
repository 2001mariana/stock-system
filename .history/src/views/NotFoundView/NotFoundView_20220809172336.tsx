import { Link } from 'react-router-dom'

const NotFoundView = () => {
  return (
    <div className="NotFoundView">
      <h1>404</h1>
      <p>Não encontrado</p>
      <Link
        className="NotFoundView__link"
        to="/"
        style={{
          
        }}
      >
        Voltar para a Home
      </Link>
    </div>
  )
}

export default NotFoundView
