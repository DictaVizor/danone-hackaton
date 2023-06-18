import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

export enum ButtonVariant {
  TEXT = 'TEXT',
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
}

export enum ButtonSize {
  SMALL = 'SMALL',
  NORMAL = 'NORMAL',
}

export type ButtonProps = {
  children?: React.ReactNode
  leftIcon?: React.ReactNode
  variant?: `${ButtonVariant}` | ButtonVariant
  className?: string
  size?: `${ButtonSize}` | ButtonSize
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>
