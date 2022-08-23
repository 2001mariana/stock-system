import { Link } from 'react-router-dom'
import './NotFoundView.scss'
import Lottie from 'lottie-react'

import NotFoun from '../../assets/animations/not-found-page.json'

const NotFoundView = () => {
  return (
    <div className="NotFoundView">
      <div className="NotFound__animation">
        <Lottie animationData={NotFoundAnimation} loop={true} />
      </div>
      <p>Não encontrado</p>
      <Link className="NotFoundView__link" to="/">
        Voltar para a Home
      </Link>
    </div>
  )
}

export default NotFoundView
