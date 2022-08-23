import { Paper } from '@mui/material'

import Container from '../../sharedComponents/Container'
import Table from '../../sharedComponents/Table'
import Header from '../Header/Header'

import './App.css'

declare module '@material-ui/core/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

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
