import { FormEvent, ReactNode } from 'react'

import './Form.scss'

interface FormProps {
  title?: string
  children: ReactNode
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
}

export default function Form({ onSubmit, children }: FormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onSubmit && onSubmit(event)
  }

  return (
    <form className="Form" onSubmit={handleSubmit}>
      {}
      {children}
    </form>
  )
}
