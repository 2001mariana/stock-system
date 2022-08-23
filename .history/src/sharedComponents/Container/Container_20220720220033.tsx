import './Container.scss'

const Container = (s) => {
  return <div className="AppContainer">
    { props.children }
  </div>
}

export default Container