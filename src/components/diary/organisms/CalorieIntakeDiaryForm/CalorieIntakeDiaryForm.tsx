'use client'
import { DiaryCard } from '@components/diary/molecules/DiaryCard'
import { CalorieIntakeMealSubForm } from '../../../CalorieIntake/CalorieIntakeMealForm'
import { Meal } from '../../../CalorieIntake/CalorieIntakeMealForm/CalorieIntakeMealSubForm.types'
import { CalorieIntakeSummary } from '../../../CalorieIntake/CalorieIntakeSummary'
import { CalorieIntakeDiaryFormProps } from './CalorieIntakeDiaryForm.types'

export const CalorieIntakeDiaryForm = (props: CalorieIntakeDiaryFormProps) => {
  return (
    <DiaryCard title="Your maximum kcal limit" className="items-center">
      <CalorieIntakeSummary />
      <div className="flex flex-col gap-4 w-full">
        {Object.values(Meal).map((meal) => (
          <CalorieIntakeMealSubForm key={meal} meal={meal} />
        ))}
      </div>
    </DiaryCard>
  )
}
