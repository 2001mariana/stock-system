import { useState } from 'react'
import Button from '../../sharedComponents/Button'
import Container from '../../sharedComponents/Container'
import Input from '../../sharedComponents/Input'
import Header from '../Header/Header'

import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('')

  return (
    <div className="App">
      <Header title="Header" />
      qualquer coisa
      <Container>
        <Button
          label="Button"
          size="small"
          variant="solid"
          color={'primary'}
          onClick={() => console.log('clicou no botão')}
        />
        <Input label="AAA" placeholder="aa" value={in} />
      </Container>
    </div>
  )
}

export default App
