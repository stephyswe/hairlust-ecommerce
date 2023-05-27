import { useRouter } from 'next/router'
import { Layout } from '../../components/common'
import { productPopularItems } from '../api/static/shopify/products/popular/items'
import { useState } from 'react'
import { ShopifySectionProductView } from '../../components/shopify/product'

export default function Slug() {
  const router = useRouter()
  const [item, setItem] = useState(
    productPopularItems.filter(
      (item: any) => item.slug === router.query.slug
    )[0]
  )

  return router.isFallback ? (
    <h1>Loading...</h1>
  ) : (
    <ShopifySectionProductView product={item} />
  )
}

Slug.Layout = Layout
