import { ButtonProps, ButtonSize, ButtonVariant } from './Button.types'

export const buttonVariantStyles: Record<
  Required<ButtonProps>['variant'],
  string
> = {
  [ButtonVariant.PRIMARY]: 'bg-violet-blue hover:bg-violet-blue-300',
  [ButtonVariant.TEXT]: 'bg-transparent drop-shadow-none',
  [ButtonVariant.SECONDARY]:
    'bg-transparent border-solid border-violet-blue border text-violet-blue font-semibold hover:bg-violet-blue hover:text-white',
}

export const buttonSizeStyles: Record<Required<ButtonProps>['size'], string> = {
  [ButtonSize.NORMAL]: 'py-3 px-4',
  [ButtonSize.SMALL]: 'py-2 px-2',
}
