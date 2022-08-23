import React from 'react'
import './Input.scss'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Input = ({ label, ...props }: InputProps) => {
  return (
    <div className="Input">
      {/* <label>
        <span>{label}</span>
        <input {...props} />
      </label> */}
    </div>
  )
}

export default Input
