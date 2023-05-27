import { Video } from '@components/shared/video'
import { Link } from '@components/ui'

export const ShopifyHero = ({
  data: {
    title,
    subtitle,
    link,
    video: { src, fallback },
  },
}: any) => (
  <div id="shopify-section-160699910784a770b7" className="shopify-section">
    <section className="hero">
      <div className="hero__video">
        <Video
          data-expand="-10"
          preload="auto"
          data-fallback={fallback}
          className="hero__video__source hero__video__source--desktop lazyloaded"
          src={src}
        />
        <Video
          preload="none"
          data-fallback={fallback}
          className="hero__video__source hero__video__source--mobile lazyloaded"
          src={src}
        />
      </div>
      <div className="hero__inner hero__inner--center container">
        <h1 className="hero__title title title--xlarge">{title}</h1>
        <div className="hero__text rte">{subtitle}</div>

        <Link href={link.href} variant="primary">
          {link.title}
        </Link>
      </div>
    </section>
  </div>
)
