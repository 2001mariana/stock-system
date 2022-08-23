import { Link } from 'react-router-dom'
import './NotFoundView.scss'

const NotFoundView = () => {
  return (
    <div className="NotFoundView">
      <h1>404</h1>
      <p>Não encontrado</p>
      <Link className="NotFoundView__link" to="/">
        Voltar para a Home
      </Link>
    </div>
  )
}

export default NotFoundView


import Lottie from 'lottie-react'

import NotFoundAnimation from 'assets/animation/not-found-page.json'

import './NotFound.scss'

const NotFound = () => {
  return (
    <>
      <div className="NotFound">
        <div className="NotFound__message">
          <h2 className="NotFound__message-title">Página não encontrada</h2>
          <p className="NotFound__message-body">
            Verifique se sua busca está correta, tente outra página.
          </p>
        </div>
        <div className="NotFound__animation">
          <Lottie animationData={NotFoundAnimation} loop={true} />
        </div>
      </div>
    </>
  )
}

export default NotFound
