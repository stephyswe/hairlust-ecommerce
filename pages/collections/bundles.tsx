import { Layout } from '@components/common'

import { CollectionsLayout } from '@components/shopify/collections/layout'
import { shopifyCollectionBundlesData } from '../api/static/pages/collections/all'

export default function Bundles() {
  return <CollectionsLayout data={shopifyCollectionBundlesData} />
}

Bundles.Layout = Layout
