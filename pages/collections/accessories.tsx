import { Layout } from '@components/common'

import { CollectionsLayout } from '@components/shopify/collections/layout'
import { shopifyCollectionAccessoriesData } from '../api/static/pages/collections/all'

export default function Accessories() {
  return <CollectionsLayout data={shopifyCollectionAccessoriesData} />
}

Accessories.Layout = Layout
