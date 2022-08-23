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
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Deleted!', 'Your file has been deleted.', 'success')
    }
  })
  //   const SwalProductDelete = Swal.mixin({
  //     customClass: {
  //       confirmButton: 'Button Button--outlined-primary',
  //       cancelButton: 'Button Button--solid-danger'
  //     },
  //     buttonsStyling: false
  //   })

  //   SwalProductDelete.fire({
  //     title: 'Tem certeza?',
  //     text: 'Não será possível reverter esta ação!',
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonText: 'Cancelar',
  //     cancelButtonText: 'Excluir',
  //     allowEnterKey: false
  //   }).then(async (result) => {
  //     if (result.isConfirmed) {
  //       SwalProductDelete.fire(
  //         'Cancelado',
  //         'Este usuário está seguro!',
  //         'error'
  //       ).then(async () => {
  //         console.log('seguro')
  //       })
  //     } else if (result.dismiss === Swal.DismissReason.cancel) {
  //       productDelete(id)
  //       SwalProductDelete.fire(
  //         'Excluido!',
  //         'Usuário excluido com sucesso.',
  //         'success'
  //       )
  //     }
  //   })
}

export default SwalProductDelete
