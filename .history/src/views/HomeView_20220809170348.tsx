import Container from '../shared/Container'

import Header from '../components/Header'
import ProductsCRUD from '../components/Products/ProductsCRUD'

const HomeView = () => {
  return (
    <>
      <Header title="AlgaStock" />
      <Container>
        <ProductsCRUD />
      </Container>
    </>
  )
}

export default HomeView
