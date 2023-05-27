import { ContentDisplay } from '../../../../common/Layout/ModalParts'

export const CollectionArticle = ({ data }: any) => (
  <article className="collection__seo container">
    <div className="collection__seo__inner section section--large rte">
      <ContentDisplay content={data} />
    </div>
  </article>
)
