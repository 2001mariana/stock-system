import Container from '../../sharedComponents/Container'
import Form from '../../sharedComponents/Form'
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
        <Form children={} />
      </Container>
    </div>
  )
}

export default App
