import { deleteUser } from 'services/User'
import Swal from 'sweetalert2'

interface SwalProductDeleteProps {
  id: number
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
      ).then(async (result) => {
        
      })
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      await deleteUser(uuid)
      SwalProductDelete.fire(
        'Excluido!',
        'Usuário excluido com sucesso.',
        'success'
      )
        .then(async (result) => {
          if (result.isConfirmed) {
            navigate(`../configurar-usuario`)
          } else {
            setTimeout(() => {
              navigate(`../configurar-usuario`)
            }, 500)
          }
        })
        .catch(() =>
          SwalProductDelete.fire(
            'Acesso negado!',
            'Usuário não pode ser excluído.',
            'error'
          )
        )
    }
  })
}

export default SwalProductDelete
