import { Layout } from '@components/common'

import { CollectionsLayout } from '@components/shopify/collections/layout'
import { shopifyCollectionAllData } from '../api/static/pages/collections/all'

export default function All() {
  return <CollectionsLayout data={shopifyCollectionAllData} />
}

All.Layout = Layout
