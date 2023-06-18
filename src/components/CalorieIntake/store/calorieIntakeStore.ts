import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { CalorieIntakeStoreState } from './calorieIntakeStore.types'

export const useCalorieIntakeStore = create<
  CalorieIntakeStoreState,
  [
    ['zustand/devtools', never],
    ['zustand/persist', never],
    ['zustand/immer', never],
  ]
>(
  devtools(
    persist(
      immer<CalorieIntakeStoreState>((set, get) => ({
        burnedCalories: 0,
        mealCalories: {
          dinner: {
            consumed: 0,
            limit: 500,
          },
          breakfast: {
            consumed: 0,
            limit: 500,
          },
          snacks: {
            consumed: 0,
            limit: 500,
          },
          lunch: {
            consumed: 0,
            limit: 500,
          },
        },
        setMealCalorieConsumption: (meal, consumption) =>
          set((state) => {
            const { limit } = state.mealCalories[meal]

            if (consumption < 0) return

            if (consumption > limit) {
              state.mealCalories[meal].consumed = limit
              return
            }

            state.mealCalories[meal].consumed = consumption
          }),
        setMealCalorieLimit: (meal, limit) =>
          set((state: CalorieIntakeStoreState) => {
            const { consumed } = state.mealCalories[meal]

            if (limit < 0) return

            if (consumed > limit) {
              state.mealCalories[meal].consumed = limit
            }

            state.mealCalories[meal].limit = limit
          }),
      })),
      { name: 'calorie-intake-storage' },
    ),
  ),
)
