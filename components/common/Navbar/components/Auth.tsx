import { SvgIconAccount } from '../../../icons'

export const NavAuth = () => (
  <div className="header__item header__account">
    <a href="/account" className="header__account__inner">
      <span className="header__item__icon-wrapper">
        <SvgIconAccount />
      </span>
      <span className="header__item__text">Logga in</span>
    </a>
  </div>
)
