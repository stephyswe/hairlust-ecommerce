import { SvgIconMenu, SvgIconSearch } from '../../../icons'

export const NavButton = ({ btnOnClick }: any) => (
  <button
    onClick={() => btnOnClick()}
    type="button"
    className="header__item header__menu-button js-menuBtn"
  >
    <div className="header__item__icon-wrapper">
      <SvgIconMenu />
    </div>
    <span className="header__item__text">Meny</span>
  </button>
)

export const NavUserButton = ({
  title,
  onClick,
}: {
  title: string
  onClick: any
}) => (
  <button
    onClick={() => onClick()}
    type="button"
    className="header__item header__search-button js-searchBtn"
  >
    <span className="header__item__icon-wrapper">
      <SvgIconSearch />
    </span>
    <span className="header__item__text">{title}</span>
  </button>
)
