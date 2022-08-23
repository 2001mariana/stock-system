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
import ProductsCrud from '../Products/ProductsCRUD'

import './App.css'

function App() {
  return (
    <div className="App">
      <Header title="Stock System" />
      <Container>
        <ProductsCrud />
      </Container>
    </div>
  )
}

export default App
