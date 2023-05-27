/* eslint-disable @next/next/no-img-element */
import { SvgIconArrowLeftLarge, SvgIconArrowRightLarge } from '../../../icons'
import { ShopifyBlogHeader } from './header'
import { BlogList } from './list'
import { BlogMobileSlider } from './mobile'

export const ShopifyBlogSlider = ({ data: { headerData, listData } }: any) => (
  <div
    id="shopify-section-160802675707192b63"
    className="shopify-section"
    style={{
      backgroundColor: '#7bafd4',
    }}
  >
    <section
      className="blog-slider section section--large pt--0 pb--0"
      data-color="#7bafd4"
    >
      <div
        className="blog-slider__component container"
        data-vendor="keenSlider"
      >
        <ShopifyBlogHeader data={headerData} />

        <div className="blog-slider__slider-wrapper js-sliderWrapper is-initialized">
          <button
            type="button"
            className="blog-slider__nav blog-slider__nav--prev arrow-button js-prev"
          >
            <SvgIconArrowLeftLarge />
          </button>
          <div className="blog-slider__slider-element-wrapper">
            <BlogList data={listData} />
          </div>
          <button
            type="button"
            className="blog-slider__nav blog-slider__nav--next arrow-button js-next is-disabled"
          >
            <SvgIconArrowRightLarge />
          </button>
        </div>

        <BlogMobileSlider />

        <div className="blog-slider__cta">
          <a href="/blogs/blog" className="cta cta--filled-light ">
            Se alla inlägg
          </a>
        </div>
      </div>
    </section>
  </div>
)
