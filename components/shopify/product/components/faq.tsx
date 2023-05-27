import { ProductFaqImage } from './common/images'
import { ProductFaqItem } from './common/items'

export const ProductFaq = ({ title, image, options }: any) => (
  <div className="product__faq section section--medium container product__content">
    <ProductFaqImage image={image} />
    <div className="product__faq__content">
      <h2 className="title title--small">{title}</h2>
      <ul className="product__faq__list harmonica__list">
        {options.map((item: any, index: boolean) => (
          <ProductFaqItem key={index} {...item} />
        ))}
      </ul>
    </div>
  </div>
)
