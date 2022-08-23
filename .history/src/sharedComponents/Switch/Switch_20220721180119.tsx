import React from 'react'
import './Input.scss'

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Switch = ({ label, ...props }: SwitchProps) => {
  return (
    <div className="Input">
      <label class="switch">
  <input type="checkbox">
  <span class="slider round"></span>
</label>
      {/* <label>
        <span>{label}</span>
        <input {...props} />
      </label> */}
    </div>
  )
}

export default Switch
