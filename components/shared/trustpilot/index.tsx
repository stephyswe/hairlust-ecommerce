import React from 'react'
import cn from 'clsx'
import {
  TrustPilotHeader,
  TrustPilotPrevButton,
  TrustPilotNextButton,
  TrustPilotLogo,
} from './item'

import { TrustPilotSliderItem } from './atom'
import { handleRating } from '@lib/get-rating'

export const ShopifyTrustPilot = ({
  nodiv,
  data: { title, subtitle, link, reviewContainer, reviews },
}: any) => (
  <ConditionalDiv nodiv={nodiv}>
    <section
      className={cn(
        'trustpilot-slider section section--large container',
        nodiv ? '' : 'pt--0'
      )}
      data-vendor="keenSlider"
      data-size="large"
      data-limit="20"
    >
      <div className="trustpilot-slider__inner js-sliderWrapper is-initialized">
        <TrustPilotHeader title={title} subtitle={subtitle} link={link}>
          <TrustPilotPrevButton />
          <TrustPilotNextButton />
        </TrustPilotHeader>
        <TrustPilotContentRoot rating={4.4} link={link} {...reviewContainer}>
          <div className="trustpilot-slider__slider-element js-sliderEl keen-slider">
            {reviews.map((review: any, index: any) => (
              <TrustPilotSliderItem key={index} index={index} {...review} />
            ))}
          </div>
        </TrustPilotContentRoot>
      </div>
    </section>
  </ConditionalDiv>
)

const ConditionalDiv = ({ children, nodiv }: any) => {
  return nodiv ? (
    <React.Fragment>{children}</React.Fragment>
  ) : (
    <div>{children}</div>
  )
}

const TrustPilotContentRoot = ({ link, title, rating, children }: any) => (
  <div className="trustpilot-slider__content">
    <div className="trustpilot trustpilot--column">
      <p className="trustpilot__score">{title}</p>
      <div className="trustpilot__stars">{handleRating(4.4)}</div>
      <TrustPilotSummary rating={rating} link={link} />
      <div className="trustpilot__branding">
        <span className="trustpilot__branding__text">på</span>
        <TrustPilotLogo />
      </div>
    </div>
    {children}
  </div>
)

export const TrustPilotSummary = ({ rating, link }: any) => (
  <div className="trustpilot__summary">
    <span className="trustpilot__summary__out-of">{rating} av 5</span>
    {link ? (
      <a href={link} className="trustpilot__summary__reviews">
        8.000+ recensioner
      </a>
    ) : (
      <span className="trustpilot__summary__reviews">8.000+ recensioner</span>
    )}
  </div>
)
