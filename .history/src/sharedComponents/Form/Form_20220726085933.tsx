import { FormEvent, ReactNode } from 'react'

import './Form.scss'

interface FormProps {
  title?: string
  children: ReactNode
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
}

export default function Form({ titlonSubmit }: FormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onSubmit && onSubmit(event)
  }

  return (
    <form className="Form" onSubmit={handleSubmit}>
      {title && <div className="Form__title">{title}</div>}
      {children}
    </form>
  )
}
