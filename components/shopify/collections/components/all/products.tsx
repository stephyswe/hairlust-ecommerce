import { ButtonProductViewMore } from './common/button'

export const CollectionProductViewed = ({ title, buttonText, productLength }: any) => (
  <div className="collection__progress js-progressSection is-visible">
    <p className="collection__progress__viewed js-productsViewed">
      {title} {productLength} av 85 produkter
    </p>
    <CollectionProgressBar />
    <ButtonProductViewMore buttonText={buttonText} />
  </div>
)

export const CollectionProgressBar = () => (
  <div className="collection__progress__bar">
    <div
      className="collection__progress__bar__fill js-progressFill"
      style={{ width: '84.7059%' }}
    ></div>
  </div>
)

export const CollectionNoResults = () => (
  <div className="collection__no-results js-noResults">
    <p className="collection__no-results__text title title--small">
      Ditt filter gav inga resultat
    </p>
    <button type="button" className="cta cta--filled-dark js-clearBtn">
      Rensa filter
    </button>
  </div>
)
