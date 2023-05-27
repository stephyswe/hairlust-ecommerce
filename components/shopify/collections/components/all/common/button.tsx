import { SvgIconArrowDownSmall, SvgIconSettings } from '../../../../../icons'

export const CollectionButtonFilter = ({ title, filterToggle }: any) => (
  <button
    onClick={() => filterToggle()}
    type="button"
    className="collection__mobile-filter-button js-mobileFilterBtn"
  >
    <span>{title}</span>
    <SvgIconSettings />
  </button>
)

export const ButtonFilter = ({ filterToggle, title, dataName }: any) => (
  <button
    onClick={() => filterToggle()}
    type="button"
    className="collection__filter-buttons__item select-wrapper js-filterBtn"
    data-name={dataName}
  >
    <div className="select">{title}</div>
    <SvgIconArrowDownSmall />
  </button>
)

export const ButtonProductViewMore = ({ buttonText }: any) => (
  <button
    type="button"
    className="collection__progress__more-button cta cta--stroked-dark js-moreBtn"
  >
    {buttonText}
  </button>
)
