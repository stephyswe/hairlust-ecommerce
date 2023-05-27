import cn from 'clsx'
import { useRouter } from 'next/router'

export const CollectionNavItem = ({ href, title }: any) => {
  const router = useRouter()
  return (
    <li
      className={cn(
        'collection__nav__item',
        `/collections/${href}` === router.asPath
          ? 'is-active js-activeLink'
          : ''
      )}
    >
      <a href={`/collections/${href}`}>{title}</a>
    </li>
  )
}

export const CollectionNavWrapper = ({ options, title }: any) => (
  <div className="collection__nav-wrapper">
    <nav className="collection__nav is-initialized">
      <h2 className="collection__nav__title title title--small">{title}</h2>
      <ul className="collection__nav__list">
        {options.map((item: any, index: number) => (
          <CollectionNavItem key={index} {...item} />
        ))}
      </ul>
    </nav>
  </div>
)
