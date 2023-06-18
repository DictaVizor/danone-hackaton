import { WeightInfoProps } from './WeightInfo.types'

export const WeightInfo = ({ weight }: WeightInfoProps) => {
  return (
    <div className="flex flex-col items-center border-t border-violet-blue w-20">
      <div className="w-3/5 h-12 bg-light-blue border-b border-l border-r border-violet-blue"></div>
      <span className="text-violet-blue">{weight} mg</span>
    </div>
  )
}
