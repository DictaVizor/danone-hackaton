import { NutriScore } from '@models/Product'

export const nutriScoreSpanStyles: Record<NutriScore, string> = {
  [NutriScore.A]: 'bg-green-700',
  [NutriScore.B]: 'bg-green-500',
  [NutriScore.C]: 'bg-yellow-500',
  [NutriScore.D]: 'bg-orange-500',
  [NutriScore.E]: 'bg-red-500',
}
