import { Circle } from '@components/common/atoms/Circle'
import { ProductDetailsProps } from './ProductDetails.types'
import { CalorieBar } from '@components/products/atoms/CalorieBar'
import { WeightInfo } from '@components/products/atoms/WeightInfo'
import AddIcon from '@public/icons/add-icon.svg'

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col w-full gap-8 items-center">
        <div className="flex items-center gap-8">
          <WeightInfo weight={product.weight} />
          <Circle className="border-primary-300">
            <span>Carbs</span>
            <span>{product.carbs}g</span>
          </Circle>
        </div>

        <div className="flex items-center gap-8">
          <CalorieBar
            value={product.calories}
            max={100}
            progressClassName="h-3 w-40"
            spanClassName="text-sm"
          />
          <Circle className=" border-primary-300">
            <span>Fat</span>
            <span>{product.fat}g</span>
          </Circle>
        </div>
      </div>
      <div className="border-2 border-gray text-violet-blue p-4 flex flex-col gap-4">
        <div>
          <h5 className="font-semibold">Ingredients:</h5>
          <p>{product.ingredients}</p>
        </div>

        <div>
          <h5 className="font-semibold">Product details:</h5>
          <p>{product.details}</p>
        </div>

        <div>
          <span className="font-semibold">EAN: </span>{' '}
          <span>{product.ean}</span>
        </div>
      </div>

      <div className="bg-gray-100 flex w-full p-2 hover:cursor-pointer hover:opacity-75">
        <div className="bg-white w-full p-3 text-violet-blue flex justify-center gap-8 rounded-md">
          Nutritional Information
          <AddIcon />
        </div>
      </div>
    </div>
  )
}
