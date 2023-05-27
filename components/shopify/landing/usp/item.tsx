/* eslint-disable @next/next/no-img-element */
import cn from 'clsx'
import { useMedia } from 'react-use'

export const UspDesktop = ({ data }: any) => (
  <div className="usp__inner usp__inner--desktop container">
    <ul className="usp__list usp__list--desktop grid">
      {data.map((item: any) => (
        <UspItem key={item.title} {...item} />
      ))}
    </ul>
  </div>
)

export const UsbMobile = ({ data }: any) => {
  const isWide = useMedia('(min-width: 1024px)', false)
  return (
    <ul
      className={cn(
        'usp__list usp__list--mobile grid js-list',
        isWide ? '' : 'is-animated'
      )}
    >
      {data.map((item: any) => (
        <UspItem type="mobile" key={item.title} {...item} />
      ))}
    </ul>
  )
}

export const UspItem = ({ type, src, title }: any) => (
  <li
    className={cn(
      'usp__item',
      type === 'mobile'
        ? 'usp__item--mobile grid__item js-item'
        : 'usp__item--desktop grid__item'
    )}
  >
    <figure className="usp__item__icon">
      <img src={src} alt="Hairlust usp icon" />
    </figure>

    <p className="usp__item__text">{title}</p>
  </li>
)
