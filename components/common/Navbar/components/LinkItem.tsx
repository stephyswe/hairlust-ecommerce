import { MegaMenuLink, MegaMenuItem } from './MegaMenu'

export const NavLink = ({ nav: { href, label } }: any) => (
  <a href={href} className="header__nav__item__link">
    {label}
  </a>
)

export const ProdItem = ({ nav, link, items }: any) => (
  <li className="header__nav__item">
    <NavLink nav={nav} />
    {items && items.length ? (
      <nav className="megamenu">
        <div className="megamenu__inner container container--small">
          <ul className="megamenu__linklist">
            {link.map(({ title, href }: any) => (
              <MegaMenuLink key={title} title={title} link={href} />
            ))}
          </ul>

          <div className="megamenu__content">
            <div className="megamenu__columns">
              {items.map(({ title, subtitle, link, srcSet }: any) => (
                <MegaMenuItem
                  key={title}
                  title={title}
                  subtitle={subtitle}
                  link={link}
                  srcSet={srcSet}
                />
              ))}
            </div>
          </div>
        </div>
      </nav>
    ) : null}
  </li>
)
