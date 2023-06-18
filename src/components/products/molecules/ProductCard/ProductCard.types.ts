import { Product } from '@models/Product'

export enum ProductCartSize {
  NORMAL = 'normal',
  SMALL = 'small',
}

export type ProductCardProps = {
  size?: `${ProductCartSize}` | ProductCartSize
} & Pick<Product, 'calories' | 'id' | 'name' | 'image'>
