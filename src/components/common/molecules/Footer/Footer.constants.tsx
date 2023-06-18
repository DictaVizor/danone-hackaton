import { FooterSocialMediaUrl, FooterUrl } from './Footer.types'
import FacebookIcon from '@public/icons/facebook-icon.svg'
import TwitterIcon from '@public/icons/twitter-icon.svg'
import InstagramIcon from '@public/icons/instagram-icon.svg'

export const urls: FooterUrl[] = [
  {
    name: 'News',
    url: '/news',
  },
  {
    name: 'Products',
    url: '/products',
  },
  {
    name: 'Contact',
    url: '/contact',
  },
  {
    name: 'Help',
    url: '/help',
  },
]

export const socialMediaUrls: FooterSocialMediaUrl[] = [
  {
    name: 'instagram',
    url: 'https://www.facebook.com/DanoneMX/',
    icon: <InstagramIcon />,
  },
  {
    name: 'facebook',
    url: 'https://www.facebook.com/DanoneMX/',
    icon: <FacebookIcon />,
  },
  {
    name: 'twitter',
    url: 'https://www.facebook.com/DanoneMX/',
    icon: <TwitterIcon />,
  },
]
