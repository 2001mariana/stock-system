import Container from '../../sharedComponents/Container'
import Table, { TableHeader } from '../../sharedComponents/Table'
import Products from '../../sharedComponents/Table/Table.mockData'
import Header from '../Header/Header'
import ProductForm from '../Products/ProductForm'

import './App.css'

const headers: TableHeader[] = [
  { key: 'id', value: '#' },
  { key: 'name', value: 'Product' },
  { key: 'price', value: 'Price', right: true },
  { key: 'stock', value: 'Available Stock', right: true }
]

function App() {

  const handleProductSubmit = (product: ProductCreator) => {
    console.log()
  }

  return (
    <div className="App">
      <Header title="Header" />
      <Container>
        <Table headers={headers} data={Products} />
        <ProductForm />
      </Container>
    </div>
  )
}

export default App
