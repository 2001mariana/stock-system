import { deleteUser } from 'services/User'
import Swal from 'sweetalert2'

interface SwalDeleteUserProps {
  id: number
}

function SwalDeleteUser({ id }: SwalDeleteUserProps) {
  const swalDeleteUser = Swal.mixin({
    customClass: {
      confirmButton: 'Button Button--solid-primary',
      cancelButton: 'Button Button--solid-danger'
    },
    buttonsStyling: false
  })

  swalDeleteUser
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
        swalDeleteUser
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
        swalDeleteUser
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
            swalDeleteUser.fire(
              'Acesso negado!',
              'Usuário não pode ser excluído.',
              'error'
            )
          )
      }
    })
}

export default SwalDeleteUser
