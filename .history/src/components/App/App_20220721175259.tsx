import Container from '../../sharedComponents/Container'
import Table from '../../sharedComponents/Table'
import Header from '../Header/Header'

import './App.scss'

function App() {
  return (
    <div className="App">
      <Header title="Header" />
      <Container>
        <Table />

        <label class="switch">
        <input type="checkbox">
  <span class="slider round"></span>
</label>
        <div className="App__test-color">cor</div>
      </Container>
    </div>
  )
}

export default App
