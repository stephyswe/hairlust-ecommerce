import { MutableRefObject, useRef, useState } from 'react'
import { useClickAway } from 'react-use'

import { CollectionFilterElement } from './components/all/filter'
import { CollectionHeader } from './components/all/header'
import { handleHtmlBodyOverFlow } from '../../common/Layout/Layout'
import { CollectionMain } from './components/main'
import { CollectionArticle } from './components/all/article'

export const ShopifyCollection = ({ data }: any) => {
  const [filterOpen, setFilterOpen] = useState(false)

  const filterToggle = () => {
    handleHtmlBodyOverFlow(filterOpen)
    setFilterOpen(!filterOpen)
  }

  const componentRef = useRef(null)

  useClickAway(componentRef, () => {
    if (!filterOpen) return
    filterToggle()
  })

  return (
    <div id="shopify-section-collection" className="shopify-section">
      <div
        className="collection"
        data-config="{'handle': 'all', 'productCount': 85, 'defaultSort': 'manual', 'pageSize': 72 }"
      >
        <CollectionHeader {...data.header} />
        <CollectionMain data={data} filterToggle={filterToggle} />
        <CollectionFilterElement
          filterToggle={filterToggle}
          filterOpen={filterOpen}
          filterRef={componentRef as MutableRefObject<null>}
        />
        {data.articles.length > 0 && <CollectionArticle data={data.articles} />}
      </div>
    </div>
  )
}
