import NextLink, { LinkProps as NextLinkProps } from 'next/link'

const Link: React.FC<
  NextLinkProps & {
    className?: string
    variant?: string
    children?: React.ReactNode
  }
> = ({ href, className, variant, children, ...props }) => {
  let classNames = `${className} ${variant ? variant : ''}`.trim()

  switch (variant) {
    case 'primary':
      classNames += 'cta cta--filled-light'
      break
    default:
      break
  }

  return (
    <NextLink href={href} {...props} legacyBehavior>
      <a className={classNames}>{children}</a>
    </NextLink>
  )
}

export default Link
