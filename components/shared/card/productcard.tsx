/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import cn from 'clsx'
import { ProductImage } from '../../ui/Image/Image'

export const ShopifyProductCard = ({
  badges,
  badgesLow,
  title,
  subtitle,
  href,
  price,
  images,
}: any) => {
  return (
    <div className="product-card">
      <a href={href}>
        <figure className="product-card__image-wrapper">
          {images.map((image: any, index: number) => (
            <ProductImage key={index} srcSet={image} index={index} />
          ))}
          <div className="product-card__badges">
            <div className="product-card__badges__list">
              {badges.map((badge: any, index: any) => (
                <ProductItemBadge key={index} {...badge} />
              ))}
            </div>
            <div className="product-card__badges__list product-card__badges__list--bottom">
              {badgesLow &&
                badgesLow.map((badge: any, index: any) => (
                  <ProductItemBadgeLow key={index} {...badge} />
                ))}
            </div>
          </div>
        </figure>
        <div className="product-card__content">
          <p className="product-card__title">{title}</p>
          <div className="product-card__details">
            <p>{subtitle}</p>
          </div>
          <div className="product-card__prices">
            <div className="product-prices js-productPrices">
              {price.map((item: any, index: any) => (
                <ProductPrice
                  key={index}
                  arrLength={price.length}
                  item={item}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="product-card__linked"></div>
      </a>
    </div>
  )
}

const ProductItemBadge = ({ type, text }: any) => (
  <div
    className={cn(
      'product-badge product-badge--bar ',
      `product-badge--${type}`
    )}
  >
    {text}
  </div>
)

const ProductItemBadgeLow = ({ src }: any) => (
  <div
    className={cn(
      'product-card__badges__list product-card__badges__list--bottom'
    )}
  >
    <img src={src} className="product-badge product-badge--circle" />
  </div>
)

const ProductPrice = ({ arrLength, item, index }: any) => (
  <p
    className={cn(
      index === 0 && arrLength !== 1 ? 'price--compare' : 'price--current'
    )}
  >
    {item} kr
  </p>
)
