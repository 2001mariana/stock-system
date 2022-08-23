import './Container.scss'

interface OffcanvasProps {

    onClose?: () => void
    children: ReactNode
  }

const Container = () => {
  return <div className="AppContainer">
    props.children
  </div>
}

export default Container