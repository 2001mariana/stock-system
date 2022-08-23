import './Button.css'

interface ButtonProps extend {
    label: string
}

const Button = ({ label }: ButtonProps) => {
    return (
        <button className="Button">{label}</button>
    )
}

export default Button;