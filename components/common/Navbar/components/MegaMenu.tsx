import { SvgLinkArrowRight } from '../../../icons'

export const MegaMenuLink = ({
  title,
  link,
}: {
  title: string
  link: string
}) => (
  <li className="megamenu__linklist__item">
    <a href={link}>{title}</a>
  </li>
)

export function MegaMenuItem({
  title,
  subtitle,
  link,
  srcSet,
}: {
  title: string
  subtitle: string
  link: any
  srcSet: any
}) {
  return (
    <div className="megamenu__column-item">
      <a href={link}>
        <figure className="megamenu__column-item__image">
          <img
            className="lazyautosizes lazyloaded"
            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
            data-sizes="auto"
            data-max-width="720"
            alt=""
            //data-srcset="//cdn.shopify.com/s/files/1/2199/8485/files/MegamenuWoman_bgGrey_180x.jpg?v=1623402306 180w, //cdn.shopify.com/s/files/1/2199/8485/files/MegamenuWoman_bgGrey_320x.jpg?v=1623402306 320w, //cdn.shopify.com/s/files/1/2199/8485/files/MegamenuWoman_bgGrey_480x.jpg?v=1623402306 480w, //cdn.shopify.com/s/files/1/2199/8485/files/MegamenuWoman_bgGrey_540x.jpg?v=1623402306 540w, //cdn.shopify.com/s/files/1/2199/8485/files/MegamenuWoman_bgGrey_720x.jpg?v=1623402306 720w"
            sizes="300px"
            srcSet={srcSet}
          />
        </figure>
        <p className="megamenu__column-item__title">
          <span className="megamenu__column-item__title__text">{title}</span>
          <SvgLinkArrowRight />
        </p>
        <p className="megamenu__column-item__text">{subtitle}</p>
      </a>
    </div>
  )
}
