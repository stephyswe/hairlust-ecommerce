import { UspDesktop, UsbMobile } from './item'

export const ShopifyUsp = ({ data }: any) => (
  <div id="shopify-section-16075060258d9a288c" className="shopify-section">
    <section className="usp section section--small">
      <UspDesktop data={data} />
      <div className="usp__inner usp__inner--mobile container js-listWrapper">
        <UsbMobile data={data} />
        <UsbMobile data={data} />
      </div>
    </section>
  </div>
)
