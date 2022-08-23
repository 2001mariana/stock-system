import React from 'react'
import { connect } from 'react-redux'

import { RootState } from '../../redux'
import { Product } from '../../sharedComponents/Table/Table.mockData'

import './Header.scss'

interface HeaderProps {
  title: StringConstructor
}

const Header = ({ title }: HeaderProps) => {
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
