export enum CalorieIntakeCounterVariant {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
}

export type CalorieIntakeCounterProps = {
  label: string
  value: number
  variant?: `${CalorieIntakeCounterVariant}` | CalorieIntakeCounterVariant
}
