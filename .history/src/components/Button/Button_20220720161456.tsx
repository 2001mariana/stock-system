import './Button.css'

interface ButtonProps {
    label: string
}

const Button = ({ label }: ButtonProps) => {
    return (
        <button className="Button">Button</button>
    )
}

export default Button;