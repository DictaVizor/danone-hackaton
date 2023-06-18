import { PercentageDonutProps } from './PercentageDonut.types'

export const PercentageDonut = ({ percentage }: PercentageDonutProps) => {
  return (
    <div className="relative">
      <div
        className="radial-progress text-light-blue4"
        style={{
          // @ts-ignore: TODO add types to index.d.ts
          '--value': 100,
          '--thickness': '0.6rem',
          '--size': '3rem',
        }}
      >
        <div
          className="radial-progress text-violet-blue absolute z-10"
          style={{
            // @ts-ignore: TODO add types to index.d.ts
            '--value': percentage,
            '--thickness': '0.6rem',
            '--size': '3rem',
          }}
        />
      </div>
    </div>
  )
}
