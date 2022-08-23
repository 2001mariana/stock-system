import { createTheme, Paper, unstable_createMuiStrictModeTheme } from '@mui/material'

import Container from '../../sharedComponents/Container'
import Table from '../../sharedComponents/Table'
import Header from '../Header/Header'

import './App.css'

interface Theme {
  status: {
    danger: string
  }
}

const theme = unstable_createMuiStrictModeTheme: Theme({
  status: {
    danger: #ffa500
  }
})
function App() {
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
