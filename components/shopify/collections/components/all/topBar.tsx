import { SvgIconArrowDownSmall } from '../../../../icons'
import { ButtonFilter, CollectionButtonFilter } from './common/button'

export const CollectionFilterSelect = () => (
  <div className="collection__sorting select-wrapper">
    <select className="select js-sorting js-group js-item">
      <option value="featured">Utvalda</option>
      <option value="price-ascending">Pris, lågt-högt</option>
      <option value="price-descending">Pris, högt-lågt</option>
    </select>
    <SvgIconArrowDownSmall />
  </div>
)

export const CollectionTopBar = ({
  productsFound,
  options,
  title,
  filterToggle,
}: any) => (
  <div className="collection__topbar" data-topbar-desktop="">
    <p className="collection__topbar__products-found js-productsFound">
      {productsFound}
    </p>

    <div className="collection__filter-buttons">
      <p className="collection__filter-buttons__title">{title}</p>
      <ul className="collection__filter-buttons__list js-filterBtnList">
        {options.map((item: any, index: number) => (
          <ButtonFilter key={index} {...item} filterToggle={filterToggle} />
        ))}
      </ul>
    </div>
    <CollectionFilterSelect />
    <CollectionButtonFilter title="Filter" filterToggle={filterToggle} />
  </div>
)
