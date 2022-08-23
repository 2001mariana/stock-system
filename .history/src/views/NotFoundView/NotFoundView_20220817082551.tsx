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
      <h0>A página que você tentou acessar não existe!</h0>
      <Link className="NotFoundView__link" to="/">
        <h3>Voltar para a Home</h3>
      </Link>
    </div>
  )
}

export default NotFoundView
