import { SelectionFeatureBlock } from './item'

export const ShopifySelection = ({ data }: any) => (
  <div id="shopify-section-1607593202f74fc79e" className="shopify-section">
    <section className="feature-blocks section section--large pt--0 pb--0">
      <div className="feature-blocks__inner container">
        <SelectionFeatureBlock data={data.women} />
        <SelectionFeatureBlock data={data.men} />
      </div>
    </section>
  </div>
)
