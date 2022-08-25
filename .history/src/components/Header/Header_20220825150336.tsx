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
  const navigate = useNavigate

  return (
    <header className="Header">
      <h1>{title}</h1>
    </header>
  )
}

const mapStateToProps = (state: RootState) => ({
  firstProduct: state.products[0]
})

export default connect(mapStateToProps)(Header)
