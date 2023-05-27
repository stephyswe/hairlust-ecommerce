import cn from 'clsx'
import {
  SvgIconArrowLeftLarge,
  SvgIconArrowRightLarge,
} from '../../../../icons'

export const SliderNextSingleProductButton = (props: any) => (
  <button
    onClick={(e) => props.onClick(e)}
    type="button"
    className={cn(
      'product__images__slider-nav product__images__slider-nav--next arrow-button js-next',
      props.currentSlide ===
        props.sliderRef?.current?.track.details.slides.length - 3
        ? 'is-disabled'
        : ''
    )}
  >
    <SvgIconArrowRightLarge />
  </button>
)

export const SliderPrevSingleProductButton = (props: any) => (
  <button
    onClick={(e) => props.onClick(e)}
    type="button"
    className={cn(
      'product__images__slider-nav product__images__slider-nav--prev arrow-button js-prev',
      props.currentSlide === 0 ? 'is-disabled' : ''
    )}
  >
    <SvgIconArrowLeftLarge />
  </button>
)
