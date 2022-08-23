import { Paper } from '@mui/material'
import { createTheme } from '@mui/system'

import Container from '../../sharedComponents/Container'
import Table from '../../sharedComponents/Table'
import Header from '../Header/Header'

import './App.css'

interface Theme {
  status: {
    danger: string
  }
}

const theme = createTheme({
  status: {
    danger: #ffa500
  }
})
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Paper>
          <Header title="Header" />
          <Container>
            <Table />
          </Container>
        </Paper>
      </ThemeProvider>
    </div>
  )
}

export default App
