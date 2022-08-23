import './Form.scss'

declare interface FormProps {
  children?: JSX.Element
}

const Form = () => {
  return <form>{children}</form>
}

export default Form
