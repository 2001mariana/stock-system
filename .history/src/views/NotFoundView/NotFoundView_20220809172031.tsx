import { Link } from 'react-router-dom'

const NotFoundView = () => {
  return (
    <div
      className="NotFoundView"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        border: '1px solid red',
        backgroundColor: '#F8F8FF'
      }}
    >
      <h1
        style={{
          color: '#09f',
          fontWeight: 900
        }}
      >
        404
      </h1>
      <p>Não encontrado</p>
      <Link
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
