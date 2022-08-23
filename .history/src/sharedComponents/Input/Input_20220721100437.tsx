interface InputProps {
  label: string
}

const Input = ({}: InputProps) => {
  return (
    <div className="Input">
      <label>
        <span>{label}</span>
        <input></input>
      </label>
    </div>
  )
}

export default Input
