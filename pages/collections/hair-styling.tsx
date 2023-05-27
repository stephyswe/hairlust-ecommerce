import { Layout } from '@components/common'

import { CollectionsLayout } from '@components/shopify/collections/layout'
import { shopifyCollectionHairStylingData } from '../api/static/pages/collections/all'

export default function HairStyling() {
  return <CollectionsLayout data={shopifyCollectionHairStylingData} />
}

HairStyling.Layout = Layout
