/* eslint-disable @next/next/no-img-element */
import {
  SvgIconArrowLeftLarge,
  SvgIconArrowRightLarge,
} from '../../../../icons'
import { ReviewCurrentItemContent, ReviewFeatures } from './features'

export const ReferenceItem = () => (
  <li
    className="references__logo-slider__item js-slide keen-slider__slide"
    style={{
      minWidth: 'calc(20% - 40px)',
      maxWidth: 'calc(20% - 40px)',
      transform: 'translate3d(-3672px, 0px, 0px)',
    }}
  >
    <img
      className="references__logo-slider__item__logo lazyautosizes lazyloaded"
      src="//cdn.shopify.com/s/files/1/2199/8485/files/Go_white_f.svg?v=8191929459907590739"
      data-src="//cdn.shopify.com/s/files/1/2199/8485/files/Go_white_f.svg?v=8191929459907590739"
      data-sizes="auto"
      data-max-width="180"
      alt=""
      sizes="93px"
    />
  </li>
)

export const ReviewNavWrapper = () => (
  <div className="references__main-slider__nav-wrapper">
    <button
      type="button"
      className="references__main-slider__nav references__main-slider__nav--prev arrow-button js-prev"
    >
      <SvgIconArrowLeftLarge />
    </button>
    <button
      type="button"
      className="references__main-slider__nav references__main-slider__nav--next arrow-button js-next"
    >
      <SvgIconArrowRightLarge />
    </button>
  </div>
)

export const ReviewCurrentItem = () => (
  <div className="references__current-item">
    <figure
      className="references__current-item__image js-imageView"
      data-index="0"
    >
      <ReviewFeatures />
    </figure>
    <article className="references__current-item__content">
      <div className="references__current-item__content__inner">
        <ReviewCurrentItemContent />
      </div>
    </article>
  </div>
)
