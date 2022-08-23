import Swal from 'sweetalert2'

interface SwalProductDeleteProps {
  id: number
  productDelete: (id: number) => void
}

function SwalProductDelete({ id, productDelete }: SwalProductDeleteProps) {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d04ed6',
    cancelButtonColor: '#d33',
    confirmButtonText: `Yes, delete ${product}!`
  }).then((result) => {
    if (result.isConfirmed) {
      productDelete(id)
      Swal.fire('Deleted!', 'Your file has been deleted.', 'success')
    }
  })
}

export default SwalProductDelete
