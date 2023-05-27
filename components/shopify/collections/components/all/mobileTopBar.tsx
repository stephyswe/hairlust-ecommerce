import { SvgIconSettings } from '../../../../icons'

export const CollectionMobileTopBar = ({ title }: any) => (
  <div className="collection__mobile-topbar" data-topbar-mobile="">
    <div className="container">
      <div className="collection__nav-wrapper">
        <nav className="collection__nav is-initialized">
          <h2 className="collection__nav__title title title--small">{title}</h2>
          <ul className="collection__nav__list">
            <li className="collection__nav__item is-active js-activeLink">
              <a href="/collections/all">Alla produkter</a>
            </li>
            <li className="collection__nav__item">
              <a href="/collections/bundles">Nyheter</a>
            </li>
            <li className="collection__nav__item">
              <a href="/collections/bundles">Erbjudanden &amp; Presentboxar</a>
            </li>
            <li className="collection__nav__item">
              <a href="/collections/supplements">Kosttillskott för håret</a>
            </li>
            <li className="collection__nav__item">
              <a href="/collections/hair-care">Hårvård</a>
            </li>
            <li className="collection__nav__item">
              <a href="https://hairlust.se/collections/scalp-care">
                Hårbottenvård
              </a>
            </li>
            <li className="collection__nav__item">
              <a href="https://hairlust.se/collections/hair-styling">
                Hårstyling
              </a>
            </li>
            <li className="collection__nav__item">
              <a href="/collections/accessories">Borstar &amp; Tillbehör</a>
            </li>
            <li className="collection__nav__item">
              <a href="/collections/bedding">Bambu sängkläder</a>
            </li>
            <li className="collection__nav__item">
              <a href="/collections/lashes-and-brows">Fransar &amp; Bryn</a>
            </li>
            <li className="collection__nav__item">
              <a href="https://hairlust.se/collections/beard-care">Skäggvård</a>
            </li>
            <li className="collection__nav__item">
              <a href="/collections/gift-card">Presentkort</a>
            </li>
            <li className="collection__nav__item">
              <a href="https://hairlust.se/collections/stock-sale">
                Oldies but Goldies -50% 💰
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="collection__topbar">
        <p className="collection__topbar__products-found js-productsFound">
          85 produkter
        </p>

        <button
          type="button"
          className="collection__mobile-filter-button js-mobileFilterBtn"
        >
          <span>Filter</span>
          <SvgIconSettings />
        </button>
      </div>
    </div>
  </div>
)
