import { SvgIconPlayArrow } from '@components/icons'
import { Video } from '@components/shared/video'

export const ShopifySingleVideo = ({
  data: { title, subtitle, link, videoSrc },
}: any) => (
  <div id="shopify-section-160802033197d18ad5" className="shopify-section">
    <section className="single-video section section--large pt--0">
      <div className="single-video__inner container">
        <div className="single-video__video">
          <div className="single-video__thumbnail hover-parent">
            <Video
              className="single-video__thumbnail__video js-thumbVideo lazyloaded "
              preload="auto"
              autoPlay={true}
              src={videoSrc}
            />
            <div className="single-video__thumbnail__icon">
              <div className="play-button">
                <SvgIconPlayArrow />
              </div>
            </div>
          </div>
        </div>

        <article className="single-video__content">
          <div className="single-video__content__inner">
            <h2 className="single-video__title title">{title}</h2>
            <div className="single-video__text">
              <p>{subtitle}</p>
            </div>
            <a href={link.href} className="cta cta--stroked-dark ">
              {link.title}
            </a>
          </div>
        </article>

        <div className="single-video__mobile-cta">
          <a href={link.href} className="cta cta--stroked-dark">
            {link.title}
          </a>
        </div>
      </div>
    </section>
  </div>
)
