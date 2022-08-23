import Header from '../Header/Header'
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
