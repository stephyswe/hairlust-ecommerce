import { SVgReviewHalfStar, SvgReviewFullStar } from '../components/icons'

export const handleRating = (rating: number) => {
  const fullStars = Math.floor(rating)
  const halfStar = rating - fullStars > 0 ? 1 : 0

  return (
    <>
      {Array(fullStars)
        .fill(0)
        .map((_, i) => (
          <SvgReviewFullStar key={i} />
        ))}
      {Array(halfStar)
        .fill(0)
        .map((_, i) => (
          <SVgReviewHalfStar key={i} />
        ))}
    </>
  )
}
