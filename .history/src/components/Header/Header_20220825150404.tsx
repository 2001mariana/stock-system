import React from 'react'
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { RootState } from '../../redux'
import './Header.scss'

interface HeaderProps {
  title: string
}

const Header = ({ title }: HeaderProps) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <header className="Header">
      <h1>{title}</h1>
      <div>
        <span onClick={handleLoginLogout}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </span>
      </div>
    </header>
  )
}

const mapStateToProps = (state: RootState) => ({
  firstProduct: state.products[0],
  profile: state.authentication.profile
})

export default connect(mapStateToProps)(Header)
