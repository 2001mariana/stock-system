import Swal from 'sweetalert2'

import './SwalProductDetail.css'

function SwalProductDetail(product) {
  return Swal.fire({
    title: 'Product Detail',
    text: `${product.name} costs $${product.price} and we have ${product.stock} available in stock.`,
    icon: 'info',
    confirmButtonText: 'Ok'
  })
}

export default SwalProductDetail
