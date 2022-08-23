import Button from '../../sharedComponents/Button'
import Container from '../../sharedComponents/Container'
import Form from '../../sharedComponents/Form'
import Input from '../../sharedComponents/Input'
import Table, { TableHeader } from '../../sharedComponents/Table'
import Products from '../../sharedComponents/Table/Table.mockData'
import Header from '../Header/Header'

import './App.css'

const headers: TableHeader[] = [
  { key: 'id', value: '#' },
  { key: 'name', value: 'Product' },
  { key: 'price', value: 'Price', right: true },
  { key: 'stock', value: 'Available Stock', right: true }
]

function App() {
  return (
    <div className="App">
      <Header title="Header" />
      <Container>
        <Table headers={headers} data={Products} />
        <Form title="Product Form" onSubmit={console.log}>
          <Input label="Nome" placeholder="E.g.: Cookie" />
          <Input
            label="Price"
            type="number"
            step={0.01}
            min="0"
            placeholder="E.g.: 1.25"
          />
          <Input label="Nome" type="number" min="0" placeholder="E.g.: 12" />
          <Button />
        </Form>
      </Container>
    </div>
  )
}

export default App
