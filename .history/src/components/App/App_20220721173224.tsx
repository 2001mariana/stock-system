import { Paper } from '@mui/material'

import Container from '../../sharedComponents/Container'
import Table from '../../sharedComponents/Table'
import Header from '../Header/Header'

import './App.css'

function App() {
  return (
    <div className="App">
<
      <Header title="Header" />
      <Container>
        <Table />
      </Container>
    </div>
  )
}

export default App
