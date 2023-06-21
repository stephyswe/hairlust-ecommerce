/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from 'react'

import { SvgIconArrowLeftLarge, SvgIconArrowRightLarge } from '../../../icons'
import { ShopifyBlogHeader } from './header'
import { BlogList } from './list'
import { BlogMobileSlider } from './mobile'

export const ShopifyBlogSlider = ({ data: { headerData, listData } }: any) => {
  const eleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const options = {
      root: null, // relative to document viewport
      rootMargin: '0px', // margin around root. Values are similar to css property. Unitless values not allowed
      threshold: 0.8, // visible amount of item shown in relation to root
    }

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Element is in view
          document.documentElement.style.setProperty(
            '--background-color',
            '#7bafd4'
          )
        } else {
          // Element is not in view
          document.documentElement.style.setProperty(
            '--background-color',
            '#fff' // replace with your default color
          )
        }
      })
    }, options)

    if (eleRef.current) {
      observer.observe(eleRef.current)
    }

    return () => {
      if (eleRef.current) {
        observer.unobserve(eleRef.current)
        console.log('default')
      }
    }
  }, [])

  return (
    <div
      ref={eleRef}
      id="shopify-section-160802675707192b63"
      className="shopify-section"
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
}
