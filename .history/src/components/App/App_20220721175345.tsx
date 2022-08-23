import Container from '../../sharedComponents/Container'
import Input from '../../sharedComponents/Input'
import Table from '../../sharedComponents/Table'
import Header from '../Header/Header'

import './App.scss'

function App() {
  return (
    <div className="App">
      <Header title="Header" />
      <Container>
        <Table />

        <Input ></Input>

        <label className="switch">
          <input type="checkbox">
          <span className="slider round"></span>
        </label>
        <div className="App__test-color">cor</div>
      </Container>
    </div>
  )
}

export default App
