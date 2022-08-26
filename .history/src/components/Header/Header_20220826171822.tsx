import React from 'react'
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

import { RootState } from '../../redux'
import { logout } from '../../redux/Authentication/Authentication.actions'
import { User } from '../../services/Authentication.service'
import Button from '../../sharedComponents/Button'
import './Header.scss'

interface HeaderProps {
  title: string
  profile?: User
}

const Header = ({ title, profile }: HeaderProps) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const isLoggedIn = !!profile?._id

  window.sessionStorage.setItem('isLogged', `${isLoggedIn}`)

  const askToLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d04ed6',
      cancelButtonColor: '#d33'
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }).then(
      ({ value }: any) =>
        value &&
        dispatch(logout(), window.sessionStorage.removeItem('isLogged'))
    )
  }

  const handleLoginLogout = () => {
    isLoggedIn ? askToLogout() : navigate('/login')
  }

  return (
    <header className="Header">
      <h1>{title}</h1>
      <div>
        <Button
          variant="solid"
          color="secondary"
          label={isLoggedIn ? 'Logout' : 'Login'}
          size={'small-xxx'}
          onClick={handleLoginLogout}
        />
      </div>
    </header>
  )
}

const mapStateToProps = (state: RootState) => ({
  profile: state.authentication.profile
})

export default connect(mapStateToProps)(Header)
