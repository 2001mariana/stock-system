import { useEffect, useState } from 'react'

import Button from '../../sharedComponents/Button'
import Container from '../../sharedComponents/Container'
import Switch from '../../sharedComponents/Switch/Switch'
import Table from '../../sharedComponents/Table'
import Header from '../Header/Header'

import './App.scss'

function App() {
  const [pinkControl, setPinkControl] = useState('App__test-color')
  const [pinkControlE, setPinkControlE] = useState<boolean>()

  useEffect(() => {
    // 
    pinkControlE && setPinkControl('App__test-color pink-theme')
    console.log(pinkControlE)
  }, [pinkControlE])

  return (
    <div className="App">
      <Header title="Header" />
      <Container>
        <Table />
        <Switch />
        <Button label="pink" onClick={() => setPinkControlE(!pinkControlE)} />
        <div className={pinkControl}>cor</div>
      </Container>
    </div>
  )
}

export default App
