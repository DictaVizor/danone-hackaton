import { SignupNavbar } from '@components/common/molecules/SignupNavbar'
import { LandingLayoutProps } from './LandingLayout.types'
import { Navbar } from '@components/common/molecules/Navbar'
import { Footer } from '@components/common/molecules/Footer'

export const LandingLayout = ({ children }: LandingLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <SignupNavbar />
      <Navbar />
      <div className="flex flex-grow flex-col">{children}</div>
      <Footer />
    </div>
  )
}
