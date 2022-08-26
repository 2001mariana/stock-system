interface disabledFormButtonControlProps {
  labelButton: string
}

const disabledFormButtonControl = ({
  labelButton
}: disabledFormButtonControlProps) => {
  if (
    (labelButton === 'Submit' && form.name === '',
    form.price === '',
    form.stock === '')
  ) {
    return true
  } else if (labelButton === 'Update') {
    if (
      initialFormState.name === form.name &&
      initialFormState.price === form.price &&
      initialFormState.stock === form.stock
    ) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

export default disabledFormButtonControl
