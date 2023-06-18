import { ChangeEvent, useState } from 'react'
import { Meal } from './CalorieIntakeMealSubForm.types'
import { useCalorieIntakeStore } from '../store'
import { shallow } from 'zustand/shallow'

export const useMealFields = (meal: Meal) => {
  const [setConsumption, setLimit] = useCalorieIntakeStore((state) => [
    state.setMealCalorieConsumption,
    state.setMealCalorieLimit,
  ])

  const { consumed, limit } = useCalorieIntakeStore(
    (state) => state.mealCalories[meal],
    shallow,
  )

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>) => {
    // When input is emptied passed value is NaN
    if (!event.target.valueAsNumber) {
      setLimit(meal, 0)
      return
    }

    setLimit(meal, event.target.valueAsNumber)
  }

  const handleConsumptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    // When input is emptied passed value is NaN
    if (!event.target.valueAsNumber) {
      setConsumption(meal, 0)
      return
    }

    setConsumption(meal, event.target.valueAsNumber)
  }

  return { consumed, limit, handleLimitChange, handleConsumptionChange }
}

export const useCalorieIntakeMealSubForm = () => {
  const [editing, setEditing] = useState<boolean>(false)

  const handleEditClick = () => {
    setEditing((currentValue) => !currentValue)
  }

  return { handleEditClick, editing }
}
