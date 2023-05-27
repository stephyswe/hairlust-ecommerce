/* eslint-disable @next/next/no-img-element */
import { productPopularData } from '../../../../pages/api/static/shopify/products/popular'
import { ProductStaticImage } from '../../../ui/Image/Image'
import { ShopifySliderSingle } from '../../../ui/Slider/Slider'
import { BackLink } from './common/misc'

export const ProductContentItem = ({ srcSet }: any) => (
  <li
    className="product__images__slide swiper-slide js-slide swiper-slide-active"
    data-index="0"
    role="group"
    aria-label="1 / 12"
  >
    <figure className="product__images__slide__image">
      <ProductStaticImage srcSet={srcSet} />
    </figure>
  </li>
)

export const ProductSectionContent = ({ backButtonText, images }: any) => {
  return (
    <section
      className="product__images container product__content"
      data-vendor="swiper"
    >
      <div className="product__images__slider-wrapper swiper-container js-sliderWrapper swiper-initialized swiper-horizontal swiper-pointer-events is-initialized">
        <BackLink
          className="product__images__back-button"
          title={backButtonText}
        />

        <ShopifySliderSingle
          id="shopify-section-16075159443a58a930"
          data={productPopularData}
        />

        <span
          className="swiper-notification"
          aria-live="assertive"
          aria-atomic="true"
        ></span>
      </div>
      <div className="product__images__thumbnails container">
        <ul className="product__images__thumbnails__list">
          <li
            className="product__images__thumbnails__item js-thumbItem"
            data-index="0"
            data-type="image"
          >
            <div className="product__images__thumbnails__item__inner">
              <img
                className="lazyload"
                src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                data-src="//cdn.shopify.com/s/files/1/2199/8485/products/1_8ee8265f-aa30-4269-94cc-86fcadfe68c9_{width}x.jpg?v=1673861527"
                data-sizes="auto"
                data-max-width="180"
                alt="HairLust - Hair Formula Gummies for Women"
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
