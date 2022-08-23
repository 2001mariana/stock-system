import { deleteUser } from 'services/User'
import Swal from 'sweetalert2'

interface SwalProps {
  id: number
}

function Swal({ id }: SwalProps) {
  const Swal = Swal.mixin({
    customClass: {
      confirmButton: 'Button Button--solid-primary',
      cancelButton: 'Button Button--solid-danger'
    },
    buttonsStyling: false
  })

  Swal
    .fire({
      title: 'Tem certeza?',
      text: 'Não será possível reverter esta ação!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Cancelar',
      cancelButtonText: 'Excluir',
      allowEnterKey: false
    })
    .then(async (result) => {
      if (result.isConfirmed) {
        Swal
          .fire('Cancelado', 'Este usuário está seguro!', 'error')
          .then(async (result) => {
            if (result.isConfirmed) {
              navigate(`../configurar-usuario`)
            } else {
              setTimeout(() => {
                navigate(`../configurar-usuario`)
              }, 500)
            }
          })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        await deleteUser(uuid)
        Swal
          .fire('Excluido!', 'Usuário excluido com sucesso.', 'success')
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
            Swal.fire(
              'Acesso negado!',
              'Usuário não pode ser excluído.',
              'error'
            )
          )
      }
    })
}

export default Swal
