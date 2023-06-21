/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from 'react'

import { ReviewContainer } from './container'
import { ReviewHeader } from './header'
import { ReviewMobile } from './mobile'
import { ReviewReferences } from './references'

export const ShopifyReview = ({ data: { title, references } }: any) => {
  // Desktop
  const reviewRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const options = {
      root: null, // relative to document viewport
      rootMargin: '0px', // margin around root. Values are similar to css property. Unitless values not allowed
      threshold: 0.7, // visible amount of item shown in relation to root
    }

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Element is in view
          document.documentElement.style.setProperty(
            '--background-color',
            '#b7cdc2'
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

    if (reviewRef.current) {
      observer.observe(reviewRef.current)
    }

    return () => {
      if (reviewRef.current) {
        observer.unobserve(reviewRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={reviewRef}
      id="shopify-section-1607695986877e4d5b"
      className="shopify-section"
    >
      <section
        className="references section section--large"
        data-color="#b7cdc2"
      >
        <div className="references__component" data-vendor="keenSlider">
          <ReviewHeader title={title} />
          <ReviewContainer />
          <ReviewMobile />
          <ReviewReferences {...references} />
        </div>
      </section>
    </div>
  )
}
