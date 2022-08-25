import React from 'react'
import { connect, useDispatch } from 'react-redux'
import Swal from 'sweetalert2'

import { RootState } from '../../redux'
import { logout } from '../../redux/Authentication/Authentication.actions'
import { User } from '../../services/Authentication.service'
import { Product } from '../../sharedComponents/Table/Table.mockData'

import './Header.css'

declare interface HeaderProps {
  title: string
  firstProduct: Product
  profile?: User
}

const Header: React.FC<HeaderProps> = (props) => {
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
    isLoggedIn ? askToLogout() : navigate.push('/login')
  }

  return (
    <header className="AppHeader">
      <h1>{props.title}</h1>
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
