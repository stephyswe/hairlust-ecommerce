/* eslint-disable @next/next/no-img-element */
import { ReviewContainer } from './container'
import { ReviewHeader } from './header'
import { ReviewMobile } from './mobile'
import { ReviewReferences } from './references'



export const ShopifyReview = ({ data: { title, references } }: any) => (
  <div
    id="shopify-section-1607695986877e4d5b"
    className="shopify-section"
    style={{
      backgroundColor: '#b7cdc2',
    }}
  >
    <section className="references section section--large" data-color="#b7cdc2">
      <div className="references__component" data-vendor="keenSlider">
        <ReviewHeader title={title} />
        <ReviewContainer />
        <ReviewMobile />
        <ReviewReferences {...references} />
      </div>
    </section>
  </div>
)
