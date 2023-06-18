import { ButtonProps } from './Button.types'
import { buttonSizeStyles, buttonVariantStyles } from './Button.styles'
import { twMerge } from 'tailwind-merge'

export const Button = ({
  children,
  leftIcon,
  variant = 'PRIMARY',
  className,
  size = 'NORMAL',
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        'text-white flex gap-4 h-fit p-2 rounded drop-shadow',
        buttonVariantStyles[variant],
        buttonSizeStyles[size],
        className,
      )}
      {...rest}
    >
      {leftIcon}
      {children}
    </button>
  )
}
