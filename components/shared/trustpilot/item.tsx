import { SvgIconArrowLeftLarge, SvgIconArrowRightLarge } from '../../icons'
import { handleRating } from '@lib/get-rating'

export const TrustPilotPrevButton = () => (
  <button
    type="button"
    className="trustpilot-slider__nav trustpilot-slider__nav--prev arrow-button js-prev"
  >
    <SvgIconArrowLeftLarge />
  </button>
)

export const TrustPilotNextButton = () => (
  <button
    type="button"
    className="trustpilot-slider__nav trustpilot-slider__nav--next arrow-button js-next"
  >
    <SvgIconArrowRightLarge />
  </button>
)

export const TrustPilotHeader = ({ title, subtitle, link, children }: any) => (
  <header className="trustpilot-slider__header">
    <h2 className="trustpilot-slider__header__title title title--small">
      {title}
    </h2>
    <div className="trustpilot-slider__header__user">
      <a href={link} className="trustpilot-slider__header__link">
        {subtitle}
      </a>
      {children}
    </div>
  </header>
)

export const TrustPilotLogo = () => (
  <img
    src="//cdn.shopify.com/s/files/1/2199/8485/t/42/assets/trustpilot_logo.svg?v=72614220296505008211671454105"
    data-src="//cdn.shopify.com/s/files/1/2199/8485/t/42/assets/trustpilot_logo.svg?v=72614220296505008211671454105"
    className="trustpilot__branding__logo ls-is-cached lazyloaded"
    alt="Hairlust reviews"
  />
)

export const TrustPilotCollection = ({ rating }: { rating: number }) => (
  <div className="collection__hero__trustpilot">
    <div className="trustpilot trustpilot--row">
      <div className="trustpilot__stars">{handleRating(rating)}</div>
      <div className="trustpilot__summary">
        <span className="trustpilot__summary__out-of">4.4 av 5</span>
        <a href="/pages/reviews" className="trustpilot__summary__reviews">
          8.000+ recensioner
        </a>
      </div>
    </div>
  </div>
)
