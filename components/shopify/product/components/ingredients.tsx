import { useModalDef } from '../../../../config/contexts/modalDefProduct'
import { ProductStaticImage } from '../../../ui/Image/Image'
import { SvgIconArrowDown } from '../../../icons'
import { ProductIngredientItem } from './common/items'

export const ProductIngredients = ({
  title,
  srcSet,
  modalText,
  options,
}: any) => {
  const { handleModalDefToggle } = useModalDef()
  return (
    <section className="product__ingredients section section--medium container product__content">
      <div
        className="product__ingredients__inner is-initialized"
        data-tags='["ing_bambusa","ing_biotin","ing_folic_acid","ing_iodine","ing_pantotensyre","ing_pantothensyre","ing_vitamin_a","ing_vitamin_b12","ing_vitamin_b6","ing_vitamin_c","ing_vitamin_d","ing_vitamin_e","ing_zinc"]'
      >
        <figure className="product__ingredients__image product__ingredients__image--desktop-hidden">
          <div className="image-wrapper">
            <ProductStaticImage srcSet={srcSet} />
          </div>
        </figure>

        <article className="product__ingredients__content product__ingredients__content--desktop-columns">
          <h2 className="product__ingredients__title title title--small">
            {title}
          </h2>

          <ul className="product__ingredients__list harmonica__list product__ingredients__list--desktop-columns js-list">
            {options.map((ingredient: any, index: any) => (
              <ProductIngredientItem key={index} {...ingredient} />
            ))}
          </ul>

          <button
            onClick={() => handleModalDefToggle('ingredients')}
            type="button"
            className="product__ingredients__modal-button js-openBtn"
          >
            <span className="product__ingredients__modal-button__text">
              {modalText}
            </span>
            <SvgIconArrowDown />
          </button>
        </article>
      </div>
    </section>
  )
}
