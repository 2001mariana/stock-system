import React from 'react'
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { RootState } from '../../redux'
import { User } from '../Authentication/ProfileCard'
import './Header.scss'

interface HeaderProps {
  title: string
  profile?: User
}

const Header = ({ title }: HeaderProps) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const isLoggedIn = !!props.profile?._id

  const askToLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#09f',
      cancelButtonColor: '#d33'
    }).then(({ value }) => value && dispatch(logout()))
  }

  const handleLoginLogout = () => {
    isLoggedIn ? askToLogout() : history.push('/login')
  }

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
