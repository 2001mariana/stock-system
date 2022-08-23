import Container from '../../sharedComponents/Container'
import Table from '../../sharedComponents/Table'
import Header from '../Header/Header'

import './App.css'

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
