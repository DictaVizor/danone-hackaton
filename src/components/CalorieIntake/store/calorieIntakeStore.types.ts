import { Meal } from '../CalorieIntakeMealForm/CalorieIntakeMealSubForm.types'

export type MealCalorieRecord = {
  consumed: number
  limit: number
}

export type CalorieIntakeStoreState = {
  mealCalories: Record<Meal, MealCalorieRecord>
  burnedCalories: number
  setMealCalorieConsumption: (meal: Meal, consumption: number) => void
  setMealCalorieLimit: (meal: Meal, limit: number) => void
}
