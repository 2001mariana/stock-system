import './Button.css'

interface ButtonProps {
    label: string
}

const Button = ({  }: ButtonProps) => {
    return (
        <button className="Button">Button</button>
    )
}

export default Button;