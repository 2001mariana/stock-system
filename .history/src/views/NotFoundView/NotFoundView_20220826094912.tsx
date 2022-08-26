import Lottie from 'lottie-react'
import React from 'react'
import { Link } from 'react-router-dom'

import NotFoundAnimation from '../../assets/animations/not-found.json'

import './NotFoundView.scss'

const NotFoundView = () => {
  return (
    <div className="NotFoundView">
      <h2>The page you tried to access does not exist!</h2>
      <div className="NotFoundView__animation">
        <Lottie animationData={NotFoundAnimation} loop={true} />
      </div>
      <Link className="NotFoundView__link" to="/">
        <h3>Go back to main</h3>
      </Link>
    </div>
  )
}

export default NotFoundView
