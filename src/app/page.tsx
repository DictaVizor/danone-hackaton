import { Button } from '@components/common/atoms/Button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className="flex h-full flex-col gap-20">
        <div className="relative w-full h-[25rem]">
          <Image
            alt="landing"
            src="/images/landing.jpg"
            fill
            className="object-cover object-top"
          />
        </div>
        <div className="flex flex-col gap-5 items-center text-center">
          <p className="text-5xl font-bold  text-violet-blue">
            Keep track of your daily calorie limit!
          </p>
          <p className="text-violet-blue text-lg">
            Tell us your maximum daily calorie intake and we will recommend the
            products that best suit your goals!
          </p>
          <div>
            <Link href="/calorie-intake">
              <Button variant="SECONDARY" className="px-5 py-3">
                Start Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
