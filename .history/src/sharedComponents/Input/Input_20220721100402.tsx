interface InputProps {
  label: string
}

const Input = () => {
  return (
      <div className="Input"></div>
    <label>
      <span>{label}</span>
      <input></input>
    </label>
  )
}

export default Input
