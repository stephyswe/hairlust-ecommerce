import { ProductStaticImage } from '../../../../ui/Image/Image'

export const ProductFaqImage = ({ image }: any) => (
  <figure className="product__faq__image">
    <div className="image-wrapper">
      <ProductStaticImage srcSet={image} />
    </div>
  </figure>
)
