import { ProductFilterCardProps } from './ProductFilterCard.types'
import SettingsSlidersIcon from '@public/icons/settings-sliders-icon.svg'
import CaretDownIcon from '@public/icons/caret-down-icon.svg'
import { productFilters } from './ProductFilterCard.constants.types'

export const ProductFilterCard = (props: ProductFilterCardProps) => {
  return (
    <div className="flex items-start bg-white border rounded h-fit text-violet-blue p-6 flex-col gap-8">
      <div className="flex justify-between w-full items-center">
        <span className="font-semibold">Filters</span>
        <SettingsSlidersIcon width={18} height={18} viewBox="0 0 24 24" />
      </div>
      <div className="border rounded border-light-blue2 py-2 px-3 flex gap-4 flex-col">
        {productFilters.map((filter) => (
          <div
            key={filter}
            className="border-b border-light-blue2 flex justify-between"
          >
            <span>{filter}</span>
            <CaretDownIcon />
          </div>
        ))}
      </div>
    </div>
  )
}
