import Swal from 'sweetalert2'

import './App.css'

function App() {
  return Swal.fire({
    title: 'Product Detail',
    text: `${product.name} costs $${product.price} and we have ${product.stock} available in stock.`,
    icon: 'info',
    confirmButtonText: 'Ok'
  })
}

export default App
