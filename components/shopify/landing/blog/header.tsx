export const ShopifyBlogHeader = ({ data: { title, subtitle } }: any) => (
  <header className="blog-slider__header blog-slider__header--light">
    <h2 className="blog-slider__header__title title title--large">{title}</h2>
    <div className="blog-slider__header__text">
      <p>{subtitle}</p>
    </div>
  </header>
)
