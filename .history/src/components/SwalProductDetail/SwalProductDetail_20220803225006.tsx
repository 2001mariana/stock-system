import { useState } from 'react'
import Swal from 'sweetalert2'
import Container from '../../sharedComponents/Container'
import Table, { TableHeader } from '../../sharedComponents/Table'
import Products, { Product } from '../../sharedComponents/Table/Table.mockData'
import Header from '../Header/Header'
import ProductForm, { ProductCreator } from '../Products/ProductForm'

import './App.css'

const headers: TableHeader[] = [

    Swal.fire({
      title: 'Product Detail',
      text: `${product.name} costs $${product.price} and we have ${product.stock} available in stock.`,
      icon: 'info',
      confirmButtonText: 'Ok'
    })
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
