import React from 'react'
import Header from '../../components/Header'
import ProductsCRUD from '../../components/Products/ProductsCRUD'
import Container from '../../sharedComponents/Container'

const ProductsView = () => {
  return (
    <>
      <Header title="StockSystem" />
      <Container>
        <ProductsCRUD />
      </Container>
    </>
  )
}

export default ProductsView
