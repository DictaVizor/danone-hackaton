import { twMerge } from 'tailwind-merge'
import { CalorieIntakeCounterProps } from './CalorieIntakeCounter.types'
import { calorieIntakeCounterVariantStyles } from './CalorieIntakeCounter.styles'

export const CalorieIntakeCounter = ({
  label,
  value,
  variant = 'PRIMARY',
}: CalorieIntakeCounterProps) => {
  const variants = calorieIntakeCounterVariantStyles[variant]

  return (
    <div
      className={twMerge(
        'text-center text-violet-blue p-4 aspect-square justify-center flex flex-col',
        variants.container,
      )}
    >
      <p className={variants.value}>{value.toLocaleString()}</p>
      <p>{label}</p>
    </div>
  )
}
