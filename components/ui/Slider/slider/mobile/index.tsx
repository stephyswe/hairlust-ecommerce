import { useKeenSlider } from 'keen-slider/react'

import { ShopifyProductCard } from '../../../../shared/card/productcard'

const KeyboardControls = (slider: any) => {
  let focused = false

  function eventFocus() {
    focused = true
  }

  function eventBlur() {
    focused = false
  }

  function eventKeydown(e: any) {
    if (!focused) return
    switch (e.key) {
      default:
        break
      case 'Left':
      case 'ArrowLeft':
        slider.prev()
        break
      case 'Right':
      case 'ArrowRight':
        slider.next()
        break
    }
  }

  slider.on('created', () => {
    slider.container.setAttribute('tabindex', 0)
    slider.container.addEventListener('focus', eventFocus)
    slider.container.addEventListener('blur', eventBlur)
    slider.container.addEventListener('keydown', eventKeydown)
  })
}

export const SliderMobile = ({ data }: any) => {
  const [sliderRef] = useKeenSlider({}, [KeyboardControls])

  return (
    <div
      ref={sliderRef}
      className="product-slider__slider-wrapper product-slider__slider-wrapper--mobile js-sliderWrapperMobile"
    >
      <ul className="product-slider__slider-element product-slider__slider-element--mobile js-sliderElMobile">
        {data.map((item: any, index: any) => (
          <li
            key={index}
            className="product-slider__slide product-slider__slide--mobile"
          >
            <ShopifyProductCard type="mobile" {...item} />
          </li>
        ))}
      </ul>
    </div>
  )
}
