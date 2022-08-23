interface InputProps {
  label: string
}

const Input = ({ label }: InputProps) => {
  return (
    <div className="Input">
      <label>
        <span>{label}</span>
        <input placeholder="" />
      </label>
    </div>
  )
}

export default Input
