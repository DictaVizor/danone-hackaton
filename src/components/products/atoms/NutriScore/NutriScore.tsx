import { twMerge } from 'tailwind-merge'
import { NutriScoreProps } from './NutriScore.types'
import { NutriScore as NutriScoreEnum } from '@models/Product'
import { nutriScoreSpanStyles } from './NutriScore.styles'

export const NutriScore = ({ nutriScore }: NutriScoreProps) => {
  console.log(nutriScore)

  return (
    <div className="flex flex-col border border-black rounded-xl p-2 gap-1">
      <span className="text-xs font-semibold">NUTRI-SCORE</span>
      <div className="flex justify-center border rounded-lg">
        {Object.values(NutriScoreEnum).map((score, index) => (
          <span
            key={score}
            className={twMerge(
              // rounds corners of first and last element
              index === 0 && 'rounded-l-lg',
              index === Object.values(NutriScoreEnum).length - 1 &&
                'rounded-r-lg',
              'flex-grow p-1 font-semibold text-gray-200',
              // Background colors for each score
              nutriScoreSpanStyles[score],
              // Scales score if is current product score
              score === nutriScore &&
                'text-white scale-125 border rounded-lg border-black',
            )}
          >
            {score}
          </span>
        ))}
      </div>
    </div>
  )
}
