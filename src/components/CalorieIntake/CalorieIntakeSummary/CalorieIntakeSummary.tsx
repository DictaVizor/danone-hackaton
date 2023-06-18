'use client'
import { CalorieIntakeCounter } from '../CalorieIntakeCounter/CalorieIntakeCounter'
import { useCalorieIntakeSummary } from './CalorieIntakeSummary.hooks'

export const CalorieIntakeSummary = () => {
  const { totalCalories, remainingCalories, consumedCalories } =
    useCalorieIntakeSummary()

  return (
    <div className="flex justify-center gap-12">
      <CalorieIntakeCounter
        label="Consumed"
        value={consumedCalories}
        variant="SECONDARY"
      />
      <CalorieIntakeCounter label="Remaining" value={remainingCalories} />
      <CalorieIntakeCounter
        label="Total"
        value={totalCalories}
        variant="SECONDARY"
      />
    </div>
  )
}
