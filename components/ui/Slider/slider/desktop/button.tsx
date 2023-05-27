import cn from 'clsx'
import {
  SvgIconArrowLeftLarge,
  SvgIconArrowRightLarge,
} from '../../../../icons'

export const SliderPrevButton = (props: any) => (
  <button
    onClick={(e) => props.onClick(e)}
    type="button"
    className={cn(
      'product-slider__nav product-slider__nav--prev arrow-button js-prev',
      props.currentSlide === 0 ? 'is-disabled' : ''
    )}
  >
    <SvgIconArrowLeftLarge />
  </button>
)

export const SliderNextButton = (props: any) => (
  <button
    onClick={(e) => props.onClick(e)}
    type="button"
    className={cn(
      'product-slider__nav product-slider__nav--next arrow-button js-next',
      props.currentSlide ===
        props.sliderRef?.current?.track.details.slides.length - 3
        ? 'is-disabled'
        : ''
    )}
  >
    <SvgIconArrowRightLarge />
  </button>
)
