interface InputProps {
  label: string
}

const Input = ({ label }: InputProps) => {
  return (
    <div className="Input">
      <label>
        <span>{label}</span>
        <input/>
      </label>
    </div>
  )
}

export default Input
