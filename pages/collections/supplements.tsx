import { Layout } from '@components/common'

import { CollectionsLayout } from '@components/shopify/collections/layout'
import { shopifyCollectionSupplementsData } from '../api/static/pages/collections/all'

export default function Supplements() {
  return <CollectionsLayout data={shopifyCollectionSupplementsData} />
}

Supplements.Layout = Layout
