import { Children } from 'react'
import './Form.scss'

declare interface FormProps {
  children?: JSX.Element
}

const Form = () => {
  return <form>{Children}</form>
}

export default Form
