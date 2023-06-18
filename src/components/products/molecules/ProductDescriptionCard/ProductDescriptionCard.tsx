import Image from 'next/image'
import { ProductDescriptionCardProps } from './ProductDescriptionCard.types'
import { NutriScore } from '@components/products/atoms/NutriScore'

export const ProductDescriptionCard = ({
  product,
}: ProductDescriptionCardProps) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="relative h-64 w-64">
        <Image
          className="object-cover"
          src={product.image.url}
          alt={product.name}
          fill
        />
      </div>
      <div className="flex flex-col text-center">
        <span className="text-violet-blue text-xs">Danone</span>
        <h1 className="text-xl text-violet-blue font-bold">{product.name}</h1>
      </div>
      <p className="text-violet-blue text-center mb-8">{product.description}</p>
      <NutriScore nutriScore={product.nutriScore} />
    </div>
  )
}
