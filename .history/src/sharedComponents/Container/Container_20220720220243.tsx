import './Container.scss'

interface OffcanvasProps {
    label?: string
    position?: 'right' | 'left'
    size?: 'small' | 'medium'
    isVisible?: boolean
    onClose?: () => void
    children: ReactNode
  }

const Container = () => {
  return <div className="AppContainer">
    props.children
  </div>
}

export default Container