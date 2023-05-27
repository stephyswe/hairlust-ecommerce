import cn from 'clsx'
import {
  SvgIconArrowDownSmall,
  SvgIconCheckmarkSmall,
  SvgIconClose,
} from '../../../../icons'

export const CollectionFilterElement = ({
  filterRef,
  filterToggle,
  filterOpen,
}: any) => (
  <div
    className={cn(
      'collection__filter js-filterElement',
      filterOpen ? 'is-open' : ''
    )}
  >
    <div className="collection__filter__inner" ref={filterRef}>
      <header className="collection__filter__header">
        <p className="collection__filter__header__title">Filter</p>
        <button
          type="button"
          className="collection__filter__header__close-button js-filterCloseBtn"
          onClick={() => filterToggle()}
        >
          <span>Stäng</span>
          <SvgIconClose />
        </button>
      </header>

      <div className="collection__filter__group-list js-groupList">
        <div
          className="collection__filter__group js-groupContainer"
          data-name="gender"
        >
          <p className="collection__filter__group__title js-filterTitle">
            <span>Kön</span>
            <SvgIconArrowDownSmall />
          </p>
          <div className="collection__filter__group__list js-genderFilter js-group">
            <div
              className="collection__filter__item js-item"
              data-value="women"
            >
              <div className="collection__filter__item__checkbox">
                <SvgIconCheckmarkSmall />
              </div>

              <span className="collection__filter__item__title">
                Kvinna<span></span>
              </span>
            </div>

            <div className="collection__filter__item js-item" data-value="men">
              <div className="collection__filter__item__checkbox">
                <SvgIconCheckmarkSmall />
              </div>

              <span className="collection__filter__item__title">
                Man<span></span>
              </span>
            </div>
          </div>
        </div>

        <div
          className="collection__filter__group js-groupContainer"
          data-name="attribute"
        >
          <p className="collection__filter__group__title js-filterTitle">
            <span>Egenskaper</span>
            <SvgIconArrowDownSmall />
          </p>
          <div className="collection__filter__group__list js-attributeFilter js-group">
            <div
              className="collection__filter__item js-item"
              data-value="curlygirl"
            >
              <div className="collection__filter__item__checkbox">
                <SvgIconCheckmarkSmall />
              </div>

              <span className="collection__filter__item__title">
                Curly girl<span></span>
              </span>
            </div>

            <div
              className="collection__filter__item js-item"
              data-value="hairgrowth"
            >
              <div className="collection__filter__item__checkbox">
                <SvgIconCheckmarkSmall />
              </div>

              <span className="collection__filter__item__title">
                Hårväxt<span></span>
              </span>
            </div>

            <div
              className="collection__filter__item js-item"
              data-value="repairing"
            >
              <div className="collection__filter__item__checkbox">
                <SvgIconCheckmarkSmall />
              </div>

              <span className="collection__filter__item__title">
                Reparerande<span></span>
              </span>
            </div>

            <div
              className="collection__filter__item js-item"
              data-value="volume"
            >
              <div className="collection__filter__item__checkbox">
                <SvgIconCheckmarkSmall />
              </div>

              <span className="collection__filter__item__title">
                Volym<span></span>
              </span>
            </div>

            <div
              className="collection__filter__item js-item"
              data-value="antifrizz"
            >
              <div className="collection__filter__item__checkbox">
                <svg className="icon icon--checkmark-small" viewBox="0 0 12 12">
                  <path d="M3.543 11.2c-.457 0-.914-.229-1.257-.571L.114 7.657C-.114 7.43 0 6.857.343 6.63c.228-.229.8-.115 1.028.114L3.543 9.6l7.086-8.457c.228-.343.685-.343 1.028-.114.343.228.343.685.114 1.028L4.8 10.63c-.114 0-.114.114-.229.228-.342.229-.685.343-1.028.343z"></path>
                </svg>
              </div>

              <span className="collection__filter__item__title">
                Anti-Frizz<span></span>
              </span>
            </div>

            <div
              className="collection__filter__item js-item"
              data-value="clarifying"
            >
              <div className="collection__filter__item__checkbox">
                <svg className="icon icon--checkmark-small" viewBox="0 0 12 12">
                  <path d="M3.543 11.2c-.457 0-.914-.229-1.257-.571L.114 7.657C-.114 7.43 0 6.857.343 6.63c.228-.229.8-.115 1.028.114L3.543 9.6l7.086-8.457c.228-.343.685-.343 1.028-.114.343.228.343.685.114 1.028L4.8 10.63c-.114 0-.114.114-.229.228-.342.229-.685.343-1.028.343z"></path>
                </svg>
              </div>

              <span className="collection__filter__item__title">
                Djuprengörande<span></span>
              </span>
            </div>

            <div
              className="collection__filter__item js-item"
              data-value="dryscalp"
            >
              <div className="collection__filter__item__checkbox">
                <svg className="icon icon--checkmark-small" viewBox="0 0 12 12">
                  <path d="M3.543 11.2c-.457 0-.914-.229-1.257-.571L.114 7.657C-.114 7.43 0 6.857.343 6.63c.228-.229.8-.115 1.028.114L3.543 9.6l7.086-8.457c.228-.343.685-.343 1.028-.114.343.228.343.685.114 1.028L4.8 10.63c-.114 0-.114.114-.229.228-.342.229-.685.343-1.028.343z"></path>
                </svg>
              </div>

              <span className="collection__filter__item__title">
                Torr, irriterad hårbotten<span></span>
              </span>
            </div>

            <div
              className="collection__filter__item js-item"
              data-value="moisturising"
            >
              <div className="collection__filter__item__checkbox">
                <svg className="icon icon--checkmark-small" viewBox="0 0 12 12">
                  <path d="M3.543 11.2c-.457 0-.914-.229-1.257-.571L.114 7.657C-.114 7.43 0 6.857.343 6.63c.228-.229.8-.115 1.028.114L3.543 9.6l7.086-8.457c.228-.343.685-.343 1.028-.114.343.228.343.685.114 1.028L4.8 10.63c-.114 0-.114.114-.229.228-.342.229-.685.343-1.028.343z"></path>
                </svg>
              </div>

              <span className="collection__filter__item__title">
                Fuktgivande<span></span>
              </span>
            </div>

            <div
              className="collection__filter__item js-item"
              data-value="heatprotection"
            >
              <div className="collection__filter__item__checkbox">
                <svg className="icon icon--checkmark-small" viewBox="0 0 12 12">
                  <path d="M3.543 11.2c-.457 0-.914-.229-1.257-.571L.114 7.657C-.114 7.43 0 6.857.343 6.63c.228-.229.8-.115 1.028.114L3.543 9.6l7.086-8.457c.228-.343.685-.343 1.028-.114.343.228.343.685.114 1.028L4.8 10.63c-.114 0-.114.114-.229.228-.342.229-.685.343-1.028.343z"></path>
                </svg>
              </div>

              <span className="collection__filter__item__title">
                Värmeskydd<span></span>
              </span>
            </div>

            <div
              className="collection__filter__item js-item"
              data-value="styling"
            >
              <div className="collection__filter__item__checkbox">
                <svg className="icon icon--checkmark-small" viewBox="0 0 12 12">
                  <path d="M3.543 11.2c-.457 0-.914-.229-1.257-.571L.114 7.657C-.114 7.43 0 6.857.343 6.63c.228-.229.8-.115 1.028.114L3.543 9.6l7.086-8.457c.228-.343.685-.343 1.028-.114.343.228.343.685.114 1.028L4.8 10.63c-.114 0-.114.114-.229.228-.342.229-.685.343-1.028.343z"></path>
                </svg>
              </div>

              <span className="collection__filter__item__title">
                Styling<span></span>
              </span>
            </div>

            <div className="collection__filter__item js-item" data-value="uv">
              <div className="collection__filter__item__checkbox">
                <svg className="icon icon--checkmark-small" viewBox="0 0 12 12">
                  <path d="M3.543 11.2c-.457 0-.914-.229-1.257-.571L.114 7.657C-.114 7.43 0 6.857.343 6.63c.228-.229.8-.115 1.028.114L3.543 9.6l7.086-8.457c.228-.343.685-.343 1.028-.114.343.228.343.685.114 1.028L4.8 10.63c-.114 0-.114.114-.229.228-.342.229-.685.343-1.028.343z"></path>
                </svg>
              </div>

              <span className="collection__filter__item__title">
                Sol och UV-skydd<span></span>
              </span>
            </div>

            <div
              className="collection__filter__item js-item"
              data-value="dandruff"
            >
              <div className="collection__filter__item__checkbox">
                <svg className="icon icon--checkmark-small" viewBox="0 0 12 12">
                  <path d="M3.543 11.2c-.457 0-.914-.229-1.257-.571L.114 7.657C-.114 7.43 0 6.857.343 6.63c.228-.229.8-.115 1.028.114L3.543 9.6l7.086-8.457c.228-.343.685-.343 1.028-.114.343.228.343.685.114 1.028L4.8 10.63c-.114 0-.114.114-.229.228-.342.229-.685.343-1.028.343z"></path>
                </svg>
              </div>

              <span className="collection__filter__item__title">
                Anti-mjäll<span></span>
              </span>
            </div>

            <div
              className="collection__filter__item js-item"
              data-value="antiyellow"
            >
              <div className="collection__filter__item__checkbox">
                <svg className="icon icon--checkmark-small" viewBox="0 0 12 12">
                  <path d="M3.543 11.2c-.457 0-.914-.229-1.257-.571L.114 7.657C-.114 7.43 0 6.857.343 6.63c.228-.229.8-.115 1.028.114L3.543 9.6l7.086-8.457c.228-.343.685-.343 1.028-.114.343.228.343.685.114 1.028L4.8 10.63c-.114 0-.114.114-.229.228-.342.229-.685.343-1.028.343z"></path>
                </svg>
              </div>

              <span className="collection__filter__item__title">
                Anti-Yellow<span></span>
              </span>
            </div>
          </div>
        </div>

        <div
          className="collection__filter__group js-groupContainer"
          data-name="hairtype"
        >
          <p className="collection__filter__group__title js-filterTitle">
            <span>Hårtyp</span>
            <SvgIconArrowDownSmall />
          </p>
          <div className="collection__filter__group__list js-hairTypeFilter js-group">
            <div
              className="collection__filter__item js-item"
              data-value="blonde"
            >
              <div className="collection__filter__item__checkbox">
                <svg className="icon icon--checkmark-small" viewBox="0 0 12 12">
                  <path d="M3.543 11.2c-.457 0-.914-.229-1.257-.571L.114 7.657C-.114 7.43 0 6.857.343 6.63c.228-.229.8-.115 1.028.114L3.543 9.6l7.086-8.457c.228-.343.685-.343 1.028-.114.343.228.343.685.114 1.028L4.8 10.63c-.114 0-.114.114-.229.228-.342.229-.685.343-1.028.343z"></path>
                </svg>
              </div>

              <span className="collection__filter__item__title">
                Blondt<span></span>
              </span>
            </div>

            <div
              className="collection__filter__item js-item"
              data-value="curly"
            >
              <div className="collection__filter__item__checkbox">
                <svg className="icon icon--checkmark-small" viewBox="0 0 12 12">
                  <path d="M3.543 11.2c-.457 0-.914-.229-1.257-.571L.114 7.657C-.114 7.43 0 6.857.343 6.63c.228-.229.8-.115 1.028.114L3.543 9.6l7.086-8.457c.228-.343.685-.343 1.028-.114.343.228.343.685.114 1.028L4.8 10.63c-.114 0-.114.114-.229.228-.342.229-.685.343-1.028.343z"></path>
                </svg>
              </div>

              <span className="collection__filter__item__title">
                Lockigt<span></span>
              </span>
            </div>

            <div
              className="collection__filter__item js-item"
              data-value="damaged"
            >
              <div className="collection__filter__item__checkbox">
                <svg className="icon icon--checkmark-small" viewBox="0 0 12 12">
                  <path d="M3.543 11.2c-.457 0-.914-.229-1.257-.571L.114 7.657C-.114 7.43 0 6.857.343 6.63c.228-.229.8-.115 1.028.114L3.543 9.6l7.086-8.457c.228-.343.685-.343 1.028-.114.343.228.343.685.114 1.028L4.8 10.63c-.114 0-.114.114-.229.228-.342.229-.685.343-1.028.343z"></path>
                </svg>
              </div>

              <span className="collection__filter__item__title">
                Skadat<span></span>
              </span>
            </div>

            <div className="collection__filter__item js-item" data-value="dry">
              <div className="collection__filter__item__checkbox">
                <svg className="icon icon--checkmark-small" viewBox="0 0 12 12">
                  <path d="M3.543 11.2c-.457 0-.914-.229-1.257-.571L.114 7.657C-.114 7.43 0 6.857.343 6.63c.228-.229.8-.115 1.028.114L3.543 9.6l7.086-8.457c.228-.343.685-.343 1.028-.114.343.228.343.685.114 1.028L4.8 10.63c-.114 0-.114.114-.229.228-.342.229-.685.343-1.028.343z"></path>
                </svg>
              </div>

              <span className="collection__filter__item__title">
                Torrt<span></span>
              </span>
            </div>

            <div className="collection__filter__item js-item" data-value="fine">
              <div className="collection__filter__item__checkbox">
                <svg className="icon icon--checkmark-small" viewBox="0 0 12 12">
                  <path d="M3.543 11.2c-.457 0-.914-.229-1.257-.571L.114 7.657C-.114 7.43 0 6.857.343 6.63c.228-.229.8-.115 1.028.114L3.543 9.6l7.086-8.457c.228-.343.685-.343 1.028-.114.343.228.343.685.114 1.028L4.8 10.63c-.114 0-.114.114-.229.228-.342.229-.685.343-1.028.343z"></path>
                </svg>
              </div>

              <span className="collection__filter__item__title">
                Fint<span></span>
              </span>
            </div>

            <div
              className="collection__filter__item js-item"
              data-value="frizzy"
            >
              <div className="collection__filter__item__checkbox">
                <svg className="icon icon--checkmark-small" viewBox="0 0 12 12">
                  <path d="M3.543 11.2c-.457 0-.914-.229-1.257-.571L.114 7.657C-.114 7.43 0 6.857.343 6.63c.228-.229.8-.115 1.028.114L3.543 9.6l7.086-8.457c.228-.343.685-.343 1.028-.114.343.228.343.685.114 1.028L4.8 10.63c-.114 0-.114.114-.229.228-.342.229-.685.343-1.028.343z"></path>
                </svg>
              </div>

              <span className="collection__filter__item__title">
                Frissigt<span></span>
              </span>
            </div>

            <div
              className="collection__filter__item js-item"
              data-value="greasy"
            >
              <div className="collection__filter__item__checkbox">
                <svg className="icon icon--checkmark-small" viewBox="0 0 12 12">
                  <path d="M3.543 11.2c-.457 0-.914-.229-1.257-.571L.114 7.657C-.114 7.43 0 6.857.343 6.63c.228-.229.8-.115 1.028.114L3.543 9.6l7.086-8.457c.228-.343.685-.343 1.028-.114.343.228.343.685.114 1.028L4.8 10.63c-.114 0-.114.114-.229.228-.342.229-.685.343-1.028.343z"></path>
                </svg>
              </div>

              <span className="collection__filter__item__title">
                Fett<span></span>
              </span>
            </div>

            <div className="collection__filter__item js-item" data-value="grey">
              <div className="collection__filter__item__checkbox">
                <svg className="icon icon--checkmark-small" viewBox="0 0 12 12">
                  <path d="M3.543 11.2c-.457 0-.914-.229-1.257-.571L.114 7.657C-.114 7.43 0 6.857.343 6.63c.228-.229.8-.115 1.028.114L3.543 9.6l7.086-8.457c.228-.343.685-.343 1.028-.114.343.228.343.685.114 1.028L4.8 10.63c-.114 0-.114.114-.229.228-.342.229-.685.343-1.028.343z"></path>
                </svg>
              </div>

              <span className="collection__filter__item__title">
                Grått<span></span>
              </span>
            </div>

            <div
              className="collection__filter__item js-item"
              data-value="normal"
            >
              <div className="collection__filter__item__checkbox">
                <svg className="icon icon--checkmark-small" viewBox="0 0 12 12">
                  <path d="M3.543 11.2c-.457 0-.914-.229-1.257-.571L.114 7.657C-.114 7.43 0 6.857.343 6.63c.228-.229.8-.115 1.028.114L3.543 9.6l7.086-8.457c.228-.343.685-.343 1.028-.114.343.228.343.685.114 1.028L4.8 10.63c-.114 0-.114.114-.229.228-.342.229-.685.343-1.028.343z"></path>
                </svg>
              </div>

              <span className="collection__filter__item__title">
                Normalt<span></span>
              </span>
            </div>

            <div
              className="collection__filter__item js-item"
              data-value="thinning"
            >
              <div className="collection__filter__item__checkbox">
                <svg className="icon icon--checkmark-small" viewBox="0 0 12 12">
                  <path d="M3.543 11.2c-.457 0-.914-.229-1.257-.571L.114 7.657C-.114 7.43 0 6.857.343 6.63c.228-.229.8-.115 1.028.114L3.543 9.6l7.086-8.457c.228-.343.685-.343 1.028-.114.343.228.343.685.114 1.028L4.8 10.63c-.114 0-.114.114-.229.228-.342.229-.685.343-1.028.343z"></path>
                </svg>
              </div>

              <span className="collection__filter__item__title">
                Tunt<span></span>
              </span>
            </div>
          </div>
        </div>

        <div
          className="collection__filter__group js-groupContainer"
          data-name="series"
        >
          <p className="collection__filter__group__title js-filterTitle">
            <span>Serie</span>
            <SvgIconArrowDownSmall />
          </p>
          <div className="collection__filter__group__list js-seriesFilter js-group">
            <div
              className="collection__filter__item js-item"
              data-value="Split Fix™"
            >
              <div className="collection__filter__item__checkbox">
                <svg className="icon icon--checkmark-small" viewBox="0 0 12 12">
                  <path d="M3.543 11.2c-.457 0-.914-.229-1.257-.571L.114 7.657C-.114 7.43 0 6.857.343 6.63c.228-.229.8-.115 1.028.114L3.543 9.6l7.086-8.457c.228-.343.685-.343 1.028-.114.343.228.343.685.114 1.028L4.8 10.63c-.114 0-.114.114-.229.228-.342.229-.685.343-1.028.343z"></path>
                </svg>
              </div>

              <span className="collection__filter__item__title">
                Split Fix™<span></span>
              </span>
            </div>

            <div
              className="collection__filter__item js-item"
              data-value="Grow Perfect™"
            >
              <div className="collection__filter__item__checkbox">
                <svg className="icon icon--checkmark-small" viewBox="0 0 12 12">
                  <path d="M3.543 11.2c-.457 0-.914-.229-1.257-.571L.114 7.657C-.114 7.43 0 6.857.343 6.63c.228-.229.8-.115 1.028.114L3.543 9.6l7.086-8.457c.228-.343.685-.343 1.028-.114.343.228.343.685.114 1.028L4.8 10.63c-.114 0-.114.114-.229.228-.342.229-.685.343-1.028.343z"></path>
                </svg>
              </div>

              <span className="collection__filter__item__title">
                Grow Perfect™<span></span>
              </span>
            </div>

            <div
              className="collection__filter__item js-item"
              data-value="Curl Crush™"
            >
              <div className="collection__filter__item__checkbox">
                <svg className="icon icon--checkmark-small" viewBox="0 0 12 12">
                  <path d="M3.543 11.2c-.457 0-.914-.229-1.257-.571L.114 7.657C-.114 7.43 0 6.857.343 6.63c.228-.229.8-.115 1.028.114L3.543 9.6l7.086-8.457c.228-.343.685-.343 1.028-.114.343.228.343.685.114 1.028L4.8 10.63c-.114 0-.114.114-.229.228-.342.229-.685.343-1.028.343z"></path>
                </svg>
              </div>

              <span className="collection__filter__item__title">
                Curl Crush™<span></span>
              </span>
            </div>

            <div
              className="collection__filter__item js-item"
              data-value="Scalp Delight™"
            >
              <div className="collection__filter__item__checkbox">
                <svg className="icon icon--checkmark-small" viewBox="0 0 12 12">
                  <path d="M3.543 11.2c-.457 0-.914-.229-1.257-.571L.114 7.657C-.114 7.43 0 6.857.343 6.63c.228-.229.8-.115 1.028.114L3.543 9.6l7.086-8.457c.228-.343.685-.343 1.028-.114.343.228.343.685.114 1.028L4.8 10.63c-.114 0-.114.114-.229.228-.342.229-.685.343-1.028.343z"></path>
                </svg>
              </div>

              <span className="collection__filter__item__title">
                Scalp Delight™<span></span>
              </span>
            </div>

            <div
              className="collection__filter__item js-item"
              data-value="Enriched Blonde™"
            >
              <div className="collection__filter__item__checkbox">
                <svg className="icon icon--checkmark-small" viewBox="0 0 12 12">
                  <path d="M3.543 11.2c-.457 0-.914-.229-1.257-.571L.114 7.657C-.114 7.43 0 6.857.343 6.63c.228-.229.8-.115 1.028.114L3.543 9.6l7.086-8.457c.228-.343.685-.343 1.028-.114.343.228.343.685.114 1.028L4.8 10.63c-.114 0-.114.114-.229.228-.342.229-.685.343-1.028.343z"></path>
                </svg>
              </div>

              <span className="collection__filter__item__title">
                Enriched Blonde™<span></span>
              </span>
            </div>

            <div
              className="collection__filter__item js-item"
              data-value="Moisture Hero™"
            >
              <div className="collection__filter__item__checkbox">
                <svg className="icon icon--checkmark-small" viewBox="0 0 12 12">
                  <path d="M3.543 11.2c-.457 0-.914-.229-1.257-.571L.114 7.657C-.114 7.43 0 6.857.343 6.63c.228-.229.8-.115 1.028.114L3.543 9.6l7.086-8.457c.228-.343.685-.343 1.028-.114.343.228.343.685.114 1.028L4.8 10.63c-.114 0-.114.114-.229.228-.342.229-.685.343-1.028.343z"></path>
                </svg>
              </div>

              <span className="collection__filter__item__title">
                Moisture Hero™<span></span>
              </span>
            </div>

            <div
              className="collection__filter__item js-item"
              data-value="Wonder Beard™"
            >
              <div className="collection__filter__item__checkbox">
                <svg className="icon icon--checkmark-small" viewBox="0 0 12 12">
                  <path d="M3.543 11.2c-.457 0-.914-.229-1.257-.571L.114 7.657C-.114 7.43 0 6.857.343 6.63c.228-.229.8-.115 1.028.114L3.543 9.6l7.086-8.457c.228-.343.685-.343 1.028-.114.343.228.343.685.114 1.028L4.8 10.63c-.114 0-.114.114-.229.228-.342.229-.685.343-1.028.343z"></path>
                </svg>
              </div>

              <span className="collection__filter__item__title">
                Wonder Beard™<span></span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="collection__filter__buttons">
        <button
          type="button"
          className="cta cta--stroked-dark collection__filter__buttons__button js-filterClearBtn"
        >
          Rensa
        </button>
        <button
          type="button"
          className="cta cta--filled-dark collection__filter__buttons__button js-filterApplyBtn"
        >
          Använd
        </button>
      </div>
    </div>
  </div>
)
