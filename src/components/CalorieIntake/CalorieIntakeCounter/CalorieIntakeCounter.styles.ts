import {
  CalorieIntakeCounterProps,
  CalorieIntakeCounterVariant,
} from './CalorieIntakeCounter.types'

export const calorieIntakeCounterVariantStyles: Record<
  Required<CalorieIntakeCounterProps>['variant'],
  {
    container?: string
    value?: string
  }
> = {
  [CalorieIntakeCounterVariant.SECONDARY]: {},
  [CalorieIntakeCounterVariant.PRIMARY]: {
    container: 'border-light-blue3 border border-4 rounded-full',
    value: 'text-xl font-bold text-violet-blue',
  },
}
