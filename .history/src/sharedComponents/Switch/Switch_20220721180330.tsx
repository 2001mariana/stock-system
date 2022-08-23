import React from 'react'
import './Input.scss'

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Switch = ({ label, ...props }: SwitchProps) => {
  return (
    <div className="Input">
      <label className="switch">
        <input type="checkbox" {...props} />
        <span className="slider round">{label}</span>
      </label>
    </div>
  )
}

export default Switch
