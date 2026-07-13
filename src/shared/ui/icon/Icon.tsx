type IconProps = {
  spriteId: string
  className?: string
}

export function Icon({ spriteId, className }: IconProps) {
  return (
    <svg className={className} role="presentation" aria-hidden="true">
      <use href={`/icons.svg#${spriteId}`} />
    </svg>
  )
}
