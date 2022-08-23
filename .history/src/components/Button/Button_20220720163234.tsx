import './Button.css'

interface ButtonProps extends B {
    label: string
}

const Button = ({ label }: ButtonProps) => {
    return (
        <button className="Button">{label}</button>
    )
}

export default Button;