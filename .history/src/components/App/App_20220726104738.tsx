import { useState } from 'react'
import Container from '../../sharedComponents/Container'
import Table, { TableHeader } from '../../sharedComponents/Table'
import Products from '../../sharedComponents/Table/Table.mockData'
import Header from '../Header/Header'
import ProductForm, { ProductCreator } from '../Products/ProductForm'

import './App.css'

const headers: TableHeader[] = [
  { key: 'id', value: '#' },
  { key: 'name', value: 'Product' },
  { key: 'price', value: 'Price', right: true },
  { key: 'stock', value: 'Available Stock', right: true }
]

function App() {
  const [products, setProducts] = useState(Products)

  const handleProductSubmit = (product: ProductCreator) => {
    console.log(product)
  }

  return (
    <div className="App">
      <Header title="Header" />
      <Container>
        <Table headers={headers} data={products} />
        <ProductForm onSubmit={handleProductSubmit} />
      </Container>
    </div>
  )
}

export default App
