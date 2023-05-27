import { Layout } from '@components/common'

import { CollectionsLayout } from '@components/shopify/collections/layout'
import { shopifyCollectionHairCareData } from '../api/static/pages/collections/all'

export default function HairCare() {
  return <CollectionsLayout data={shopifyCollectionHairCareData} />
}

HairCare.Layout = Layout
