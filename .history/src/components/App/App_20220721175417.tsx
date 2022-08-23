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

        <Input type="checkbox"  />

        <div className="App__test-color">cor</div>
      </Container>
    </div>
  )
}

export default App
