import { ProductStaticImage } from '../../../../ui/Image/Image'
import { TrustPilotCollection } from '../../../../shared/trustpilot/item'
import { BackLink } from '../../../product/components/common/misc'

export const CollectionHeader = ({
  rating,
  title,
  subtitle,
  backLink,
  image: { srcSet },
}: any) => (
  <header className="collection__hero">
    <div className="collection__hero__inner container">
      <figure className="collection__hero__image">
        <ProductStaticImage srcSet={srcSet} />
      </figure>

      <article className="collection__hero__content">
        <div className="collection__hero__content__inner">
          <h1 className="collection__hero__title title">{title}</h1>
          <div className="collection__hero__description">
            <p>{subtitle}</p>
          </div>
          <TrustPilotCollection rating={rating} />
        </div>
      </article>
    </div>
    <BackLink className="collection__hero__back-button" title={backLink} />
  </header>
)
