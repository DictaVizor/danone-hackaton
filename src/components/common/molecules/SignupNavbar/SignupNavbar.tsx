import { Button } from '@components/common/atoms/Button'
import { SignupNavbarProps } from './SignupNavbar.types'
import UserIcon from '@public/icons/user.svg'

export const SignupNavbar = (props: SignupNavbarProps) => {
  return (
    <div className="flex bg-violet-blue py-3 px-32">
      <div className="flex-grow" />
      <Button variant="TEXT" leftIcon={<UserIcon />} size="SMALL">
        Login/Sign Up
      </Button>
    </div>
  )
}
