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
      <h2>The page you tried to access does not exist!</h2>
      <Link className="NotFoundView__link" to="/">
        <h3>Go back to main</h3>
      </Link>
    </div>
  )
}

export default NotFoundView
