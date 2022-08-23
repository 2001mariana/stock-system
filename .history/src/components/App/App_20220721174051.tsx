import { Paper } from '@mui/material'
import { ThemeProvider } from '@mui/private-theming'
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
    pink: #f700ff
  }
})
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme.pink}>
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
