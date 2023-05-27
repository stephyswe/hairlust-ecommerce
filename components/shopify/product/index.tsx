/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react'
import cn from 'clsx'
import {
  productArticleData,
  productFaqData,
  productIngredientsData,
} from '../../../pages/api/static/pages/product'
import { productUspItemsData } from '../../../pages/api/static/pages/product/usp'
import { ProductSectionContent } from './components/section-content'
import {
  SvgIconArrowDownSmall,
  SvgIconCart,
  SvgIconPackage,
  SvgLinkArrowRight,
} from '../../icons'
import { ProductFaq } from './components/faq'
import { ProductBeforeAfter } from './components/beforeafter'
import { productGuideData } from '../../../pages/api/static/pages/product/guide'
import { productContentData } from '../../../pages/api/static/pages/product/content'
import { ProductGuide } from './components/guide'
import { ProductIngredients } from './components/ingredients'
import { ProductSectionSelection } from './components/section-selection'
import { useModalDef } from '../../../config/contexts/modalDefProduct'
import { handleRating } from '../../../lib/get-rating'

export const ShopifySectionProductView = ({ product }: any) => (
  <div id="shopify-section-product" className="shopify-section">
    <div className="product">
      <ProductSectionContent {...productContentData} />
      <ProductSectionSelection />
      <ProductBadges />
      <ProductArticle {...productArticleData} />
      <ProductUsp {...productUspItemsData} />
      <ProductIngredients {...productIngredientsData} />
      <ProductGuide {...productGuideData} />
      <ProductBeforeAfter />
      <ProductFaq {...productFaqData} />
    </div>
  </div>
)

export const handleOpen = (isOpen: boolean) => {
  return isOpen ? 'is-open' : ''
}

export const ProductUspItem = ({ large, medium, text }: any) => (
  <li className="product__usp__item">
    <img
      src={large}
      className="product__usp__item__icon product__usp__item__icon--large"
    />
    <img
      src={medium}
      className="product__usp__item__icon product__usp__item__icon--medium"
    />
    <span className="product__usp__item__text">{text}</span>
  </li>
)

export const ProductUsp = ({ title, options }: any) => (
  <section className="product__usp section section--medium container product__content">
    <h2 className="product__usp__title title title--small">{title}</h2>
    <ul className="product__usp__list">
      {options.map((uspItem: any, index: any) => (
        <ProductUspItem key={index} {...uspItem} />
      ))}
    </ul>
  </section>
)

export const ProductArticle = ({ title, intro, description }: any) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <article className="product__description section section--medium container product__content">
      <h2 className="product__description__title title title--small">
        {title}
      </h2>

      <div className="product__description__content rte">
        <div className="product__description__content__intro">{intro}</div>
        <div
          className={cn(
            'product__description__content__bulk js-bulk',
            isOpen ? 'is-extended' : ''
          )}
        >
          {description}
        </div>
      </div>
      <button
        onClick={() => setOpen(!isOpen)}
        type="button"
        className={cn(
          'read-more-button js-toggleBtn',
          isOpen ? 'is-extended' : ''
        )}
      >
        <div
          className={cn(
            'icon icon--plus-minus icon--plus-minus--dark js-icon',
            handleOpen(isOpen)
          )}
        >
          <div className="icon--plus-minus__line"></div>
          <div className="icon--plus-minus__line"></div>
        </div>
        <span className="read-more-button__extend-text">Läs mer</span>
        <span className="read-more-button__shrink-text">Se mindre</span>
      </button>
    </article>
  )
}

export const ProductBadges = () => (
  <div className="product__badges product__content section section--medium container">
    <div className="product-badge product-badge--bar product-badge--save">
      Spara upp till 33%
    </div>
  </div>
)

export const ProductShipping = ({ title }: any) => {
  const { handleModalDefToggle } = useModalDef()
  return (
    <div
      className="product__shipping"
      onClick={() => handleModalDefToggle('shipping')}
    >
      <button type="button" className="product__shipping__button js-openBtn">
        <SvgIconPackage />
        <span className="product__shipping__button__text">{title}</span>
        <SvgLinkArrowRight />
      </button>
    </div>
  )
}

export const ProductFormCartAdd = () => {
  const [isOpenType, setOpenType] = useState('')
  const handleClick = (type: any) => setOpenType(type)
  return (
    <form
      method="post"
      action="/cart/add"
      id="product_form_6597435261065"
      acceptCharset="UTF-8"
      className="product__form"
      encType="multipart/form-data"
    >
      <input type="hidden" name="form_type" value="product" />
      <input type="hidden" name="utf8" value="✓" />
      <ProductOptions>
        <ProductVariantHiddenSelect />
        <ProductFieldSet
          type="oneTime"
          handleClick={handleClick}
          isOpenType={isOpenType}
        >
          <ProductLabel
            title="Engångsköp"
            price={349}
            type="oneTime"
            isOpenType={isOpenType}
          />
          <ProductSelect title="Välj antal" />
        </ProductFieldSet>
        <ProductFieldSet
          type="subscription"
          handleClick={handleClick}
          isOpenType={isOpenType}
        >
          <ProductLabel
            type="subscription"
            isOpenType={isOpenType}
            title="Prenumeration"
            price={314}
            badges={
              <div className="save-badge-wrapper">
                <span className="save-badge">Spara 10%</span>
              </div>
            }
            info={
              <div className="options__subscription-info">
                <span>Ingen bindningstid, avsluta när som helst.</span>
                <button
                  type="button"
                  className="options__subscription-info__btn js-openBtn"
                >
                  Se mer
                </button>
              </div>
            }
          />
          <ProductSelect title="Välj antal" />
          <ProductSelect title="Välj hur ofta" />
        </ProductFieldSet>
      </ProductOptions>
      <ProductButtonSubmit />
    </form>
  )
}

