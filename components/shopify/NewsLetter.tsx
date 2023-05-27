import { SvgIconArrowDownSmall } from '../icons'

export const ShopifyNewsLetter = () => (
  <div id="shopify-section-newsletter" className="shopify-section">
    <section
      className="newsletter section section--large pt--0"
      data-source="$footer"
      data-success-message="<p>Tack för din registrering!</p>"
    >
      <div className="newsletter__inner container">
        <NewsLetterArticle />

        <FormNewsletter>
          <FormAfterSubmitText />

          <div className="newsletter__form__fields">
            <input type="hidden" name="g" value="PzVYF4" />
            <input
              type="hidden"
              name="$fields"
              value="Accept Marketing,Gender"
            />

            <InputEmail />
            <InputHidden />
            <SelectWrapper>
              <Select />
            </SelectWrapper>
            <ButtonSubmit />
          </div>
          <FormDisclaimer />
        </FormNewsletter>
      </div>
    </section>
  </div>
)

const NewsLetterArticle = () => (
  <article className="newsletter__content">
    <p className="newsletter__content__title ff--canela title title--small">
      Gå med i vårt nyhetsbrev
    </p>
    <div className="newsletter__content__text">
      <p>
        Gör som 200.000 andra: Gå med i vårt nyhetsbrev för att få tips,
        inspiration och erbjudanden för resan mot ett mer hälsosamt hår.
      </p>
    </div>
  </article>
)

const FormNewsletter = ({ children }: any) => (
  <form
    className="newsletter__form klaviyo_gdrp_embed_PzVYF4 js-newsletterForm"
    action="//manage.kmail-lists.com/subscriptions/subscribe"
    data-ajax-submit="//manage.kmail-lists.com/ajax/subscriptions/subscribe"
    method="POST"
    target="_blank"
    noValidate={true}
  >
    {children}
  </form>
)

const FormAfterSubmitText = () => (
  <div className="newsletter__response klaviyo_messages">
    <div
      className="newsletter__response__message newsletter__response__message--success success_message"
      style={{ display: 'none' }}
    >
      <p>Tack för din registrering!</p>
    </div>
    <div
      className="newsletter__response__message newsletter__response__message--error error_message"
      style={{ display: 'none' }}
    ></div>
  </div>
)

const FormDisclaimer = () => (
  <div className="newsletter__disclaimer">
    <p>
      Vi behandlar dina upplysningar efter vår&nbsp;
      <a href="https://thehairlust.se/pages/data-policy">Integritetspolicy</a>,
      och du kan alltid avsluta prenumerationen igen.
    </p>
  </div>
)

const SelectWrapper = ({ children }: any) => (
  <div className="select-wrapper">
    {children}
    <SvgIconArrowDownSmall />
  </div>
)

const ButtonSubmit = () => (
  <button
    type="submit"
    className="cta cta--filled-dark is-disabled js-submitBtn"
    disabled={true}
  >
    Registrera
  </button>
)

const InputHidden = () => (
  <input type="hidden" name="Accept Marketing" value="true" />
)

const Select = () => (
  <select className="select js-select" name="Gender" required={true}>
    <option disabled={false} defaultValue="">
      Välj kön
    </option>
    <option value="Male">Man</option>
    <option value="Female">Kvinna</option>
    <option value="Other">Annat</option>

    <option value="Undefined">Önskar att inte specificera</option>
  </select>
)

const InputEmail = () => (
  <input
    type="email"
    name="email"
    id="k_id_email"
    className="newsletter__form__input text-input js-emailInput"
    placeholder="E-postadress"
    spellCheck="false"
    autoComplete="off"
    autoCapitalize="off"
    required={true}
  />
)
