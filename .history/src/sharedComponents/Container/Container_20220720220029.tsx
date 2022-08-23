import './Container.scss'

const Container= (props) => {
  return <div className="AppContainer">
    { props.children }
  </div>
}

export default Container