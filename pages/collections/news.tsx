import { Layout } from '@components/common'

import { CollectionsLayout } from '@components/shopify/collections/layout'
import { shopifyCollectionNewsData } from '../api/static/pages/collections/all'

export default function News() {
  return <CollectionsLayout data={shopifyCollectionNewsData} />
}

News.Layout = Layout
