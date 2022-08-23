import { FormEvent, ReactNode } from 'react'

interface FormProps {
  children: ReactNode
}

export default function Form({ onSubmit, children }: FormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onSubmit(event)
  }

  return (
    <form className="Form" onSubmit={handleSubmit}>
      {children}
    </form>
  )
}
