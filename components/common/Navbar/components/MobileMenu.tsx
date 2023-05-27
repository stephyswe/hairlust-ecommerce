import cn from 'clsx'
import {
  SvgIconArrowDownSmall,
  SvgIconArrowLeft,
  SvgIconClose,
  SvgLinkArrowRightDefault,
} from '../../../icons'

export const MobileMenu = ({ isOpen, onClose }: any) => (
  <nav className={cn('mobile-menu', isOpen ? 'is-open' : '')} hidden={!isOpen}>
    <header className="mobile-menu__header">
      <button
        type="button"
        className="mobile-menu__header__back-button js-backBtn"
      >
        <SvgIconArrowLeft />
        <span className="mobile-menu__header__back-button__text">Tillbaka</span>
      </button>

      <button
        onClick={() => onClose()}
        type="button"
        className="mobile-menu__header__close-button js-closeBtn"
      >
        <span className="mobile-menu__header__close-button__text">Stäng</span>
        <SvgIconClose />
      </button>
    </header>
    <div className="mobile-menu__main">
      <div className="mobile-menu__main__links-wrapper">
        <ul className="mobile-menu__main__links">
          <li className="mobile-menu__main__link-item">
            <a
              href="/collections/all"
              className="mobile-menu__main__link-item__link"
            >
              <figure className="mobile-menu__main__link-item__image">
                <img
                  className="lazyautosizes lazyloaded"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                  data-sizes="auto"
                  data-max-width="540"
                  alt=""
                  data-srcset="//cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_all-products_2_180x.jpg?v=1663314778 180w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_all-products_2_320x.jpg?v=1663314778 320w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_all-products_2_480x.jpg?v=1663314778 480w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_all-products_2_540x.jpg?v=1663314778 540w"
                  sizes="275px"
                  srcSet="//cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_all-products_2_180x.jpg?v=1663314778 180w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_all-products_2_320x.jpg?v=1663314778 320w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_all-products_2_480x.jpg?v=1663314778 480w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_all-products_2_540x.jpg?v=1663314778 540w"
                />
              </figure>
              <div className="mobile-menu__main__link-item__title">
                <span className="mobile-menu__main__link-item__title__text">
                  Alla produkter
                </span>
                <svg
                  className="icon icon--arrow-right-small"
                  viewBox="0 0 12 12"
                >
                  <path d="M3.429 12c-.172 0-.429-.086-.515-.257-.257-.257-.257-.772 0-1.114L7.63 6 2.914 1.286c-.257-.257-.257-.772 0-1.115s.772-.257 1.115 0l4.885 4.972c.515.514.515 1.2.086 1.714L4.029 11.83c-.172.085-.343.171-.6.171zm4.457-5.743z"></path>
                </svg>
              </div>
            </a>
          </li>
          <li className="mobile-menu__main__link-item">
            <a
              href="/collections/bundles"
              className="mobile-menu__main__link-item__link"
            >
              <figure className="mobile-menu__main__link-item__image">
                <img
                  className="lazyautosizes lazyloaded"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                  data-sizes="auto"
                  data-max-width="540"
                  alt=""
                  data-srcset="//cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_offers-and-gifts_1_180x.jpg?v=1663314797 180w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_offers-and-gifts_1_320x.jpg?v=1663314797 320w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_offers-and-gifts_1_480x.jpg?v=1663314797 480w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_offers-and-gifts_1_540x.jpg?v=1663314797 540w"
                  sizes="275px"
                  srcSet="//cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_offers-and-gifts_1_180x.jpg?v=1663314797 180w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_offers-and-gifts_1_320x.jpg?v=1663314797 320w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_offers-and-gifts_1_480x.jpg?v=1663314797 480w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_offers-and-gifts_1_540x.jpg?v=1663314797 540w"
                />
              </figure>
              <div className="mobile-menu__main__link-item__title">
                <span className="mobile-menu__main__link-item__title__text">
                  Erbjudanden &amp; Presentboxar
                </span>
                <svg
                  className="icon icon--arrow-right-small"
                  viewBox="0 0 12 12"
                >
                  <path d="M3.429 12c-.172 0-.429-.086-.515-.257-.257-.257-.257-.772 0-1.114L7.63 6 2.914 1.286c-.257-.257-.257-.772 0-1.115s.772-.257 1.115 0l4.885 4.972c.515.514.515 1.2.086 1.714L4.029 11.83c-.172.085-.343.171-.6.171zm4.457-5.743z"></path>
                </svg>
              </div>
            </a>
          </li>
          <li className="mobile-menu__main__link-item">
            <a
              href="/collections/supplements"
              className="mobile-menu__main__link-item__link"
            >
              <figure className="mobile-menu__main__link-item__image">
                <img
                  className="lazyautosizes lazyloaded"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                  data-sizes="auto"
                  data-max-width="540"
                  alt=""
                  data-srcset="//cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_hair-vitamins_V2_180x.jpg?v=1663314817 180w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_hair-vitamins_V2_320x.jpg?v=1663314817 320w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_hair-vitamins_V2_480x.jpg?v=1663314817 480w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_hair-vitamins_V2_540x.jpg?v=1663314817 540w"
                  sizes="275px"
                  srcSet="//cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_hair-vitamins_V2_180x.jpg?v=1663314817 180w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_hair-vitamins_V2_320x.jpg?v=1663314817 320w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_hair-vitamins_V2_480x.jpg?v=1663314817 480w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_hair-vitamins_V2_540x.jpg?v=1663314817 540w"
                />
              </figure>
              <div className="mobile-menu__main__link-item__title">
                <span className="mobile-menu__main__link-item__title__text">
                  Kosttillskott för håret
                </span>
                <svg
                  className="icon icon--arrow-right-small"
                  viewBox="0 0 12 12"
                >
                  <path d="M3.429 12c-.172 0-.429-.086-.515-.257-.257-.257-.257-.772 0-1.114L7.63 6 2.914 1.286c-.257-.257-.257-.772 0-1.115s.772-.257 1.115 0l4.885 4.972c.515.514.515 1.2.086 1.714L4.029 11.83c-.172.085-.343.171-.6.171zm4.457-5.743z"></path>
                </svg>
              </div>
            </a>
          </li>
          <li className="mobile-menu__main__link-item">
            <a
              href="/collections/hair-care"
              className="mobile-menu__main__link-item__link"
            >
              <figure className="mobile-menu__main__link-item__image">
                <img
                  className="lazyautosizes lazyloaded"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                  data-sizes="auto"
                  data-max-width="540"
                  alt=""
                  data-srcset="//cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_hair-care_v2_180x.jpg?v=1663314837 180w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_hair-care_v2_320x.jpg?v=1663314837 320w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_hair-care_v2_480x.jpg?v=1663314837 480w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_hair-care_v2_540x.jpg?v=1663314837 540w"
                  sizes="275px"
                  srcSet="//cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_hair-care_v2_180x.jpg?v=1663314837 180w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_hair-care_v2_320x.jpg?v=1663314837 320w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_hair-care_v2_480x.jpg?v=1663314837 480w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_hair-care_v2_540x.jpg?v=1663314837 540w"
                />
              </figure>
              <div className="mobile-menu__main__link-item__title">
                <span className="mobile-menu__main__link-item__title__text">
                  Hårvård
                </span>
                <svg
                  className="icon icon--arrow-right-small"
                  viewBox="0 0 12 12"
                >
                  <path d="M3.429 12c-.172 0-.429-.086-.515-.257-.257-.257-.257-.772 0-1.114L7.63 6 2.914 1.286c-.257-.257-.257-.772 0-1.115s.772-.257 1.115 0l4.885 4.972c.515.514.515 1.2.086 1.714L4.029 11.83c-.172.085-.343.171-.6.171zm4.457-5.743z"></path>
                </svg>
              </div>
            </a>
          </li>
          <li className="mobile-menu__main__link-item">
            <a
              href="/collections/scalp-care"
              className="mobile-menu__main__link-item__link"
            >
              <figure className="mobile-menu__main__link-item__image">
                <img
                  className="lazyautosizes lazyloaded"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                  data-sizes="auto"
                  data-max-width="540"
                  alt=""
                  data-srcset="//cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_scalp-care_V2_180x.jpg?v=1663314851 180w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_scalp-care_V2_320x.jpg?v=1663314851 320w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_scalp-care_V2_480x.jpg?v=1663314851 480w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_scalp-care_V2_540x.jpg?v=1663314851 540w"
                  sizes="275px"
                  srcSet="//cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_scalp-care_V2_180x.jpg?v=1663314851 180w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_scalp-care_V2_320x.jpg?v=1663314851 320w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_scalp-care_V2_480x.jpg?v=1663314851 480w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_scalp-care_V2_540x.jpg?v=1663314851 540w"
                />
              </figure>
              <div className="mobile-menu__main__link-item__title">
                <span className="mobile-menu__main__link-item__title__text">
                  Hårbottenvård
                </span>
                <svg
                  className="icon icon--arrow-right-small"
                  viewBox="0 0 12 12"
                >
                  <path d="M3.429 12c-.172 0-.429-.086-.515-.257-.257-.257-.257-.772 0-1.114L7.63 6 2.914 1.286c-.257-.257-.257-.772 0-1.115s.772-.257 1.115 0l4.885 4.972c.515.514.515 1.2.086 1.714L4.029 11.83c-.172.085-.343.171-.6.171zm4.457-5.743z"></path>
                </svg>
              </div>
            </a>
          </li>
          <li className="mobile-menu__main__link-item">
            <a
              href="/collections/hair-styling"
              className="mobile-menu__main__link-item__link"
            >
              <figure className="mobile-menu__main__link-item__image">
                <img
                  className="lazyautosizes lazyloaded"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                  data-sizes="auto"
                  data-max-width="540"
                  alt=""
                  data-srcset="//cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_hair-styling_V2_180x.jpg?v=1663314867 180w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_hair-styling_V2_320x.jpg?v=1663314867 320w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_hair-styling_V2_480x.jpg?v=1663314867 480w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_hair-styling_V2_540x.jpg?v=1663314867 540w"
                  sizes="275px"
                  srcSet="//cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_hair-styling_V2_180x.jpg?v=1663314867 180w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_hair-styling_V2_320x.jpg?v=1663314867 320w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_hair-styling_V2_480x.jpg?v=1663314867 480w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_hair-styling_V2_540x.jpg?v=1663314867 540w"
                />
              </figure>
              <div className="mobile-menu__main__link-item__title">
                <span className="mobile-menu__main__link-item__title__text">
                  Hårstyling
                </span>
                <svg
                  className="icon icon--arrow-right-small"
                  viewBox="0 0 12 12"
                >
                  <path d="M3.429 12c-.172 0-.429-.086-.515-.257-.257-.257-.257-.772 0-1.114L7.63 6 2.914 1.286c-.257-.257-.257-.772 0-1.115s.772-.257 1.115 0l4.885 4.972c.515.514.515 1.2.086 1.714L4.029 11.83c-.172.085-.343.171-.6.171zm4.457-5.743z"></path>
                </svg>
              </div>
            </a>
          </li>
          <li className="mobile-menu__main__link-item">
            <a
              href="/collections/accessories"
              className="mobile-menu__main__link-item__link"
            >
              <figure className="mobile-menu__main__link-item__image">
                <img
                  className="lazyautosizes lazyloaded"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                  data-sizes="auto"
                  data-max-width="540"
                  alt=""
                  data-srcset="//cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_brushes-accessories_1_180x.jpg?v=1663314882 180w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_brushes-accessories_1_320x.jpg?v=1663314882 320w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_brushes-accessories_1_480x.jpg?v=1663314882 480w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_brushes-accessories_1_540x.jpg?v=1663314882 540w"
                  sizes="275px"
                  srcSet="//cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_brushes-accessories_1_180x.jpg?v=1663314882 180w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_brushes-accessories_1_320x.jpg?v=1663314882 320w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_brushes-accessories_1_480x.jpg?v=1663314882 480w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_brushes-accessories_1_540x.jpg?v=1663314882 540w"
                />
              </figure>
              <div className="mobile-menu__main__link-item__title">
                <span className="mobile-menu__main__link-item__title__text">
                  Borstar &amp; Tillbehör
                </span>
                <svg
                  className="icon icon--arrow-right-small"
                  viewBox="0 0 12 12"
                >
                  <path d="M3.429 12c-.172 0-.429-.086-.515-.257-.257-.257-.257-.772 0-1.114L7.63 6 2.914 1.286c-.257-.257-.257-.772 0-1.115s.772-.257 1.115 0l4.885 4.972c.515.514.515 1.2.086 1.714L4.029 11.83c-.172.085-.343.171-.6.171zm4.457-5.743z"></path>
                </svg>
              </div>
            </a>
          </li>
          <li className="mobile-menu__main__link-item">
            <a
              href="/collections/bedding"
              className="mobile-menu__main__link-item__link"
            >
              <figure className="mobile-menu__main__link-item__image">
                <img
                  className="lazyautosizes lazyloaded"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                  data-sizes="auto"
                  data-max-width="540"
                  alt=""
                  data-srcset="//cdn.shopify.com/s/files/1/2199/8485/files/Collection_banner_bedding_180x.jpg?v=1669797349 180w, //cdn.shopify.com/s/files/1/2199/8485/files/Collection_banner_bedding_320x.jpg?v=1669797349 320w, //cdn.shopify.com/s/files/1/2199/8485/files/Collection_banner_bedding_480x.jpg?v=1669797349 480w, //cdn.shopify.com/s/files/1/2199/8485/files/Collection_banner_bedding_540x.jpg?v=1669797349 540w"
                  sizes="275px"
                  srcSet="//cdn.shopify.com/s/files/1/2199/8485/files/Collection_banner_bedding_180x.jpg?v=1669797349 180w, //cdn.shopify.com/s/files/1/2199/8485/files/Collection_banner_bedding_320x.jpg?v=1669797349 320w, //cdn.shopify.com/s/files/1/2199/8485/files/Collection_banner_bedding_480x.jpg?v=1669797349 480w, //cdn.shopify.com/s/files/1/2199/8485/files/Collection_banner_bedding_540x.jpg?v=1669797349 540w"
                />
              </figure>
              <div className="mobile-menu__main__link-item__title">
                <span className="mobile-menu__main__link-item__title__text">
                  Bambu sängkläder
                </span>
                <svg
                  className="icon icon--arrow-right-small"
                  viewBox="0 0 12 12"
                >
                  <path d="M3.429 12c-.172 0-.429-.086-.515-.257-.257-.257-.257-.772 0-1.114L7.63 6 2.914 1.286c-.257-.257-.257-.772 0-1.115s.772-.257 1.115 0l4.885 4.972c.515.514.515 1.2.086 1.714L4.029 11.83c-.172.085-.343.171-.6.171zm4.457-5.743z"></path>
                </svg>
              </div>
            </a>
          </li>
          <li className="mobile-menu__main__link-item">
            <a
              href="/collections/beard-care"
              className="mobile-menu__main__link-item__link"
            >
              <figure className="mobile-menu__main__link-item__image">
                <img
                  className="lazyautosizes lazyloaded"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                  data-sizes="auto"
                  data-max-width="540"
                  alt=""
                  data-srcset="//cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_beard-care_v3_180x.jpg?v=1663314896 180w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_beard-care_v3_320x.jpg?v=1663314896 320w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_beard-care_v3_480x.jpg?v=1663314896 480w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_beard-care_v3_540x.jpg?v=1663314896 540w"
                  sizes="275px"
                  srcSet="//cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_beard-care_v3_180x.jpg?v=1663314896 180w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_beard-care_v3_320x.jpg?v=1663314896 320w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_beard-care_v3_480x.jpg?v=1663314896 480w, //cdn.shopify.com/s/files/1/2199/8485/files/collection_banner_beard-care_v3_540x.jpg?v=1663314896 540w"
                />
              </figure>
              <div className="mobile-menu__main__link-item__title">
                <span className="mobile-menu__main__link-item__title__text">
                  Skäggvård
                </span>
                <svg
                  className="icon icon--arrow-right-small"
                  viewBox="0 0 12 12"
                >
                  <path d="M3.429 12c-.172 0-.429-.086-.515-.257-.257-.257-.257-.772 0-1.114L7.63 6 2.914 1.286c-.257-.257-.257-.772 0-1.115s.772-.257 1.115 0l4.885 4.972c.515.514.515 1.2.086 1.714L4.029 11.83c-.172.085-.343.171-.6.171zm4.457-5.743z"></path>
                </svg>
              </div>
            </a>
          </li>
          <li className="mobile-menu__main__link-item">
            <a
              href="/collections/stock-sale"
              className="mobile-menu__main__link-item__link"
            >
              <figure className="mobile-menu__main__link-item__image">
                <img
                  className="lazyload"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                  data-src="//cdn.shopify.com/s/files/1/2199/8485/files/Collecion_banner_Oldies-but-Goldies_1_19a98734-6ec0-4029-9f44-c8b149952394_{width}x.jpg?v=1669707853"
                  data-sizes="auto"
                  data-max-width="540"
                  alt=""
                />
              </figure>
              <div className="mobile-menu__main__link-item__title">
                <span className="mobile-menu__main__link-item__title__text">
                  Oldies but Goldies -50% rabatt 💰
                </span>
                <svg
                  className="icon icon--arrow-right-small"
                  viewBox="0 0 12 12"
                >
                  <path d="M3.429 12c-.172 0-.429-.086-.515-.257-.257-.257-.257-.772 0-1.114L7.63 6 2.914 1.286c-.257-.257-.257-.772 0-1.115s.772-.257 1.115 0l4.885 4.972c.515.514.515 1.2.086 1.714L4.029 11.83c-.172.085-.343.171-.6.171zm4.457-5.743z"></path>
                </svg>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div className="mobile-menu__primary-nav">
        <ul className="mobile-menu__primary-nav__list">
          <li className="mobile-menu__primary-nav__item">
            <a href="/" className="mobile-menu__primary-nav__item__link">
              Hem
            </a>
          </li>
          <li className="mobile-menu__primary-nav__item">
            <button
              type="button"
              className="mobile-menu__primary-nav__item__submenu-button js-submenuBtn"
              data-index="2"
            >
              <span>Produkter</span>
              <SvgLinkArrowRightDefault />
            </button>
            <div
              className="mobile-menu__submenu js-submenu"
              data-index="2"
              hidden={false}
            >
              <ul className="mobile-menu__submenu__list">
                <li className="mobile-menu__submenu__item">
                  <a href="/collections/all">Alla produkter</a>
                </li>
                <li className="mobile-menu__submenu__item">
                  <a href="/collections/bundles">
                    Erbjudanden &amp; Presentboxar
                  </a>
                </li>
                <li className="mobile-menu__submenu__item">
                  <a href="/collections/supplements">Kosttillskott för håret</a>
                </li>
                <li className="mobile-menu__submenu__item">
                  <a href="/collections/hair-care">Hårvård</a>
                </li>
                <li className="mobile-menu__submenu__item">
                  <a href="https://hairlust.se/collections/scalp-care">
                    Hårbottenvård
                  </a>
                </li>
                <li className="mobile-menu__submenu__item">
                  <a href="https://hairlust.se/collections/hair-styling">
                    Hårstyling
                  </a>
                </li>
                <li className="mobile-menu__submenu__item">
                  <a href="/collections/accessories">Borstar &amp; Tillbehör</a>
                </li>
                <li className="mobile-menu__submenu__item">
                  <a href="/collections/bedding">Bambu sängkläder</a>
                </li>
                <li className="mobile-menu__submenu__item">
                  <a href="/collections/lashes-and-brows">Fransar &amp; Bryn</a>
                </li>
                <li className="mobile-menu__submenu__item">
                  <a href="https://hairlust.se/collections/beard-care">
                    Skäggvård
                  </a>
                </li>
                <li className="mobile-menu__submenu__item">
                  <a href="/collections/gift-card">Presentkort</a>
                </li>
                <li className="mobile-menu__submenu__item">
                  <a href="https://hairlust.se/collections/stock-sale">
                    Oldies but Goldies -50% 💰
                  </a>
                </li>
              </ul>

              <div className="mobile-menu__submenu__content">
                <p className="mobile-menu__submenu__content__title"></p>
                <div className="mobile-menu__submenu__content__columns">
                  <div className="mobile-menu__submenu__content__column-item">
                    <a href="/collections/all?filter=hairtype">
                      <figure className="mobile-menu__submenu__content__column-item__image">
                        <img
                          className="lazyload"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                          data-src="//cdn.shopify.com/s/files/1/2199/8485/files/MegamenuWoman_bgGrey_{width}x.jpg?v=1623402306"
                          data-sizes="auto"
                          data-max-width="720"
                          alt=""
                        />
                      </figure>
                      <p className="mobile-menu__submenu__content__column-item__title">
                        Shoppa efter hårtyp
                      </p>
                    </a>
                  </div>
                  <div className="mobile-menu__submenu__content__column-item">
                    <a href="/collections/all?filter=series">
                      <figure className="mobile-menu__submenu__content__column-item__image">
                        <img
                          className="lazyload"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                          data-src="//cdn.shopify.com/s/files/1/2199/8485/files/CromMegMenu_Men_bgGrey_{width}x.jpg?v=1623402227"
                          data-sizes="auto"
                          data-max-width="720"
                          alt=""
                        />
                      </figure>
                      <p className="mobile-menu__submenu__content__column-item__title">
                        Shoppa efter produktserie
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="mobile-menu__primary-nav__item">
            <button
              type="button"
              className="mobile-menu__primary-nav__item__submenu-button js-submenuBtn"
              data-index="3"
            >
              <span>Om oss</span>
              <SvgLinkArrowRightDefault />
            </button>
            <div
              className="mobile-menu__submenu js-submenu"
              data-index="3"
              hidden={false}
            >
              <ul className="mobile-menu__submenu__list">
                <li className="mobile-menu__submenu__item">
                  <a href="/pages/about-overview">Översikt</a>
                </li>
                <li className="mobile-menu__submenu__item">
                  <a href="/pages/about">Bakom Hairlust</a>
                </li>
                <li className="mobile-menu__submenu__item">
                  <a href="/blogs/ingredients">Ingredienser</a>
                </li>
                <li className="mobile-menu__submenu__item">
                  <a href="/pages/reviews">Kundomdömen</a>
                </li>
                <li className="mobile-menu__submenu__item">
                  <a href="/pages/responsibility">Vårt ansvar</a>
                </li>
                <li className="mobile-menu__submenu__item">
                  <a href="/blogs/upcycling">Upcycling</a>
                </li>
                <li className="mobile-menu__submenu__item">
                  <a href="https://hairlust.se/pages/team">Team</a>
                </li>
              </ul>

              <div className="mobile-menu__submenu__content">
                <p className="mobile-menu__submenu__content__title"></p>
                <div className="mobile-menu__submenu__content__columns">
                  <div className="mobile-menu__submenu__content__column-item">
                    <a href="/blogs/ingredients">
                      <figure className="mobile-menu__submenu__content__column-item__image">
                        <img
                          className="lazyload"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                          data-src="//cdn.shopify.com/s/files/1/2199/8485/files/CromMegMenu_Ingred9_{width}x.jpg?v=1623402227"
                          data-sizes="auto"
                          data-max-width="720"
                          alt=""
                        />
                      </figure>
                      <p className="mobile-menu__submenu__content__column-item__title">
                        Ingredienser
                      </p>
                    </a>
                  </div>
                  <div className="mobile-menu__submenu__content__column-item">
                    <a href="/pages/reviews">
                      <figure className="mobile-menu__submenu__content__column-item__image">
                        <img
                          className="lazyload"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                          data-src="//cdn.shopify.com/s/files/1/2199/8485/files/CromMegMenu_Anmel5_{width}x.jpg?v=1623402227"
                          data-sizes="auto"
                          data-max-width="720"
                          alt=""
                        />
                      </figure>
                      <p className="mobile-menu__submenu__content__column-item__title">
                        Kundomdömen
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="mobile-menu__primary-nav__item">
            <button
              type="button"
              className="mobile-menu__primary-nav__item__submenu-button js-submenuBtn"
              data-index="4"
            >
              <span>Hair Talk</span>
              <SvgLinkArrowRightDefault />
            </button>
            <div
              className="mobile-menu__submenu js-submenu"
              data-index="4"
              hidden={false}
            >
              <ul className="mobile-menu__submenu__list">
                <li className="mobile-menu__submenu__item">
                  <a href="/pages/hair-talk">Översikt</a>
                </li>
                <li className="mobile-menu__submenu__item">
                  <a href="/blogs/blog">Hair Talk Blogg</a>
                </li>
                <li className="mobile-menu__submenu__item">
                  <a href="/blogs/video-studio">Video Studio</a>
                </li>
                <li className="mobile-menu__submenu__item">
                  <a href="/pages/inspire">Hairlust INSPIRE</a>
                </li>
              </ul>

              <div className="mobile-menu__submenu__content">
                <p className="mobile-menu__submenu__content__title"></p>
                <div className="mobile-menu__submenu__content__columns">
                  <div className="mobile-menu__submenu__content__column-item">
                    <a href="/blogs/blog">
                      <figure className="mobile-menu__submenu__content__column-item__image">
                        <img
                          className="lazyload"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                          data-src="//cdn.shopify.com/s/files/1/2199/8485/files/Talk_Crop_test2_{width}x.jpg?v=1623402302"
                          data-sizes="auto"
                          data-max-width="720"
                          alt=""
                        />
                      </figure>
                      <p className="mobile-menu__submenu__content__column-item__title">
                        Hair Talk Blogg
                      </p>
                    </a>
                  </div>
                  <div className="mobile-menu__submenu__content__column-item">
                    <a href="/blogs/video-studio">
                      <figure className="mobile-menu__submenu__content__column-item__image">
                        <img
                          className="lazyload"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                          data-src="//cdn.shopify.com/s/files/1/2199/8485/files/Inspiration_whiteCrop3_{width}x.jpg?v=1623402228"
                          data-sizes="auto"
                          data-max-width="720"
                          alt=""
                        />
                      </figure>
                      <p className="mobile-menu__submenu__content__column-item__title">
                        Video Studio
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="mobile-menu__secondary-nav">
        <ul className="mobile-menu__secondary-nav__list">
          <li className="mobile-menu__secondary-nav__item">
            <a href="/pages/faq">Vanliga frågor (FAQ)</a>
          </li>
          <li className="mobile-menu__secondary-nav__item">
            <a href="/pages/shipping">Leverans</a>
          </li>
          <li className="mobile-menu__secondary-nav__item">
            <a href="/pages/contact">Kontakta oss</a>
          </li>
          <li className="mobile-menu__secondary-nav__item">
            <a href="/account">Min profil</a>
          </li>
        </ul>
      </div>
      <div className="mobile-menu__country">
        <button
          type="button"
          className="footer__country__button is-initialized"
        >
          <img
            src="//cdn.shopify.com/s/files/1/2199/8485/t/42/assets/flag_se.svg?v=167704571123555477071671454099"
            className="js-currentFlag"
            alt="flag"
          />
          <span className="js-currentCountry">Sverige</span>
          <SvgIconArrowDownSmall />
        </button>
      </div>
    </div>
  </nav>
)
