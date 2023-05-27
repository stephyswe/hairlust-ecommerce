import { ImageRender } from '../../../ui/Image/Image'

export const BlogListItem = ({
  data: { title, href, transform, blogProps },
}: any) => {
  const buttonTitle = 'Läs mer'
  blogProps.className = 'lazyautosizes ls-is-cached lazyloaded'
  return (
    <li
      className="blog-slider__slide keen-slider__slide"
      style={{
        minWidth: 'calc(33.3333% - 20px)',
        maxWidth: 'calc(33.3333% - 20px)',
        transform: transform,
      }}
    >
      <div className="article-item">
        <figure className="article-item__image">
          <ImageRender maxWidth="720" props={blogProps} />
          <div className="article-item__image__overlay"></div>
        </figure>

        <h3 className="article-item__title">{title}</h3>

        <a href={href} title={title} className="cta cta--stroked-light">
          {buttonTitle}
        </a>
        <a href={href} className="article-item__link"></a>
      </div>
    </li>
  )
}
