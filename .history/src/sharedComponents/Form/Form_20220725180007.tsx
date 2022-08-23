import './Form.scss'

declare interface FormProps {
  children?: JSX.Element
}

const Form = ({ children }: FormProps) => {
  return <form>{children}</form>
}

export default Form
