import cn from 'clsx'
import { SvgIconClose, SvgIconSearch } from '../../../icons'

export const SearchMenu = ({ isOpen, onClose }: any) => (
  <div className={cn('live-search', isOpen ? 'is-open' : '')} hidden={!isOpen}>
    <div className="live-search__inner">
      <div className="container container--full">
        <div className="live-search__top">
          <a href="https://hairlust.se" className="header__logo">
            <img
              src="//cdn.shopify.com/s/files/1/2199/8485/files/Logomark_HL_black.svg?v=1663225701&amp;15324"
              className="header__logo__positive"
              alt="Hairlust logo"
            />
          </a>

          <form
            action="/search"
            method="get"
            role="search"
            className="live-search__form js-form"
          >
            <button type="submit" className="live-search__form__submit-button">
              <SvgIconSearch />
            </button>
            <input
              type="search"
              name="q"
              autoComplete="off"
              placeholder="Sök..."
              className="js-input"
            />
            <button
              type="button"
              className="live-search__form__clear-button js-clearBtn"
              hidden={false}
            >
              <SvgIconClose />
            </button>
          </form>

          <button
            onClick={() => onClose()}
            type="button"
            className="live-search__close-button js-closeBtn"
          >
            <span className="live-search__close-button__text">Stäng</span>
            <SvgIconClose />
          </button>
        </div>

        <div className="live-search__results">
          <div
            className="live-search__results__secondary js-secondary"
            hidden={false}
          >
            <div
              className="live-search__collections js-collections"
              hidden={false}
            >
              <p className="live-search__results__title">Kategorier</p>
              <ul className="live-search__collections__list js-collectionsList"></ul>
            </div>
          </div>

          <div className="live-search__results__primary">
            <div className="live-search__suggestions js-suggestions">
              <p className="live-search__results__title">Populära sökningar</p>
              <ul
                className="live-search__suggestions__list js-suggestionsList"
                data-manual="true"
              >
                <li data-value="hair growth">
                  <a href="/search?q=hair growth">hair growth</a>
                </li>
                <li data-value="schampo">
                  <a href="/search?q=schampo">schampo</a>
                </li>
                <li data-value="örngott">
                  <a href="/search?q=örngott">örngott</a>
                </li>
                <li data-value="scalp">
                  <a href="/search?q=scalp">scalp</a>
                </li>
                <li data-value="hair">
                  <a href="/search?q=hair">hair</a>
                </li>
                <li data-value="hårvitaminer">
                  <a href="/search?q=hårvitaminer">hårvitaminer</a>
                </li>
              </ul>
            </div>

            <div className="live-search__products js-products" hidden={false}>
              <p className="live-search__results__title live-search__products__title">
                Produkter
              </p>
              <ul className="live-search__products__list grid js-productsList"></ul>
              <div
                className="live-search__products__cta-wrapper js-productsCta"
                hidden={false}
              >
                <button type="button" className="cta cta--filled-dark">
                  Se fler resultat
                </button>
              </div>
            </div>

            <div
              className="live-search__no-results js-noResults"
              hidden={false}
            >
              <p>Din sökning gav inga resultat</p>
              <a href="/collections/all" className="cta cta--filled-dark">
                Se fler resultat
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
