import Link from 'next/link'
import { NavbarItemProps } from './NavbarItem.types'
import { Button } from '../Button'

export const NavbarItem = ({ url, label }: NavbarItemProps) => {
  return (
    <Link href={url}>
      <Button
        variant="TEXT"
        className="text-dark-blue hover:scale-105 hover:text-dark-blue2 transition-all"
      >
        {label}
      </Button>
    </Link>
  )
}
