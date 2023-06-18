import { twMerge } from 'tailwind-merge'
import { CalorieBarProps } from './CalorieBar.types'

export const CalorieBar = ({
  max,
  value,
  progressClassName,
  spanClassName,
}: CalorieBarProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <progress
        className={twMerge(
          'w-52 progress-product bg-white border-2 h-6 rounded-none p-0.5',
          progressClassName,
        )}
        value={value}
        max={max}
      />
      <span className={twMerge('text-violet-blue ', spanClassName)}>
        {value} / {max} kcal
      </span>
    </div>
  )
}
