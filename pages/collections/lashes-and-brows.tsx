import { Layout } from '@components/common'

import { CollectionsLayout } from '@components/shopify/collections/layout'
import { shopifyCollectionLashesAndBrowsData } from '../api/static/pages/collections/all'

export default function LashesAndBrows() {
  return <CollectionsLayout data={shopifyCollectionLashesAndBrowsData} />
}

LashesAndBrows.Layout = Layout
