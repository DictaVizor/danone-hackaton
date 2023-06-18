import Link from 'next/link'
import { urls } from './Navbar.constants'
import { NavbarProps } from './Navbar.types'
import Image from 'next/image'
import MenuDotsIcon from '@public/icons/menu-dots.svg'
import SearchIcon from '@public/icons/Type=fi-rr-search.svg'
import { Button } from '@components/common/atoms/Button'

export const Navbar = (props: NavbarProps) => {
  return (
    <div className="flex px-32 py-4 bg-primary-50 flex-nowrap items-center">
      <Image
        src="/logos/danone-logo-4.svg"
        alt="logo"
        height={496}
        width={156}
      />
      <div className="flex-grow" />
      <div className="flex gap-8 font-bold text-dark-blue">
        {urls.map((url) => {
          return (
            <Link key={url.name} href={url.url}>
              {url.name}
            </Link>
          )
        })}
      </div>
      <div className="flex-grow" />
      <div className="flex">
        <Button variant="TEXT" size="SMALL">
          <MenuDotsIcon />
        </Button>
        <Button variant="TEXT" size="SMALL">
          <SearchIcon />
        </Button>
      </div>
    </div>
  )
}
