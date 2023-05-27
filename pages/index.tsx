import { Layout } from '@components/common'
import { ShopifyTrustPilot } from '@components/shared/trustpilot'
import {
  ShopifyHero,
  ShopifyUsp,
  ShopifySelection,
  ShopifyReview,
  ShopifySingleVideo,
  ShopifyBlogSlider,
} from '@components/shopify/landing'
import { ShopifySlider } from '@components/ui/'

import { LandingData } from './api/static/pages/landing'

const {
  heroData,
  uspData,
  productPopularData,
  shopifyTrustPilotData,
  selectionData,
  productNewData,
  reviewData,
  singleVideoData,
  blogData,
} = LandingData

export default function Home() {
  return (
    <>
      <ShopifyHero data={heroData} />
      <ShopifyUsp data={uspData} />
      <ShopifySlider
        id="shopify-section-16075159443a58a930"
        data={productPopularData}
      />
      <ShopifyTrustPilot
        id="shopify-section-1609838988a09fa53e"
        nodiv={false}
        data={shopifyTrustPilotData}
      />
      <ShopifySelection data={selectionData} />
      <ShopifySlider
        id="shopify-section-1607590589f72663b3"
        data={productNewData}
      />
      <ShopifyReview data={reviewData} />
      <ShopifySingleVideo data={singleVideoData} />
      <ShopifyBlogSlider data={blogData} />
    </>
  )
}

Home.Layout = Layout
