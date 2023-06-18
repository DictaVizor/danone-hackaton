import { DiaryCard } from '@components/diary/molecules/DiaryCard'
import { DiaryProductRecommendationProps } from './DiaryProductRecommendation.types'
import { Button } from '@components/common/atoms/Button'
import ArrowRightIcon from '@public/icons/arrow-right-icon.svg'
import Link from 'next/link'
import { ProductCard } from '@components/products/molecules/ProductCard'

export const DiaryProductRecommendation = ({
  products,
}: DiaryProductRecommendationProps) => {
  return (
    <DiaryCard
      title="Your products of interest in terms of ecological footprint"
      className="h-full"
    >
      <div className="flex flex-col h-full">
        <div className="flex-grow flex gap-4 justify-between flex-wrap">
          {products.map((product) => (
            <div key={product.id} className="w-5/12">
              <ProductCard {...product} size="small" />
            </div>
          ))}
        </div>
        <div className="flex justify-end w-full">
          <Link href="/products">
            <Button
              className="text-violet-blue hover:translate-x-2 transition-all"
              variant="TEXT"
            >
              Products you may be interested in <ArrowRightIcon />
            </Button>
          </Link>
        </div>
      </div>
    </DiaryCard>
  )
}
