import { useState } from 'react'
import Swal from 'sweetalert2'
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
  return Swal.fire({
    title: 'Product Detail',
    text: `${product.name} costs $${product.price} and we have ${product.stock} available in stock.`,
    icon: 'info',
    confirmButtonText: 'Ok'
  })
}

export default App
