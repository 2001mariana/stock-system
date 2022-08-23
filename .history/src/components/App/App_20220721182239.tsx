import { useState } from 'react'
import Button from '../../sharedComponents/Button'
import Container from '../../sharedComponents/Container'
import Switch from '../../sharedComponents/Switch/Switch'
import Table from '../../sharedComponents/Table'
import Header from '../Header/Header'

import './App.scss'

function App() {
  const [pinkControl, setPinkControl] = useState('')

  return (
    <div className="App">
      <Header title="Header" />
      <Container>
        <Table />
        <Switch />
        <Button label="pink" onClick={() => setPink} />
        <div className="App__test-color">cor</div>
      </Container>
    </div>
  )
}

export default App
