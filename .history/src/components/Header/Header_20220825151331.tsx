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

  const askToLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#09f',
      cancelButtonColor: '#d33'
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }).then(({ value }: any) => value && dispatch(logout()))
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
          size: ;
        />
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
