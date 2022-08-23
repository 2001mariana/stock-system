import { Link } from 'react-router-dom'

const NotFoundView = () => {
  return (
    <div className="NotFoundView">
      <h1>404</h1>
      <p>Não encontrado</p>
      <Link className=''
        to="/"
        style={{
          color: '#09f',
          textDecoration: 'none',
          fontSize: 12,
          marginTop: 10
        }}
      >
        Voltar para a Home
      </Link>
    </div>
  )
}

export default NotFoundView
