interface InputProps {
  label: string
}

const Input = () => {
  return (
    <label>
      <span>{label}</span>
      <input></input>
    </label>
  )
}

export default Input
