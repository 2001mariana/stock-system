import './Container.scss'

const Container: React.FC = (props) => {
  return <div className="AppContainer">
    { props.children }
  </div>
}

export default Container