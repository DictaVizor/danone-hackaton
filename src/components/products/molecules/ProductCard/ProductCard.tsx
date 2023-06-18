import Image from 'next/image'
import { ProductCardProps } from './ProductCard.types'
import Link from 'next/link'
import { CalorieBar } from '@components/products/atoms/CalorieBar'

export const ProductCard = ({
  name,
  image,
  calories,
  id,
}: ProductCardProps) => {
  return (
    <Link href={`/products/${id}`}>
      <div className="flex flex-col gap-4 items-center">
        <div className="relative h-64 w-64">
          <Image className="object-cover" src={image} alt={name} fill />
        </div>
        <div className="text-center flex flex-col">
          <p className="text-dark-blue">{name}</p>
          <CalorieBar max={100} value={(Number(calories) / 100) * 100} />
        </div>
      </div>
    </Link>
  )
}
