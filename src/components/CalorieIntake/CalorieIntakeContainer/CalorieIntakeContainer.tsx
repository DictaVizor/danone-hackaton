import { CalorieIntakeContainerProps } from './CalorieIntakeContainer.types'

export const CalorieIntakeContainer = ({
  children,
}: CalorieIntakeContainerProps) => {
  return (
    <div className="flex bg-white border-violet-blue border rounded p-8 w-full flex-col">
      {children}
    </div>
  )
}
