import { RootState } from '../../redux'

import './Header.scss'

interface HeaderProps {
  title: string
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
