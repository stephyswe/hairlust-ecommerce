import { Layout } from '@components/common'

import { CollectionsLayout } from '@components/shopify/collections/layout'
import { shopifyCollectionScalpCareData } from '../api/static/pages/collections/all'

export default function ScalpCare() {
  return <CollectionsLayout data={shopifyCollectionScalpCareData} />
}

ScalpCare.Layout = Layout
