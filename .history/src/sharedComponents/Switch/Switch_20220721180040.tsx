import React from 'react'
import './Input.scss'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const  = ({ label, ...props }: Props) => {
  return (
    <div className="Input">
      <label className="switch">
        <Input type="checkbox" label="" />
        <span className="slider round"></span>
      </label>
      {/* <label>
        <span>{label}</span>
        <input {...props} />
      </label> */}
    </div>
  )
}

export default 
