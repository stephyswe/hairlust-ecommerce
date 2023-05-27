import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { ShopifyCollection } from '.'
import { ShopifyTrustPilot } from '@components/shared/trustpilot'
import { shopifyTrustPilotData } from '../../../pages/api/static/shopify/trustpilot'

interface LayoutProps {
  data: any
}

function useAddClassToBody() {
  useEffect(() => {
    document.body.classList.add('template-collection')
    document.body.id = 'root'
    return () => {
      document.body.classList.remove('template-collection')
      document.body.id = ''
    }
  }, [])
}

export const CollectionsLayout = ({ data }: LayoutProps) => {
  useAddClassToBody()
  const router = useRouter()

  return router.isFallback ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <ShopifyCollection data={data} />
      <ShopifyTrustPilot data={shopifyTrustPilotData} nodiv={true} />
    </>
  )
}
