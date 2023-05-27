import { Layout } from '@components/common'

import { CollectionsLayout } from '@components/shopify/collections/layout'
import { shopifyCollectionBeddingData } from '../api/static/pages/collections/all'

export default function Bedding() {
  return <CollectionsLayout data={shopifyCollectionBeddingData} />
}

Bedding.Layout = Layout
