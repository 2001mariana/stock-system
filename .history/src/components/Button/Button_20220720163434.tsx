import { ButtonHTMLAttributes } from 'react';
import './Button.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string
}

const Button = ({ label }: ButtonProps) => {
    return (
        <button className="Button">{label}</button>
    )
}

export default Button;