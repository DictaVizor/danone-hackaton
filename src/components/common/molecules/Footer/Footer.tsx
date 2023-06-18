import Link from 'next/link'
import { socialMediaUrls, urls } from './Footer.constants'
import { FooterProps } from './Footer.types'

export const Footer = (props: FooterProps) => {
  return (
    <footer className="flex bg-light-blue3 py-4 text-violet-blue items-center ">
      <div className="flex-grow" />
      <div className="flex gap-20">
        {urls.map((url) => {
          return (
            <Link key={url.name} href={url.url}>
              {url.name.toUpperCase()}
            </Link>
          )
        })}
      </div>
      <div className="flex-grow" />
      <div className="flex gap-4">
        {socialMediaUrls.map(({ url, icon, name }) => {
          return (
            <Link key={name} href={url}>
              {icon}
            </Link>
          )
        })}
      </div>
      <div className="flex-grow" />
    </footer>
  )
}
