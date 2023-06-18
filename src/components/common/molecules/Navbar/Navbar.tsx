import Link from 'next/link'
import { urls } from './Navbar.constants'
import { NavbarProps } from './Navbar.types'
import Image from 'next/image'
import MenuDotsIcon from '@public/icons/menu-dots.svg'
import SearchIcon from '@public/icons/search-icon.svg'
import { Button } from '@components/common/atoms/Button'
import { NavbarItem } from '@components/common/atoms/NavbarItem'

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
      <div className="flex gap-8 font-bold ">
        {urls.map((url) => {
          return <NavbarItem key={url.name} url={url.url} label={url.name} />
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
