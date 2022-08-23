import { ReactNode } from 'react'
import './Form.scss'

declare interface FormProps {
  children: ReactNode
}

const Form = ({ children }: FormProps) => {
  return <form>{children}</form>
}

export default Form