import { ReactNode } from 'react'
import './Container.scss'

interface ContainerProps {
  children: ReactNode
}

const Container = () => {
  return <div className="AppContainer">
    props.children
  </div>
}

export default Container