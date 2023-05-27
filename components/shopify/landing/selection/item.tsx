import { ImageRender } from '../../../ui/Image/Image'

const SelectionFeatureContent = ({ title, subtitle, href }: any) => (
  <div className="feature-blocks__item__content feature-blocks__item__content--light horizontal--center vertical--center">
    <div className="feature-blocks__item__content__inner">
      <h2 className="feature-blocks__item__title title">{title}</h2>

      <a
        href={href}
        className="cta cta--stroked-light feature-blocks__item__cta"
      >
        {subtitle}
      </a>
    </div>
  </div>
)

export const SelectionFeatureBlock = ({
  data: { href, title, mobileProps, desktopProps },
}: any) => {
  mobileProps.className = 'feature-blocks__item__image lazyautosizes lazyloaded'
  desktopProps.className =
    'feature-blocks__item__image lazyautosizes lazyloaded'

  return (
    <div className="feature-blocks__item hover-parent">
      <div className="feature-blocks__item__inner">
        <div className="feature-blocks__item__background">
          <figure className="feature-blocks__item__image-wrapper feature-blocks__item__image-wrapper--desktop">
            <ImageRender maxWidth="1296" props={desktopProps} />
          </figure>

          <figure className="feature-blocks__item__image-wrapper feature-blocks__item__image-wrapper--mobile">
            <ImageRender maxWidth="1296" props={mobileProps} />
          </figure>
        </div>
        <div className="feature-blocks__item__overlay"></div>
        <SelectionFeatureContent
          title={title}
          subtitle="Shoppa produkter"
          href={href}
        />
        <a href={href} className="feature-blocks__item__link"></a>
      </div>
    </div>
  )
}
