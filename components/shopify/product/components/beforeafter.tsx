import { handleRating } from '@lib/get-rating'
import { SvgIconArrowLeftLarge, SvgIconArrowRightLarge } from '../../../icons'

export const ProductBeforeAfterReviewUser = ({ title, quote }: any) => (
  <article className="before-after__content-container js-contentContainer">
    <div
      className="before-after__content-item js-contentItem is-active"
      data-index="31"
    >
      <p className="before-after__content-item__title">{title}</p>
      <p className="before-after__content-item__quote">{quote}</p>

      <div className="trustpilot">
        <div className="trustpilot__stars">{handleRating(5)}</div>

        <div className="trustpilot__customer">
          <img
            src="//cdn.shopify.com/s/files/1/2199/8485/t/42/assets/trustpilot_logo.svg?v=72614220296505008211671454105"
            data-src="//cdn.shopify.com/s/files/1/2199/8485/t/42/assets/trustpilot_logo.svg?v=72614220296505008211671454105"
            className="trustpilot__branding__logo ls-is-cached lazyloaded"
            alt="Hairlust reviews"
          />
        </div>
      </div>

      <div className="before-after__content-item__product">
        <figure className="before-after__content-item__product__image">
          <img
            src="//cdn.shopify.com/s/files/1/2199/8485/products/1_8ee8265f-aa30-4269-94cc-86fcadfe68c9_80x.jpg?v=1673861527"
            data-src="//cdn.shopify.com/s/files/1/2199/8485/products/1_8ee8265f-aa30-4269-94cc-86fcadfe68c9_80x.jpg?v=1673861527"
            className=" ls-is-cached lazyloaded"
          />

          <a
            href="/products/hair-formula-gummies-for-women"
            className="before-after__content-item__image-link"
          ></a>
        </figure>

        <figure className="before-after__content-item__product__image">
          <img
            src="//cdn.shopify.com/s/files/1/2199/8485/products/MoistureHero-Pre-ShampooBalm_Vinkel1kopier_df54c8f1-000c-4cdc-9a85-6d2767f835db_80x.jpg?v=1663863953"
            data-src="//cdn.shopify.com/s/files/1/2199/8485/products/MoistureHero-Pre-ShampooBalm_Vinkel1kopier_df54c8f1-000c-4cdc-9a85-6d2767f835db_80x.jpg?v=1663863953"
            className=" ls-is-cached lazyloaded"
          />
          <div className="icon icon--plus-minus icon--plus-minus--dark ">
            <div className="icon--plus-minus__line"></div>
            <div className="icon--plus-minus__line"></div>
          </div>

          <button type="button" className="js-openBtn"></button>
        </figure>

        <div className="before-after__content-item__product__text">
          <p>
            Har använt&nbsp;
            <button type="button" className="js-openBtn">
              4 produkter
            </button>
            &nbsp;i 4 månader
          </p>
          <button type="button" className="js-openBtn">
            Se alla produkter
          </button>
        </div>
      </div>

      <p className="before-after__content-item__disclaimer">
        *Resultaten kan variera från person till person.
      </p>
    </div>
  </article>
)

export const ProductBeforeAfterKeenSlider = () => (
  <div
    className="before-after__image-slider js-sliderEl keen-slider is-initialized"
    data-vendor="keenSlider"
  >
    <figure
      className="before-after__image-slider__slide js-slide keen-slider__slide"
      style={{
        minWidth: 'calc(66.6667% - 0px)',
        maxWidth: 'calc(66.6667% - 0px)',
        transform: 'translate3d(445px, 0px, 0px)',
      }}
    >
      <div className="image-wrapper">
        <img
          src="//cdn.shopify.com/s/files/1/2199/8485/articles/LisaSalberg-3mo_1002_c2d6f7c2-b129-4d4e-bbcc-9ba5d69b6b2a_1512x.jpg?v=1663934137"
          data-src="//cdn.shopify.com/s/files/1/2199/8485/articles/LisaSalberg-3mo_1002_c2d6f7c2-b129-4d4e-bbcc-9ba5d69b6b2a_1512x.jpg?v=1663934137"
          className=" ls-is-cached lazyloaded"
        />

        <div className="image-badge image-badge--left">Före</div>
        <div className="image-badge image-badge--right">Nuvarande resultat</div>
      </div>
    </figure>
    <figure
      className="before-after__image-slider__slide js-slide keen-slider__slide"
      style={{
        minWidth: 'calc(66.6667% - 0px)',
        maxWidth: 'calc(66.6667% - 0px)',
        transform: 'translate3d(-700px, 0px, 0px)',
      }}
    >
      <div className="image-wrapper">
        <img
          src="//cdn.shopify.com/s/files/1/2199/8485/articles/26_Woman_BeforeAfter_52796f62-8df2-47cc-b4a8-e8b6ebad6a12_1512x.jpg?v=1663934240"
          data-src="//cdn.shopify.com/s/files/1/2199/8485/articles/26_Woman_BeforeAfter_52796f62-8df2-47cc-b4a8-e8b6ebad6a12_1512x.jpg?v=1663934240"
          className=" lazyloaded"
        />

        <div className="image-badge image-badge--left">Före</div>
        <div className="image-badge image-badge--right">Nuvarande resultat</div>
      </div>
    </figure>
    <figure
      className="before-after__image-slider__slide js-slide keen-slider__slide is-active"
      style={{
        minWidth: 'calc(66.6667% - 0px)',
        maxWidth: 'calc(66.6667% - 0px)',
        transform: 'translate3d(-725px, 0px, 0px)',
      }}
    >
      <div className="image-wrapper">
        <img
          src="//cdn.shopify.com/s/files/1/2199/8485/articles/Liisa_Helea_HL2002HL2003HL1002HL2004HL2017HL2008_4mo_4216e120-adb0-4beb-8132-3cd531466277_1512x.jpg?v=1663934139"
          data-src="//cdn.shopify.com/s/files/1/2199/8485/articles/Liisa_Helea_HL2002HL2003HL1002HL2004HL2017HL2008_4mo_4216e120-adb0-4beb-8132-3cd531466277_1512x.jpg?v=1663934139"
          className=" ls-is-cached lazyloaded"
        />

        <div className="image-badge image-badge--left">Före</div>
        <div className="image-badge image-badge--right">Nuvarande resultat</div>
      </div>
    </figure>
  </div>
)

export const ProductBeforeAfterUser = () => (
  <div className="before-after__user">
    <a href="" className="before-after__link"></a>

    <button
      type="button"
      className="before-after__nav before-after__nav--prev arrow-button js-prev"
    >
      <SvgIconArrowLeftLarge />
    </button>

    <button
      type="button"
      className="before-after__nav before-after__nav--next arrow-button js-next"
    >
      <SvgIconArrowRightLarge />
    </button>
  </div>
)

export const ProductBeforeAfter = () => (
  <section
    className="before-after section section--medium container product__content"
    data-handle="hair-formula-gummies-for-women"
    data-title="Hair Formula Gummies for Women"
  >
    <header className="before-after__header">
      <h2 className="title title--small">Resultat från kunder</h2>
      <ProductBeforeAfterUser />
    </header>
    <div className="before-after__content">
      <ProductBeforeAfterKeenSlider />
      <ProductBeforeAfterReviewUser
        title="Anonym"
        quote={`"Mitt hår är friskare än någonsin. Det har blivit starkare, vuxit mycket
        och känns mjukare och glansigare."`}
      />
    </div>
  </section>
)
