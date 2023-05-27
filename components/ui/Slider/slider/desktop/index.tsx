/* eslint-disable @next/next/no-html-link-for-pages */
import { useCallback, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'

import { SliderNextButton, SliderPrevButton } from './button'
import { ShopifyProductCard } from '../../../../shared/card/productcard'

// import 'keen-slider/keen-slider.min.css'

export const SliderArticle = ({ title, subtitle }: any) => (
  <article className="product-slider__info justify--start background-color">
    <h2 className="product-slider__info__title title">{title}</h2>
    <p className="product-slider__info__text">{subtitle}</p>
    <a href="/collections/all" className="cta cta--arrow-dark ">
      Shoppa alla produkter
    </a>
    <a href="/collections/all" className="product-slider__info__link"></a>
  </article>
)

const translatePixel = (index: number) => index * 15 + 'px'

export const SliderDesktop = ({ setSlide, slide, data }: any) => {
  const [loaded, setLoaded] = useState(false)
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
        slides: { perView: 3, spacing: 15 },
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
    <div
      className="product-slider__slider-wrapper product-slider__slider-wrapper--desktop js-sliderWrapperDesktop is-initialized"
      data-small=""
    >
      <SliderPrevButton
        onClick={onPrev}
        sliderRef={instanceRef}
        currentSlide={slide}
      />
      <ul
        ref={sliderRef}
        className="product-slider__slider-element product-slider__slider-element--desktop keen-slider js-sliderElDesktop"
      >
        {data.map((item: any, index: any) => (
          <li
            key={index}
            className="product-slider__slide product-slider__slide--desktop keen-slider__slide"
            style={{
              minWidth: 'calc(33.3333% - 10px)',
              maxWidth: 'calc(33.3333% - 10px)',
              transform: `translate3d(${translatePixel(index)}, 0px, 0px)`,
            }}
          >
            <ShopifyProductCard {...item} />
          </li>
        ))}
      </ul>
      <SliderNextButton
        sliderRef={instanceRef}
        currentSlide={slide}
        onClick={onNext}
      />
    </div>
  )
}
