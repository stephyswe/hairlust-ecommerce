export const getModifiedProps = (props: any) => {
  const imageClassName =
    props.index === 0
      ? 'product-card__image--primary'
      : 'product-card__image--secondary'

  const additionalClasses = `product-card__image ${imageClassName} lazyautosizes lazyloaded`

  const modifiedProps = {
    ...props,
    className: `${additionalClasses} ${props.className || ''}`, // append existing classes, if any
  }

  return modifiedProps
}
