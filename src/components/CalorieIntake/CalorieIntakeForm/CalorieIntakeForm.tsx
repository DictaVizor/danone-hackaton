import { Button } from '@components/common/atoms/Button'
import { CalorieIntakeContainer } from '../CalorieIntakeContainer'
import { CalorieIntakeMealSubForm } from '../CalorieIntakeMealForm'
import { Meal } from '../CalorieIntakeMealForm/CalorieIntakeMealSubForm.types'
import { CalorieIntakeSummary } from '../CalorieIntakeSummary'

export const CalorieIntakeForm = () => {
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
          <Button>Send my information</Button>
        </div>
      </div>
    </CalorieIntakeContainer>
  )
}
