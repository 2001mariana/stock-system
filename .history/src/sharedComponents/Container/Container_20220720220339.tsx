import { ReactNode } from 'react'
import './Container.scss'

interface ContainerProps {
  children: ReactNode
}

const Container = ({ children }: ContainerProps) => {
  return <div className="AppContainer">
    {children}
  </div>
}

export default Container