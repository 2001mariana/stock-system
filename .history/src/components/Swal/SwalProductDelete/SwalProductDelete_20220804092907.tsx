import Swal from 'sweetalert2'
import { Product } from '../../../sharedComponents/Table/Table.mockData'

interface SwalProductDeleteProps {
  product: Product
  productDelete: (id: number) => void
}

function SwalProductDelete({ product, productDelete }: SwalProductDeleteProps) {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d04ed6',
    cancelButtonColor: '#d33',
    confirmButtonText: `Yes, delete ${product.name}!`
  }).then((result) => {
    if (result.isConfirmed) {
      productDelete(id)
      Swal.fire('Deleted!', 'Your file has been deleted.', 'success')
    }
  })
}

export default SwalProductDelete
