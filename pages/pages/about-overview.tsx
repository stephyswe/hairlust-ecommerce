import { Layout } from '@components/common'
import { ShopifyAboutOverview } from '../../components/shopify/about/overview'
import { aboutOverviewData } from '../api/static/pages/about/overview'

export default function AboutOverview() {
  return <ShopifyAboutOverview {...aboutOverviewData} />
}

AboutOverview.Layout = Layout
