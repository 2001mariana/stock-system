import { Link } from 'react-router-dom'
import './NotFoundView.scss'

const NotFoundView = () => {
  return (
    <div className="NotFoundView">
      <h1>404</h1>
      <p >Não encontrado</p>
      <Link className="NotFoundView__link" to="/">
        Voltar para a Home
      </Link>
    </div>
  )
}

export default NotFoundView
