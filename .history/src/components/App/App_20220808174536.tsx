import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

import {
  createSingleProduct,
  deleteSingleProduct,
  getAllProducts,
  updateSingleProduct
} from '../../services/Products.services'
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
  return (
    <div className="App">
      <Header title="Stock System" />
      <Container>
        <Produ
      </Container>
    </div>
  )
}

export default App
