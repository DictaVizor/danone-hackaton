import { twMerge } from 'tailwind-merge'
import { DiaryCardProps } from './DiaryCard.types'

export const DiaryCard = ({ children, title, className }: DiaryCardProps) => {
  return (
    <div
      className={twMerge(
        'flex flex-col border rounded border-light-blue2 py-4 px-8 gap-8',
        className,
      )}
    >
      <div className="bg-light-blue4 rounded w-full p-2 border border-light-blue2">
        <h1 className="text-dark-blue">{title}</h1>
      </div>
      {children}
    </div>
  )
}
