/* eslint-disable @next/next/no-img-element */
import { ReviewMobileData } from './data'
import { ReviewMobileItem } from './item'

export const ReviewMobile = () => (
  <div className="references__mobile-slider js-mobileSliderWrapper is-initialized">
    <ul className="references__mobile-slider__list js-mobileSliderEl keen-slider">
      {ReviewMobileData.map((item, index) => (
        <ReviewMobileItem key={index} {...item} itemIndex={index} />
      ))}
    </ul>
  </div>
)
