import {
  ProductDescription,
  ProductFormCartAdd,
  ProductShipping,
  ProductTrustPilot,
} from '..'

export const ProductSectionSelection = () => (
  <section className="product__selection section section--small container">
    <div
      className="product__selection__inner"
      //data-selection-inner
      style={{ top: '100px' }}
    >
      <h1 className="product__title title title--small">
        Hair Formula Gummies for Women
      </h1>
      <ProductTrustPilot />
      <ProductDescription />
      <ProductFormCartAdd />
      <ProductShipping title="Frakt (gratis över 499,-)" />
    </div>
  </section>
)
