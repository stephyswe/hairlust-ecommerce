import { Layout } from '@components/common'

import { CollectionsLayout } from '@components/shopify/collections/layout'
import { shopifyCollectionGiftCardData } from '../api/static/pages/collections/all'

export default function GiftCard() {
  return <CollectionsLayout data={shopifyCollectionGiftCardData} />
}

GiftCard.Layout = Layout
