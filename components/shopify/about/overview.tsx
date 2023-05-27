import { ProductStaticImage } from '../../ui/Image/Image'
import { BackLink } from '../product/components/common/misc'
import cn from 'clsx'

export const OverviewHeader = ({ data, title }: any) => (
  <header
    className="hero-special hero-special--multi section section--large container container--full"
    data-color="#ffffff"
  >
    <div className="hero-special__inner">
      {data.map((item: any, index: number) => (
        <figure
          key={index}
          className="hero-special__image hero-special--multi__image hero-special--multi__image--square js-image"
          {...item.figureProps}
        >
          <div className="image-wrapper">
            <ProductStaticImage key={index} srcSet={item.srcSet} />
          </div>
        </figure>
      ))}
      <BackLink className="product__images__back-button" title="Gå tillbaka" />
      <div className="hero-special__content">
        <h1 className="hero-special__title title title--mega">{title}</h1>
      </div>
    </div>
  </header>
)

export const OverviewBehindImage = ({ srcSet }: any) => (
  <figure className="info__behind__image-item">
    <div className="image-wrapper">
      <ProductStaticImage srcSet={srcSet} />
    </div>
  </figure>
)

export const OverviewSectionInfoBehind = ({ title, subtitle, images }: any) => (
  <section
    className="info__behind section section--large"
    data-color="#b7cdc2"
    style={{
      backgroundColor: '#b7cdc2',
    }}
  >
    <div className="container container--small">
      <h2 className="ff--canela title title--large">{title}</h2>
      <div className="rte">
        <p>{subtitle}</p>
      </div>

      <div className="info__behind__images">
        {images.map((image: any, index: number) => (
          <OverviewBehindImage srcSet={image} key={index} />
        ))}
      </div>
      <a href="/pages/about" className="cta cta--filled-light ">
        {title}
      </a>
    </div>
  </section>
)

export const OverviewSectionIngredients = ({
  title,
  subtitle,
  srcSet,
  placeholder,
  odd,
}: any) => (
  <section
    className="info__ingredients section section--large"
    data-color="#b7cdc2"
    style={{
      backgroundColor: '#b7cdc2',
    }}
  >
    <div className="container container--small">
      <div className={cn('content-image', odd ? 'content-image--reverse' : '')}>
        <div className="content-image__content">
          <h2 className="ff--canela title title--large">{title}</h2>
          <div className="rte">
            <p>{subtitle}</p>
          </div>
          <a href="/blogs/ingredients" className="cta cta--filled-light ">
            {placeholder}
          </a>
        </div>
        <figure className="content-image__image">
          <ProductStaticImage srcSet={srcSet} />
        </figure>
      </div>

      <div className="info__ingredients__mobile-cta">
        <a href="/blogs/ingredients" className="cta cta--filled-light ">
          {placeholder}
        </a>
      </div>
    </div>
  </section>
)

export const ShopifyAboutOverview = ({ info, content, headerImages }: any) => (
  <div className="info">
    <OverviewHeader title="Om oss" data={headerImages} />
    <OverviewSectionInfoBehind {...info} />
    {content.map((item: any, index: number) => (
      <OverviewSectionIngredients {...item} key={index} odd={index % 2} />
    ))}
  </div>
)
