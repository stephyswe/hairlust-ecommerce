import { useState } from 'react'
import { SliderSingleDesktop } from './slider/single'
import { SliderDesktop, SliderArticle } from './slider/desktop'
import { SliderMobile } from './slider/mobile'
import { SliderProgress } from './slider/progress'

export const ShopifySlider = ({ data: { title, subtitle, items } }: any) => {
  // Desktop
  const [slide, setSlide] = useState(0)

  return (
    <div id="shopify-section-16075159443a58a930" className="shopify-section">
      <section
        className="product-slider section section--large"
        data-vendor="keenSlider"
      >
        <div className="product-slider__inner container">
          <SliderArticle title={title} subtitle={subtitle} />
          <SliderDesktop data={items} setSlide={setSlide} slide={slide} />
          <SliderMobile data={items} />
          <SliderProgress desktopLength={items.length} slide={slide} />
        </div>
      </section>
    </div>
  )
}

export const ShopifySliderSingle = ({ data: { items } }: any) => {
  // Desktop
  const [slide, setSlide] = useState(0)

  return <SliderSingleDesktop data={items} setSlide={setSlide} slide={slide} />
}
