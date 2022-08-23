import Lottie from 'lottie-react'
import { Link } from 'react-router-dom'

import NotFoundAnimation from '../../assets/animations/not-found.json'

import './NotFoundView.scss'

const NotFoundView = () => {
  return (
    <div className="NotFoundView">
      <div className="NotFound__animation">
        <Lottie animationData={NotFoundAnimation} loop={true} />
      </div>
      <h3>A página que você tentou acessar não existe!</h3>
      <Link className="NotFoundView__link" to="/">
       < Voltar para a Home
      </Link>
    </div>
  )
}

export default NotFoundView
