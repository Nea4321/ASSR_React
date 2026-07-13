import type { ExternalLink } from '../model/types'
import { Icon } from '@/shared'
import styles from './ExternalLinkList.module.css'

type ExternalLinkListProps = {
  links: ExternalLink[]
  variant?: 'docs' | 'social'
}

export function ExternalLinkList({
  links,
  variant = 'docs',
}: ExternalLinkListProps) {
  return (
    <ul className={styles.list}>
      {links.map((link) => (
        <li key={link.id}>
          <a href={link.href} target="_blank" rel="noreferrer">
            {link.iconType === 'image' && link.iconSrc ? (
              <img
                className={
                  variant === 'docs' ? styles.logo : styles.buttonIcon
                }
                src={link.iconSrc}
                alt=""
              />
            ) : (
              link.spriteId && (
                <Icon spriteId={link.spriteId} className={styles.buttonIcon} />
              )
            )}
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
