import Image from 'next/image'
import { ProductCardProps } from './ProductCard.types'
import Link from 'next/link'
import { CalorieBar } from '@components/products/atoms/CalorieBar'
import { twMerge } from 'tailwind-merge'

export const ProductCard = ({
  name,
  image,
  calories,
  id,
  size = 'normal',
}: ProductCardProps) => {
  return (
    <Link href={`/products/${id}`}>
      <div className="flex flex-col gap-4 items-center hover:opacity-80 hover:scale-105 transition-all">
        <div
          className={twMerge(
            'relative',
            size === 'normal' ? 'h-64 w-64' : 'h-32 w-32',
          )}
        >
          <Image className="object-cover" src={image.url} alt={name} fill />
        </div>
        <div className="text-center flex flex-col">
          <p className="text-dark-blue">{name}</p>
          <CalorieBar max={100} value={(Number(calories) / 100) * 100} />
        </div>
      </div>
    </Link>
  )
}
