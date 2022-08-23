import './Input.scss'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Input = ({ label }: InputProps) => {
  return (
    <div className="Input">
      <label>
        <span>{label}</span>
        <input placeholder="Qualquer coisa" />
      </label>
    </div>
  )
}

export default Input
