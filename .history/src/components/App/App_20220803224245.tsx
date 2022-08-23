import { useState } from 'react'
import Swal from 'sweetalert'
import Container from '../../sharedComponents/Container'
import Table, { TableHeader } from '../../sharedComponents/Table'
import Products, { Product } from '../../sharedComponents/Table/Table.mockData'
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

  const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>()

  const handleProductSubmit = (product: ProductCreator) => {
    setProducts([
      ...products,
      {
        id: products.length + 1,
        ...product
      }
    ])
  }

  const handleProductUpdate = (newProduct: Product) => {
    setProducts(
      products.map((product) =>
        product.id === newProduct.id ? newProduct : product
      )
    )

    setUpdatingProduct(undefined)
  }

  const handleProductEdit = (product: Product) => {
    setUpdatingProduct(product)
  }

  const handleProductDetail = (product: Product) => {
    Swal(
      `${product.name}`,
      `Costs $${product.price} and we have ${product.stock} available in stc.`
    )
  }

  return (
    <div className="App">
      <Header title="Header" />
      <Container>
        <Table
          headers={headers}
          data={products}
          enableActions
          onDelete={console.log}
          onEdit={handleProductEdit}
          onViewDetail={handleProductDetail}
        />
        <ProductForm
          formProps={updatingProduct}
          onSubmit={handleProductSubmit}
          onUpdate={handleProductUpdate}
        />
      </Container>
    </div>
  )
}

export default App
