import { useEffect, useState } from 'react'

import { createSingleProduct, getAllProducts } from '../../services/Products.services'
import Container from '../../sharedComponents/Container'
import Table, { TableHeader } from '../../sharedComponents/Table'
import { Product } from '../../sharedComponents/Table/Table.mockData'
import Header from '../Header/Header'
import ProductForm, { ProductCreator } from '../Products/ProductForm'
import SwalProductDelete from '../Swal/SwalProductDelete'
import SwalProductDetail from '../Swal/SwalProductDetail'

import './App.css'

const headers: TableHeader[] = [
  { key: 'id', value: '#' },
  { key: 'name', value: 'Product' },
  { key: 'price', value: 'Price', right: true },
  { key: 'stock', value: 'Available Stock', right: true }
]

function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>()

  useEffect(() => {
    fetchData()
  }, [])

  const handleProductSubmit = (product: ProductCreator) => {
    try {
      await createSingleProduct(product)
      fetchData()
    } catch (err) {
      Swal.fire('Oops!', err.message, 'error')
    }
  }

  const handleProductUpdate = (newProduct: Product) => {
    setProducts(
      products.map((product) =>
        product._id === newProduct._id ? newProduct : product
      )
    )

    setUpdatingProduct(undefined)
  }

  const handleProductEdit = (product: Product) => {
    setUpdatingProduct(product)
  }

  const handleProductDetail = (product: Product) => {
    SwalProductDetail(product)
  }

  const productDelete = (productProps: Product) => {
    setProducts(products.filter((product) => product._id !== productProps._id))
  }

  const handleProductDelete = (product: Product) => {
    SwalProductDelete({ product: product, productDelete: productDelete })
  }

  return (
    <div className="App">
      <Header title="Stock System" />
      <Container>
        <Table
          headers={headers}
          data={products}
          enableActions
          onDelete={handleProductDelete}
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
