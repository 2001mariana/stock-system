import './Button.css'

interface ButtonProps extends  {
    label: string
}

const Button = ({ label }: ButtonProps) => {
    return (
        <button className="Button">{label}</button>
    )
}

export default Button;