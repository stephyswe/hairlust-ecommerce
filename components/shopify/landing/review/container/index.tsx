import { ReviewCurrentItem, ReviewNavWrapper } from './item'
import { ReviewNextItems } from './next'

export const ReviewContainer = () => (
  <div className="references__main-slider container">
    <ReviewCurrentItem />
    <ReviewNextItems />
    <ReviewNavWrapper />
  </div>
)
