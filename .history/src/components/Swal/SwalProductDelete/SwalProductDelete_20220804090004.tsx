import Swal from 'sweetalert2'

interface SwalProductDeleteProps {
  id: number
  productDelete: (id: number) => void
}

function SwalProductDelete({ id }: SwalProductDeleteProps) {
  const SwalProductDelete = Swal.mixin({
    customClass: {
      confirmButton: 'Button Button--solid-primary',
      cancelButton: 'Button Button--solid-danger'
    },
    buttonsStyling: false
  })

  SwalProductDelete.fire({
    title: 'Tem certeza?',
    text: 'Não será possível reverter esta ação!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Cancelar',
    cancelButtonText: 'Excluir',
    allowEnterKey: false
  }).then(async (result) => {
    if (result.isConfirmed) {
      SwalProductDelete.fire(
        'Cancelado',
        'Este usuário está seguro!',
        'error'
      ).then(async () => {
        console.log('seguro')
      })
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      console.log('colocar aqui ação de deletar', id)
      SwalProductDelete.fire(
        'Excluido!',
        'Usuário excluido com sucesso.',
        'success'
      )
    }
  })
}

export default SwalProductDelete
