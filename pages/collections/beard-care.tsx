import { Layout } from '@components/common'

import { CollectionsLayout } from '@components/shopify/collections/layout'
import { shopifyCollectionBeardCareData } from '../api/static/pages/collections/all'

export default function BeardCare() {
  return <CollectionsLayout data={shopifyCollectionBeardCareData} />
}

BeardCare.Layout = Layout
