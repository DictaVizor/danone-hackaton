export enum NutriScore {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
}

export type Product = {
  name: string
  description: string
  nutriScore: NutriScore
  ingredients: string
  details: string
  weight: number
  calories: number
  fat: number
  carbs: number
  ean: number
  ecologicalFootprint: number
  co2: number
  carbonFootprint: number
  image: {
    url: string
  }
  id: string
}
