import reactLogo from '@/shared/assets/react.svg'
import viteLogo from '@/shared/assets/vite.svg'

export type ExternalLinkIconType = 'image' | 'sprite'

export type ExternalLink = {
  id: string
  href: string
  label: string
  iconType: ExternalLinkIconType
  iconSrc?: string
  spriteId?: string
}

export const documentationLinks: ExternalLink[] = [
  {
    id: 'vite-docs',
    href: 'https://vite.dev/',
    label: 'Explore Vite',
    iconType: 'image',
    iconSrc: viteLogo,
  },
  {
    id: 'react-docs',
    href: 'https://react.dev/',
    label: 'Learn more',
    iconType: 'image',
    iconSrc: reactLogo,
  },
]

export const socialLinks: ExternalLink[] = [
  {
    id: 'github',
    href: 'https://github.com/vitejs/vite',
    label: 'GitHub',
    iconType: 'sprite',
    spriteId: 'github-icon',
  },
  {
    id: 'discord',
    href: 'https://chat.vite.dev/',
    label: 'Discord',
    iconType: 'sprite',
    spriteId: 'discord-icon',
  },
  {
    id: 'x',
    href: 'https://x.com/vite_js',
    label: 'X.com',
    iconType: 'sprite',
    spriteId: 'x-icon',
  },
  {
    id: 'bluesky',
    href: 'https://bsky.app/profile/vite.dev',
    label: 'Bluesky',
    iconType: 'sprite',
    spriteId: 'bluesky-icon',
  },
]
