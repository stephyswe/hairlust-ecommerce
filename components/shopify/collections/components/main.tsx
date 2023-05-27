import { ShopifyProductCard } from '../../../shared/card/productcard'
import { CollectionMobileTopBar } from './all/mobileTopBar'
import { CollectionNavWrapper } from './all/navWrapper'
import { CollectionNoResults, CollectionProductViewed } from './all/products'
import { CollectionTopBar } from './all/topBar'

export const CollectionMain = ({ data, filterToggle }: any) => (
  <div className="collection__main section section--small">
    <div className="collection__main__inner container">
      <CollectionMobileTopBar />
      <CollectionNavWrapper {...data.navWrapper} />
      <div className="collection__products">
        <CollectionTopBar {...data.topBar} filterToggle={filterToggle} />
        <CollectionNoResults />
        <ul className="collection__products__list grid js-output">
          {data.items.map((item: any, index: number) => (
            <li key={index} className="collection__products__item grid__item">
              <ShopifyProductCard {...item} />
            </li>
          ))}
        </ul>
        <CollectionProductViewed
          {...data.productViewed}
          productLength={data.items.length}
        />
      </div>
    </div>
  </div>
)
