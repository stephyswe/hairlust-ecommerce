import { useKeenSlider } from 'keen-slider/react'
import { useState, useCallback } from 'react'

import { useModalDef } from '../../../../../config/contexts/modalDefProduct'
import {
  SliderNextSingleProductButton,
  SliderPrevSingleProductButton,
} from './button'
import { SliderSingleImage } from './card'

export const SliderSingleDesktop = ({
  setSlide,
  slide,
  data,
}: any) => {
  const [loaded, setLoaded] = useState(false)
  const { handleModalIndexToggle } = useModalDef()
  const [sliderRef, instanceRef] = useKeenSlider<HTMLUListElement>({
    initial: 0,
    slideChanged(slider) {
      setSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    breakpoints: {
      '(min-width: 400px)': {
        slides: { perView: 3, spacing: 25 },
      },
      '(min-width: 1000px)': {
        slides: { perView: 2, spacing: 0 },
      },
    },
    slides: { perView: 1 },
    defaultAnimation: {
      duration: 800,
    },
    drag: false,
  })

  const onPrev = useCallback(() => instanceRef.current?.prev(), [instanceRef])
  const onNext = useCallback(() => instanceRef.current?.next(), [instanceRef])

  return (
    <>
      <SliderPrevSingleProductButton
        onClick={onPrev}
        sliderRef={instanceRef}
        currentSlide={slide}
      />
      <ul
        ref={sliderRef}
        className="product__images__slider-element swiper-wrapper"
        id="swiper-wrapper-f10d16ab1acf693fc"
      >
        {data.map((item: any, index: any) => (
          <li
            key={index}
            className="product__images__slide swiper-slide js-slide swiper-slide-active keen-slider__slide"
            onClick={() => {
              handleModalIndexToggle('lightbox', index)
            }}
          >
            <figure className="product__images__slide__image">
              {item.images.map((image: any, index: number) => (
                <SliderSingleImage key={index} srcSet={image} index={index} />
              ))}
            </figure>
          </li>
        ))}
      </ul>
      <div className="product__images__dots slider-dots js-dots swiper-pagination-bullets swiper-pagination-horizontal">
        <span
          className="slider-dots__dot slider-dots__dot--active"
          aria-current="true"
        ></span>
        <span className="slider-dots__dot"></span>
        <span className="slider-dots__dot"></span>
        <span className="slider-dots__dot"></span>
        <span className="slider-dots__dot"></span>
        <span className="slider-dots__dot"></span>
        <span className="slider-dots__dot"></span>
        <span className="slider-dots__dot"></span>
        <span className="slider-dots__dot"></span>
        <span className="slider-dots__dot"></span>
        <span className="slider-dots__dot"></span>
        <span className="slider-dots__dot"></span>
      </div>

      <SliderNextSingleProductButton
        sliderRef={instanceRef}
        currentSlide={slide}
        onClick={onNext}
      />
    </>
  )
}
