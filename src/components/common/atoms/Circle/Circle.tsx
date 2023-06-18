import { twMerge } from 'tailwind-merge'
import { CircleProps } from './Circle.types'

export const Circle = ({ children, className }: CircleProps) => {
  return (
    <div
      className={twMerge(
        'text-center text-violet-blue aspect-square justify-center flex flex-col border border-violet-blue rounded-full h-24 w-24',
        className,
      )}
    >
      {children}
    </div>
  )
}
