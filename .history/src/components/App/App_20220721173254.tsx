import { Paper } from '@mui/material'

import Container from '../../sharedComponents/Container'
import Table from '../../sharedComponents/Table'
import Header from '../Header/Header'

import './App.css'

function App() {

  const theme = createMui

  return (
    <div className="App">
      <Paper>
        <Header title="Header" />
        <Container>
          <Table />
        </Container>
      </Paper>
    </div>
  )
}

export default App
