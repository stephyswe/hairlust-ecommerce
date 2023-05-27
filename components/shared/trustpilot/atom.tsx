import { handleRating } from '@lib/get-rating'
import { useMedia } from 'react-use'

export const TrustPilotSliderItem = ({ name, comment, rating, index }: any) => {
  const isWide = useMedia('(min-width: 1440px)', false)
  const translatePixel = (index: number) => index * 30 + 'px'
  return (
    <div
      className="trustpilot-review-item trustpilot-review-item--parent keen-slider__slide"
      style={{
        minWidth: isWide ? 'calc(33.3333% - 20px)' : 'calc(50% - 15px)',
        maxWidth: isWide ? 'calc(33.3333% - 20px)' : 'calc(50% - 15px)',
        transform: `translate3d(${translatePixel(index)}, 0px, 0px)`,
      }}
    >
      <div className="trustpilot-review-item__header">
        <span className="trustpilot-review-item__title">{name}</span>
        <span className="trustpilot-review-item__date"></span>
      </div>

      <div className="trustpilot-review-item__content">{comment}</div>

      <div className="trustpilot-review-item__stars">
        <div className="trustpilot trustpilot--row">
          <div className="trustpilot__stars">{handleRating(rating)}</div>
        </div>
      </div>
    </div>
  )
}