export const ProductFieldSet = ({
  type,
  children,
  handleClick,
  isOpenType,
}: any) => {
  return (
    <div
      onClick={() => handleClick(type)}
      className={cn(
        'options__fieldset js-fieldset',
        isOpenType === type ? 'is-active' : ''
      )}
    >
      {children}
    </div>
  )
}

export const ProductButtonSubmit = () => (
  <button
    type="submit"
    className="product__submit-button product__form__submit-button js-desktopSubmitBtn cta cta--filled-dark js-submitBtn"
    data-preorder="false"
    data-direct-submit=""
  >
    <SvgIconCart />
    <span className="product__submit-button__text js-textEl">
      Lägg till i kundvagn
    </span>
  </button>
)

export const ProductLabel = ({
  badges,
  info,
  price,
  title,
  type,
  isOpenType,
}: any) => (
  <label htmlFor="single" className="options__fieldset-selector">
    <input
      type="radio"
      name="single-or-subscription"
      id="single"
      className="radio js-fieldsetRadio"
      data-ui-type="fieldsetRadio"
      data-ui-id="oneTime"
      defaultChecked={type === isOpenType}
    />

    <span>{title}</span>
    {badges}

    <div className="options__fieldset-price js-fieldsetPrice">
      <span className="price--current">Från {price} kr</span>
    </div>
    {info}
  </label>
)

export const ProductSelect = ({ title }: any) => (
  <div
    className="options__select-component js-selectComponent"
    data-settled="false"
  >
    <div className="select-wrapper">
      <select
        className="select js-select"
        data-target="option"
        data-option="option1"
      >
        <option value="" disabled={true} defaultValue="">
          {title}
        </option>
        <option value="1 månad (1 förpackning á 90 gummies)">
          1 månad (1 förpackning á 90 gummies)
        </option>
        <option value="3 månader (3 förpackningar á 90 gummies)">
          3 månader (3 förpackningar á 90 gummies)
        </option>
      </select>
      <SvgIconArrowDownSmall />
      <div className="options__dropdown-trigger js-dropdownTrigger"></div>
    </div>
    <div className="options__dropdown options__dropdown--bottom js-dropdown">
      <div
        className="options__dropdown-item js-dropdownItem"
        data-ui-type="dropdownItem"
        data-ui-id="oneTimeOption1—1"
        data-value="1 månad (1 förpackning á 90 gummies)"
      >
        <p className="options__dropdown-item__value">
          1 månad (1 förpackning á 90 gummies)
        </p>
        <p className="options__dropdown-item__prices">
          <span className="price--current">349 kr</span>
        </p>
      </div>
      <div
        className="options__dropdown-item js-dropdownItem"
        data-ui-type="dropdownItem"
        data-ui-id="oneTimeOption1—2"
        data-value="3 månader (3 förpackningar á 90 gummies)"
      >
        <p className="options__dropdown-item__value">
          3 månader (3 förpackningar á 90 gummies)
        </p>
        <p className="options__dropdown-item__prices">
          <span className="price--compare">1.047 kr</span>
          <span className="price--current">701 kr</span>
        </p>
      </div>
    </div>
  </div>
)

export const ProductVariantHiddenSelect = () => (
  <select className="js-variantSelect" hidden={true}>
    <option value="39414837149833">1 månad (1 förpackning á 90 gummies)</option>
    <option value="39414837182601">
      3 månader (3 förpackningar á 90 gummies)
    </option>
  </select>
)

export const ProductOptions = ({ children }: any) => (
  <div
    className="options"
    data-config='{
    "context":"desktop",
    "lockSubscriptionFrequency":true,
    "singleOption":true,
    "subscriptionDiscountVal":10
  }'
  >
    {children}
  </div>
)

export const ProductDescription = () => (
  <article className="product__short-description rte">
    <span className="product__short-description__text">
      <p>
        Sockerfria vitaminer till håret för kvinnor, med naturlig smak av
        jordgubbar.
      </p>
    </span>
    <button
      type="button"
      className="product__short-description__more-button js-moreBtn"
    >
      Läs mer
    </button>
  </article>
)

export const ProductTrustPilot = () => (
  <div className="product__selection__trustpilot">
    <div className="trustpilot trustpilot--row">
      <div className="trustpilot__stars">{handleRating(4.4)}</div>
      <div className="trustpilot__summary">
        <span className="trustpilot__summary__out-of">4.4 av 5</span>
        <button
          type="button"
          className="trustpilot__summary__reviews js-openBtn"
        >
          8.000+ recensioner
        </button>
      </div>
    </div>
  </div>
)
