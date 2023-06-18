'use client'
import { Button } from '@components/common/atoms/Button'
import { CalorieIntakeContainer } from '../CalorieIntakeContainer'
import { CalorieIntakeMealSubForm } from '../CalorieIntakeMealForm'
import { Meal } from '../CalorieIntakeMealForm/CalorieIntakeMealSubForm.types'
import { CalorieIntakeSummary } from '../CalorieIntakeSummary'
import { useCalorieIntakeStore } from '../store'
import { useEffect } from 'react'
import Link from 'next/link'
export const CalorieIntakeForm = () => {
  // Rehydrate zustand store
  useEffect(() => {
    useCalorieIntakeStore.persist.rehydrate()
  }, [])

  return (
    <CalorieIntakeContainer>
      <div className="flex flex-col gap-8">
        <div className="text-center">
          <p className="text-2xl font-bold  text-violet-blue">
            Set your maximum calorie limit here!
          </p>
          <p className="text-violet-blue text-lg">
            Answer the following questions in order to have your food
            information
          </p>
        </div>

        <CalorieIntakeSummary />

        <div className="flex flex-col gap-4">
          {Object.values(Meal).map((meal) => (
            <CalorieIntakeMealSubForm key={meal} meal={meal} />
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/diary">
            <Button>Send my information</Button>
          </Link>
        </div>
      </div>
    </CalorieIntakeContainer>
  )
}
