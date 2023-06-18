import { Product } from '@models/Product'

export type DiaryProductRecommendationProps = {
  products: Pick<Product, 'calories' | 'id' | 'name' | 'image'>[]
}
