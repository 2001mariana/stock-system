import Swal from 'sweetalert2'
import { Product } from '../../../sharedComponents/Table/Table.mockData'

interface SwalProductDeleteProps {
  product: Product
  productDelete: (id: string) => Promise<void>
}

function SwalProductDelete({ product, productDelete }: SwalProductDeleteProps) {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#d04ed6',
    confirmButtonText: `Yes, delete ${product.name}!`
  }).then((result) => {
    if (result.isConfirmed) {
      productDelete(product._id)
      Swal.fire('Deleted!', 'Your file has been deleted.', 'success')
    }
  })
}

export default SwalProductDelete
