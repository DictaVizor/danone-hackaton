import { useCalorieIntakeStore } from '../store'
import { shallow } from 'zustand/shallow'
import { useMemo } from 'react'

export const useCalorieIntakeSummary = () => {
  const burnedCalories = useCalorieIntakeStore((state) => state.burnedCalories)
  const mealCalories = useCalorieIntakeStore(
    (state) => state.mealCalories,
    shallow,
  )

  const { consumedCalories, totalCalories } = useMemo(() => {
    const consumedCalories = Object.values(mealCalories).reduce(
      (total, mealCalorie) => total + mealCalorie.consumed,
      0,
    )

    const totalCalories = Object.values(mealCalories).reduce(
      (total, mealCalorie) => total + mealCalorie.limit,
      0,
    )

    return { consumedCalories, totalCalories }
  }, [mealCalories])

  const remainingCalories = useMemo(() => {
    return totalCalories - consumedCalories
  }, [consumedCalories, totalCalories])

  return { burnedCalories, consumedCalories, remainingCalories, totalCalories }
}
