import Icon from '@mdi/react'
import classNames from 'classnames'
import React from 'react'
import { ButtonHTMLAttributes } from 'react'

import './Button.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  label?: string
  color?: 'primary'| 'danger' | 'danger'
  variant?: 'solid' | 'outlined' | 'text'
  size?: 'small-xxx' | 'small-xx' | 'small' | 'medium' | 'large'
  icon?: string
  iconPosition?: 'right' | 'left'
}

export default function Button({
  className,
  label,
  color = 'primary',
  variant = 'solid',
  size = 'large',
  icon,
  iconPosition = 'right',
  ...props
}: ButtonProps) {
  const buttonClasses = classNames(
    'Button',
    `Button--${variant}-${color}`,
    `Button--${size}`,
    `Button--${className}`
  )

  const buttonIconClasses = classNames('Button__icon', {
    [`Button__icon--${iconPosition}`]: label
  })

  return (
    <button className={buttonClasses} {...props}>
      {icon && (
        <div className={buttonIconClasses}>
          <Icon path={icon} size="1rem" />
        </div>
      )}

      {label && <span className="Button__label">{label}</span>}
    </button>
  )
}
