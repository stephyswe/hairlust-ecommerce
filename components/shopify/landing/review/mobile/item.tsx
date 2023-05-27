import { ImageRender } from '../../../../ui/Image/Image'

export const ReviewMobileItem = ({
  contentProps,
  imageProps,
  itemIndex,
}: any) => {
  contentProps.className =
    'references__mobile-slider__item__image lazyautosizes ls-is-cached lazyloaded'
  contentProps.sizes = '669px'

  imageProps.className =
    'references__mobile-slider__item__logo lazyautosizes ls-is-cached lazyloaded'
  imageProps.sizes = '200px'

  const className = `references__mobile-slider__item js-slide keen-slider__slide ${
    itemIndex === 0 ? 'is-active' : ''
  }`

  return (
    <li
      className={className}
      style={{
        minWidth: 'calc(66.6667% - -0.333333px)',
        maxWidth: 'calc(66.6667% - -0.333333px)',
        transform: 'translate3d(-0.166667px, 0px, 0px)',
      }}
    >
      <figure className="references__mobile-slider__item__inner">
        <ImageRender maxWidth="1296" props={contentProps} />
        <ImageRender maxWidth="180" props={imageProps} />
      </figure>
    </li>
  )
}
