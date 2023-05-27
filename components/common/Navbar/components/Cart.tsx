import {
  SvgIconCart,
  SvgIconCheckmark,
  SvgIconInfoSmall,
  SvgIconSmiley,
} from '../../../icons'
import { handleRating } from '@lib/get-rating'
import { TrustPilotSummary } from '@components/shared/trustpilot'
import { ButtonModalClose } from '../../Layout/ModalParts'
import { dataCartPaymentIcons } from '../../../../pages/api/static/navbar/cart'

export const NavCart = ({ onClick }: any) => (
  <button
    onClick={() => onClick()}
    className="header__item header__cart js-cartToggle"
  >
    <div className="header__item__icon-wrapper header__cart__icon">
      <SvgIconCart />
      <span className="header__cart__count">0</span>
    </div>
    <span className="header__item__text">Kundvagn</span>
  </button>
)

export const CartMenuCrossSell = () => {
  return (
    <div className="cross-sell">
      <header className="cross-sell__header">
        Du kanske är intresserad av
      </header>

      <div className="cross-sell__list-wrapper js-crossSellListWrapper">
        <ul className="cross-sell__list grid js-list"></ul>
      </div>
    </div>
  )
}

export const CartShippingBar = () => (
  <div className="cart__shipping-progress__bar">
    <div
      className="cart__shipping-progress__bar__fill"
      data-shipping-progress-fill=""
      style={{ width: '0%' }}
    ></div>
  </div>
)

export const CartShippingProgress = () => (
  <div className="cart__shipping-progress__info">
    <div className="tooltip tooltip--left" data-component="tooltip">
      <SvgIconInfoSmall />
      <div className="tooltip__popup">
        Fri frakt gäller endast med DHL postombud i Sverige.
      </div>
    </div>
    <span
      className="cart__shipping-progress__text"
      data-shipping-progress-text=""
    >
      Köp för 499 kr mer och få fri frakt.
    </span>
    <SvgIconCheckmark />
  </div>
)

export const CartEmpty = () => (
  <div className="cart__empty ">
    <div className="cart__empty__content">
      <SvgIconSmiley />
      <p className="cart__empty__text">Din kundvagn är tom</p>
    </div>

    <div className="cart__empty__bottom" data-state="empty">
      <a href="/" className="cart__continue-button cta cta--stroked-dark">
        Fortsätt handla
      </a>
      <CartPaymentIcons />
    </div>
  </div>
)

const CartSectionSummary = () => (
  <section className="cart__summary">
    <ul className="cart__summary__list">
      <li className="cart__summary__item">
        <span>Du sparar</span>
        <span data-discount-output="">0 kr</span>
      </li>

      <li className="cart__summary__item">
        <span>Frakt</span>
        <span className="cart__summary__shipping-calculated">
          Beräknas i nästa steg
        </span>
        <div className="cart__summary__shipping-free">
          <div className="tooltip tooltip--right" data-component="tooltip">
            <svg className="icon icon--info_small" viewBox="0 0 16 16">
              <path d="M8 16c-4.457 0-8-3.543-8-8s3.543-8 8-8 8 3.543 8 8-3.543 8-8 8zM8 1.486C4.343 1.486 1.486 4.343 1.486 8S4.457 14.514 8 14.514 14.514 11.543 14.514 8 11.657 1.486 8 1.486z"></path>
              <path d="M8 8.229c-.457 0-.686-.343-.686-.686V4.114c0-.457.343-.685.686-.685s.686.342.686.685V7.43c0 .457-.229.8-.686.8zM8 12.114a1.268 1.268 0 01-1.257-1.257c0-.686.571-1.257 1.257-1.257s1.257.571 1.257 1.257c0 .686-.571 1.257-1.257 1.257zm0-1.485a.246.246 0 00-.229.228c0 .229.343.229.343 0 .115-.114 0-.228-.114-.228z"></path>
            </svg>
            <div className="tooltip__popup">
              Fri frakt gäller endast med DHL postombud i Sverige.
            </div>
          </div>
          <span>Gratis</span>
        </div>
      </li>

      <li className="cart__summary__item__small">
        Presentkort och rabatter kan lösas in i nästa steg
      </li>
    </ul>
    <div className="cart__trust cart__trust--filled">
      <div className="trustpilot trustpilot--row">
        <div className="trustpilot__stars">
          <svg className="trustpilot__stars__item" viewBox="0 0 30 30">
            <path
              d="M28 30H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h26c1.1 0 2 .9 2 2v26c0 1.1-.9 2-2 2z"
              fill="#579f78"
            ></path>
            <path
              d="M24.4 12.7c-.2-.5-.6-.9-1.1-1l-4.9-.7-2.1-4.3c-.4-.7-1.3-.9-2-.5-.2.1-.4.3-.5.5l-2.2 4.4-4.8.7c-.8.1-1.3.8-1.2 1.6 0 .3.2.6.4.8l3.5 3.4-.8 4.8c-.1.8.4 1.5 1.2 1.6.3.1.6 0 .9-.1l4.3-2.3 4.3 2.2c.7.4 1.5.1 1.9-.6.1-.3.2-.6.1-.9l-.8-4.8 3.5-3.4c.3-.3.4-.9.3-1.4z"
              fill="#fff"
            ></path>
          </svg>
          <svg className="trustpilot__stars__item" viewBox="0 0 30 30">
            <path
              d="M28 30H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h26c1.1 0 2 .9 2 2v26c0 1.1-.9 2-2 2z"
              fill="#579f78"
            ></path>
            <path
              d="M24.4 12.7c-.2-.5-.6-.9-1.1-1l-4.9-.7-2.1-4.3c-.4-.7-1.3-.9-2-.5-.2.1-.4.3-.5.5l-2.2 4.4-4.8.7c-.8.1-1.3.8-1.2 1.6 0 .3.2.6.4.8l3.5 3.4-.8 4.8c-.1.8.4 1.5 1.2 1.6.3.1.6 0 .9-.1l4.3-2.3 4.3 2.2c.7.4 1.5.1 1.9-.6.1-.3.2-.6.1-.9l-.8-4.8 3.5-3.4c.3-.3.4-.9.3-1.4z"
              fill="#fff"
            ></path>
          </svg>
          <svg className="trustpilot__stars__item" viewBox="0 0 30 30">
            <path
              d="M28 30H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h26c1.1 0 2 .9 2 2v26c0 1.1-.9 2-2 2z"
              fill="#579f78"
            ></path>
            <path
              d="M24.4 12.7c-.2-.5-.6-.9-1.1-1l-4.9-.7-2.1-4.3c-.4-.7-1.3-.9-2-.5-.2.1-.4.3-.5.5l-2.2 4.4-4.8.7c-.8.1-1.3.8-1.2 1.6 0 .3.2.6.4.8l3.5 3.4-.8 4.8c-.1.8.4 1.5 1.2 1.6.3.1.6 0 .9-.1l4.3-2.3 4.3 2.2c.7.4 1.5.1 1.9-.6.1-.3.2-.6.1-.9l-.8-4.8 3.5-3.4c.3-.3.4-.9.3-1.4z"
              fill="#fff"
            ></path>
          </svg>
          <svg className="trustpilot__stars__item" viewBox="0 0 30 30">
            <path
              d="M28 30H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h26c1.1 0 2 .9 2 2v26c0 1.1-.9 2-2 2z"
              fill="#579f78"
            ></path>
            <path
              d="M24.4 12.7c-.2-.5-.6-.9-1.1-1l-4.9-.7-2.1-4.3c-.4-.7-1.3-.9-2-.5-.2.1-.4.3-.5.5l-2.2 4.4-4.8.7c-.8.1-1.3.8-1.2 1.6 0 .3.2.6.4.8l3.5 3.4-.8 4.8c-.1.8.4 1.5 1.2 1.6.3.1.6 0 .9-.1l4.3-2.3 4.3 2.2c.7.4 1.5.1 1.9-.6.1-.3.2-.6.1-.9l-.8-4.8 3.5-3.4c.3-.3.4-.9.3-1.4z"
              fill="#fff"
            ></path>
          </svg>
          <svg className="trustpilot__stars__item" viewBox="0 0 30 30">
            <path
              d="M15 30H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h13"
              fill="#579f78"
            ></path>
            <path
              d="M15 0h13c1.1 0 2 .9 2 2v26c0 1.1-.9 2-2 2H15"
              fill="#b5b5b5"
            ></path>
            <path
              d="M24.4 12.7c-.2-.5-.6-.9-1.1-1l-4.9-.7-2.1-4.3c-.4-.7-1.3-.9-2-.5-.2.1-.4.3-.5.5l-2.2 4.4-4.8.7c-.8.1-1.3.8-1.2 1.6 0 .3.2.6.4.8l3.5 3.4-.8 4.8c-.1.8.4 1.5 1.2 1.6.3.1.6 0 .9-.1l4.3-2.3 4.3 2.2c.7.4 1.5.1 1.9-.6.1-.3.2-.6.1-.9l-.8-4.8 3.5-3.4c.3-.3.4-.9.3-1.4z"
              fill="#fff"
            ></path>
          </svg>
        </div>
        <div className="trustpilot__summary">
          <span className="trustpilot__summary__out-of">4.4 av 5</span>
          <span className="trustpilot__summary__reviews">
            8.000+ recensioner
          </span>
        </div>
      </div>
    </div>
  </section>
)

const CartUpSellContainer = () => (
  <section className="cart__upsell--container" style={{ display: 'none' }}>
    <header data-display="">
      <p>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 4.0625V6.24999H12.1875C12.6201 6.24999 13.0431 6.1217 13.4028 5.88133C13.7625 5.64097 14.0429 5.29933 14.2085 4.89962C14.3741 4.4999 14.4174 4.06007 14.333 3.63574C14.2486 3.21141 14.0402 2.82163 13.7343 2.5157C13.4284 2.20978 13.0386 2.00144 12.6143 1.91703C12.1899 1.83263 11.7501 1.87595 11.3504 2.04151C10.9507 2.20708 10.609 2.48746 10.3687 2.84719C10.1283 3.20692 10 3.62985 10 4.0625V4.0625ZM10 4.0625V6.24999H7.8125C7.37985 6.24999 6.95692 6.1217 6.59719 5.88133C6.23746 5.64097 5.95708 5.29933 5.79151 4.89962C5.62595 4.4999 5.58263 4.06007 5.66703 3.63574C5.75144 3.21141 5.95978 2.82163 6.26571 2.5157C6.57163 2.20978 6.96141 2.00144 7.38574 1.91703C7.81007 1.83263 8.24991 1.87595 8.64962 2.04151C9.04933 2.20708 9.39098 2.48746 9.63134 2.84719C9.87171 3.20692 10 3.62985 10 4.0625V4.0625Z"
            stroke="black"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
          ></path>
          <path
            d="M16.25 6.25H3.75C3.05964 6.25 2.5 6.80964 2.5 7.5V9.375C2.5 10.0654 3.05964 10.625 3.75 10.625H16.25C16.9404 10.625 17.5 10.0654 17.5 9.375V7.5C17.5 6.80964 16.9404 6.25 16.25 6.25Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M10 6.25V18.125M16.25 10.625V16.25C16.25 16.7473 16.0525 17.2242 15.7008 17.5758C15.3492 17.9275 14.8723 18.125 14.375 18.125H5.625C5.12772 18.125 4.65081 17.9275 4.29917 17.5758C3.94754 17.2242 3.75 16.7473 3.75 16.25V10.625H16.25Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>{' '}
        Köp för 0 kr mer för en gratis produkt
      </p>
    </header>

    <div className="cart__upsell--list"></div>
  </section>
)

const CartFormCheckout = () => (
  <form
    method="post"
    action="/cart"
    className="cart__checkout"
    data-state="filled"
  >
    <input type="hidden" name="checkout" />

    <p className="cart__checkout__total">
      <span>Total</span>
      <span data-total-output="">0 kr</span>
    </p>

    <label htmlFor="terms--drawer" className="cart__terms">
      <div className="input-wrapper">
        <input
          type="checkbox"
          id="terms--drawer"
          autoComplete="off"
          className="js-terms"
        />
        <svg className="icon icon--checkmark-small" viewBox="0 0 12 12">
          <path d="M3.543 11.2c-.457 0-.914-.229-1.257-.571L.114 7.657C-.114 7.43 0 6.857.343 6.63c.228-.229.8-.115 1.028.114L3.543 9.6l7.086-8.457c.228-.343.685-.343 1.028-.114.343.228.343.685.114 1.028L4.8 10.63c-.114 0-.114.114-.229.228-.342.229-.685.343-1.028.343z"></path>
        </svg>
      </div>

      <p className="cart__terms__text">
        Jag accepterar{' '}
        <a href="/pages/terms-conditions" target="_blank">
          villkoren
        </a>
      </p>
    </label>

    <input
      type="hidden"
      name="attributes[preorder]"
      data-preorder-input=""
      value=""
    />

    <button
      type="submit"
      name="checkout"
      className="cart__submit-button cta cta--filled-dark js-submit"
    >
      Gå till betalning
    </button>
    <div className="payment-icons">
      <ul className="payment-icons__list">
        <li className="payment-icons__item">
          <div className="payment-icons__item__inner">
            <svg
              className="payment-icon"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 70 48"
            >
              <rect
                x=".5"
                y=".5"
                width="69"
                height="47"
                rx="2.5"
                fill="#fff"
              ></rect>
              <path
                d="M20.883 19h-2.206c0 1.81-.83 3.462-2.274 4.55l-.87.653 3.382 4.61h2.78l-3.116-4.244A7.798 7.798 0 0020.883 19zM15.255 19H13v9.812h2.255V19zM24.474 19h-2.127v9.812h2.127V19zM43.129 21.839c-.811 0-1.583.247-2.097.95v-.762h-2.018v6.785h2.047v-3.56c0-1.03.693-1.534 1.524-1.534.89 0 1.404.534 1.404 1.523v3.58h2.028V24.5c0-1.582-1.256-2.66-2.888-2.66zM30.903 22.027v.435a3.58 3.58 0 00-5.598 2.957 3.58 3.58 0 005.598 2.958v.435h2.028v-6.785h-2.028zm-1.85 5.133c-1.018 0-1.84-.781-1.84-1.74 0-.96.822-1.742 1.84-1.742 1.02 0 1.84.782 1.84 1.741 0 .96-.82 1.741-1.84 1.741zM36.076 22.907v-.88H34v6.785h2.087v-3.165c0-1.068 1.157-1.642 1.959-1.642h.02v-1.978c-.822 0-1.583.356-1.989.88zM52.327 22.027v.435a3.58 3.58 0 00-5.598 2.957 3.58 3.58 0 005.598 2.958v.435h2.028v-6.785h-2.028zm-1.85 5.133c-1.018 0-1.839-.781-1.839-1.74 0-.96.821-1.742 1.84-1.742 1.019 0 1.84.782 1.84 1.741.01.96-.821 1.741-1.84 1.741zM55.928 22.224c0-.098-.07-.158-.178-.158h-.188v.515h.089v-.188h.099l.079.188h.099l-.09-.208c.06-.03.09-.08.09-.149zm-.178.08h-.1v-.159h.1c.06 0 .089.03.089.08 0 .049-.02.079-.09.079z"
                fill="#000"
              ></path>
              <path
                d="M55.72 21.849a.485.485 0 00-.485.484c.01.267.218.485.485.485a.485.485 0 000-.97zm0 .88a.388.388 0 01-.386-.396c0-.217.178-.395.386-.395.218 0 .386.178.386.395a.395.395 0 01-.386.396zM56.521 26.409a1.28 1.28 0 00-1.276 1.276 1.28 1.28 0 001.276 1.276 1.28 1.28 0 001.276-1.276c0-.713-.573-1.276-1.276-1.276z"
                fill="#000"
              ></path>
            </svg>
          </div>
        </li>
        <li className="payment-icons__item">
          <div className="payment-icons__item__inner">
            <svg
              className="payment-icon"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 70 48"
            >
              <rect
                x=".5"
                y=".5"
                width="69"
                height="47"
                rx="2.5"
                fill="#fff"
              ></rect>
              <path
                d="M55.772 16.228h-3.018c-.912 0-1.614.305-2.035 1.296L44.965 31.77h4.07s.702-1.905.842-2.362h4.983c.14.534.49 2.286.49 2.286H59l-3.228-15.467zM51 26.21c.35-.914 1.544-4.343 1.544-4.343 0 .077.35-.914.491-1.447l.28 1.371s.773 3.734.913 4.495H51v-.076zM45.245 26.667c0 3.2-2.666 5.333-6.806 5.333-1.755 0-3.44-.381-4.351-.838l.561-3.505.491.229c1.263.61 2.105.838 3.65.838 1.122 0 2.315-.457 2.315-1.524 0-.686-.491-1.143-2.035-1.905-1.474-.762-3.438-1.98-3.438-4.19 0-3.048 2.736-5.105 6.596-5.105 1.474 0 2.737.305 3.509.686l-.562 3.352-.28-.305a7.03 7.03 0 00-2.948-.61c-1.473.077-2.175.763-2.175 1.372 0 .686.842 1.22 2.175 1.905 2.246 1.143 3.298 2.438 3.298 4.267z"
                fill="#172B85"
              ></path>
              <path
                d="M11 16.381l.07-.305h6.035c.842 0 1.474.305 1.684 1.296l1.334 6.857C18.789 20.572 15.702 17.6 11 16.38z"
                fill="#F9B50B"
              ></path>
              <path
                d="M28.614 16.229l-6.105 15.466h-4.14l-3.51-12.952c2.527 1.752 4.632 4.495 5.404 6.4l.421 1.6 3.79-10.59h4.14v.076zM30.228 16.152h3.86L31.63 31.695h-3.86l2.457-15.543z"
                fill="#172B85"
              ></path>
            </svg>
          </div>
        </li>
        <li className="payment-icons__item">
          <div className="payment-icons__item__inner">
            <svg
              className="payment-icon"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 70 48"
            >
              <rect
                x=".5"
                y=".5"
                width="69"
                height="47"
                rx="2.5"
                fill="#fff"
              ></rect>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M35 34.656A13.867 13.867 0 0125.95 38C18.247 38 12 31.732 12 24s6.246-14 13.95-14c3.454 0 6.614 1.259 9.05 3.344A13.867 13.867 0 0144.05 10C51.753 10 58 16.268 58 24s-6.246 14-13.95 14A13.867 13.867 0 0135 34.656z"
                fill="#ED0006"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M35 34.656A13.99 13.99 0 0039.902 24 13.99 13.99 0 0035 13.344 13.867 13.867 0 0144.05 10C51.753 10 58 16.268 58 24s-6.246 14-13.95 14A13.867 13.867 0 0135 34.656z"
                fill="#F9A000"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M35 34.656A13.99 13.99 0 0039.902 24c0-4.267-1.902-8.088-4.902-10.655A13.99 13.99 0 0030.098 24 13.99 13.99 0 0035 34.656z"
                fill="#FF5E00"
              ></path>
            </svg>
          </div>
        </li>
        <li className="payment-icons__item">
          <div className="payment-icons__item__inner">
            <svg
              className="payment-icon"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 70 48"
            >
              <rect
                x=".5"
                y=".5"
                width="69"
                height="47"
                rx="2.5"
                fill="#fff"
              ></rect>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M30.25 36.119l.45-2.862-1.003-.024h-4.785l3.326-21.12a.271.271 0 01.27-.231h8.068c2.679 0 4.527.559 5.492 1.66.453.517.74 1.058.88 1.652.146.624.149 1.37.006 2.278l-.01.066v.583l.452.257c.381.202.684.434.916.7.387.441.638 1.003.743 1.67.11.684.074 1.5-.105 2.422-.207 1.061-.54 1.986-.991 2.742a5.632 5.632 0 01-1.57 1.724 6.361 6.361 0 01-2.114.955c-.78.203-1.668.306-2.643.306h-.628c-.449 0-.885.162-1.227.452-.343.297-.57.702-.64 1.144l-.047.258-.795 5.045-.036.185c-.01.059-.026.088-.05.108a.132.132 0 01-.083.03H30.25z"
                fill="#28356A"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M43.825 17.606c-.024.154-.051.311-.082.473-1.064 5.473-4.705 7.363-9.354 7.363h-2.367a1.15 1.15 0 00-1.136.975L29.33 36.3a.606.606 0 00.597.701h4.199c.497 0 .92-.362.998-.853l.04-.213.791-5.025.051-.276c.078-.493.5-.855.998-.855h.628c4.067 0 7.252-1.654 8.183-6.441.388-2 .187-3.67-.842-4.844a4.011 4.011 0 00-1.149-.887z"
                fill="#298FC2"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M42.712 17.161a8.329 8.329 0 00-1.035-.23 13.138 13.138 0 00-2.087-.152h-6.324a1.01 1.01 0 00-.997.855l-1.345 8.535-.039.248a1.15 1.15 0 011.137-.975h2.367c4.649 0 8.29-1.891 9.353-7.362.032-.162.059-.32.083-.474a5.659 5.659 0 00-.875-.37 8.47 8.47 0 00-.238-.075z"
                fill="#22284F"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32.27 17.633a1.007 1.007 0 01.996-.854h6.324c.75 0 1.449.05 2.087.153a8.329 8.329 0 011.274.304c.314.104.606.228.875.37.316-2.022-.003-3.4-1.094-4.646-1.204-1.373-3.376-1.96-6.155-1.96H28.51c-.568 0-1.052.413-1.14.976l-3.36 21.337a.694.694 0 00.683.803h4.982l2.596-16.483z"
                fill="#28356A"
              ></path>
            </svg>
          </div>
        </li>
        <li className="payment-icons__item">
          <div className="payment-icons__item__inner">
            <svg
              className="payment-icon"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 70 48"
            >
              <rect
                x=".5"
                y=".5"
                width="69"
                height="47"
                rx="2.5"
                fill="#fff"
              ></rect>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.136 16.578c-.586.676-1.524 1.209-2.461 1.133-.117-.914.342-1.884.879-2.484.586-.694 1.611-1.189 2.442-1.227.097.951-.284 1.884-.86 2.578zm.85 1.314c-.826-.047-1.58.242-2.189.474-.392.15-.723.277-.976.277-.283 0-.629-.134-1.016-.284-.509-.196-1.09-.421-1.699-.41a4.027 4.027 0 00-3.409 2.017c-1.465 2.454-.38 6.09 1.036 8.087.693.99 1.523 2.075 2.617 2.036.482-.017.828-.16 1.186-.308.412-.171.84-.348 1.51-.348.646 0 1.055.172 1.449.338.374.157.733.309 1.266.3 1.133-.02 1.846-.99 2.54-1.98.748-1.062 1.077-2.098 1.126-2.256l.006-.018-.026-.012c-.25-.112-2.163-.965-2.181-3.251-.018-1.92 1.517-2.892 1.758-3.045l.03-.019c-.977-1.408-2.501-1.56-3.028-1.598zm7.842 12.074V15.132h5.714c2.95 0 5.01 1.98 5.01 4.872s-2.1 4.89-5.088 4.89h-3.272v5.072h-2.364zm2.364-12.893h2.725c2.05 0 3.223 1.066 3.223 2.94 0 1.875-1.172 2.95-3.233 2.95h-2.715v-5.89zm16.164 11.113c-.625 1.161-2.002 1.894-3.487 1.894-2.197 0-3.73-1.275-3.73-3.197 0-1.903 1.484-2.997 4.228-3.159l2.95-.171v-.818c0-1.209-.81-1.865-2.256-1.865-1.192 0-2.061.6-2.237 1.512h-2.129c.068-1.921 1.924-3.32 4.434-3.32 2.706 0 4.464 1.38 4.464 3.52v7.384h-2.188v-1.78h-.049zm-2.852.134c-1.26 0-2.06-.59-2.06-1.494 0-.933.77-1.475 2.245-1.56l2.628-.162v.837c0 1.39-1.211 2.379-2.813 2.379zm12.345 2.226C54.902 33.144 53.818 34 51.513 34c-.176 0-.762-.019-.899-.057v-1.78c.147.02.508.039.694.039 1.045 0 1.63-.428 1.992-1.542l.215-.656-4.005-10.8h2.471l2.784 8.764h.049l2.783-8.763H60l-4.15 11.341z"
                fill="#000"
              ></path>
            </svg>
          </div>
        </li>
        <li className="payment-icons__item">
          <div className="payment-icons__item__inner">
            <svg
              className="payment-icon"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              viewBox="0 0 1250 416"
              xmlSpace="preserve"
            >
              {/* <style>.st0{fill:#0ee06e}</style> */}

              <path
                className="st0"
                d="M458.4 291.8V156.7h-48.5v-32.1h131.9v32.1h-48.5v135.1h-34.9z"
              ></path>

              <path
                className="st0"
                d="M536.3 291.8V170.5h32.1v19.2c7.6-16.3 17.4-19.2 27.9-19.2h12.4V203h-10.5c-15.1 0-28.6 8.7-28.6 35.3v53.6h-33.3zM623.8 247.4v-76.9H657v69.4c0 14.2 6.9 24.7 21.1 24.7 13.7 0 22.4-10.5 22.4-24.5v-69.6h33.2v121.4h-31.6v-15.3c-8 12.1-19.9 18.1-35 18.1-26.6-.1-43.3-18.4-43.3-47.3zM747.9 257.7l28.9-6.6c1.4 9.4 8.9 16.5 23.4 16.5 11.2 0 17.4-4.6 17.4-10.3 0-4.6-2.5-8-14-10.5l-19-4.1c-24.3-5.3-34.6-16.5-34.6-36.9 0-20.8 17.2-37.6 49.5-37.6 34.3 0 48.1 20.6 49.5 34.1l-29.1 6.4c-1.4-7.1-6.6-14.9-21.1-14.9-9.2 0-16 4.1-16 10.1 0 5 3.4 7.8 9.4 9.2l27.7 6.4c21.1 4.8 30.9 17.4 30.9 35.3 0 19.2-15.3 39.4-50.4 39.4-38.6-.1-51.2-23.2-52.5-36.5zM914.6 291.8c-21.5 0-35.9-11.9-35.9-35.5v-56.8h-20.4v-29.1h20.4v-27l33.2-9.6v36.6h24.5v29.1h-24.5v50.8c0 8.9 4.6 12.4 13.5 12.4h12.8v29.1h-23.6zM956.2 291.8V124.7h33.2v167.2h-33.2zM1089.5 170.5h35.5l-50.6 164.9h-35.5l14-43.5h-18.3l-33.4-121.4h35.5l25 93.9 27.8-93.9zM125 197.9h77.9v-62.2l62.2 62.2-62.2 62.1v31.8h75.5v-93.9h69.3v-73.2H125z"
              ></path>
            </svg>
          </div>
        </li>
      </ul>
    </div>
  </form>
)

export const CartMenuSidebar = ({ cartRef, onClose }: any) => {
  return (
    <div ref={cartRef} className="cart-drawer__inner">
      <div className="cart is-empty" data-state="empty">
        <header className="cart__header">
          <p className="cart__title">
            Kundvagn (<span>0</span>)
          </p>
          <p>
            <ButtonModalClose
              className="cart-drawer__close-button"
              spanClassName="cart-drawer__close-button__text"
              onClose={onClose}
            />
          </p>
        </header>
        <div className="cart__inner-wrapper js-innerWrapper">
          <section className="cart__content">
            <div className="cart__shipping-progress">
              <CartShippingProgress />
              <CartShippingBar />
            </div>
            <CartEmpty />
            <ul className="cart__list" data-item-list=""></ul>
          </section>
          <CartUpSellContainer />
          <CartSectionSummary />
          <CartFormCheckout />
        </div>
      </div>
    </div>
  )
}

export const CartMenuSidebarBeta = ({ cartRef, onClose }: any) => {
  return (
    <div ref={cartRef} className="cart-drawer__inner">
      <div className="cart is-empty" data-state="empty">
        <header className="cart__header">
          <p className="cart__title">
            Kundvagn (<span>0</span>)
          </p>
          <p>
            <ButtonModalClose
              className="cart-drawer__close-button"
              spanClassName="cart-drawer__close-button__text"
              onClose={onClose}
            />
          </p>
        </header>
        <div className="cart__inner-wrapper js-innerWrapper">
          <section className="cart__content">
            <div className="cart__shipping-progress">
              <CartShippingProgress />
              <CartShippingBar />
            </div>
            <CartEmpty />
            <ul className="cart__list" data-item-list=""></ul>
          </section>
          <CartUpSellContainer />
          <CartSectionSummary />
          <CartFormCheckout />
        </div>
      </div>
    </div>
  )
}

export const CartPaymentIconItem = ({ icon }: any) => (
  <li className="payment-icons__item">
    <div className="payment-icons__item__inner">{icon}</div>
  </li>
)

export const CartPaymentIcons = () => (
  <div className="cart__trust cart__trust--empty">
    <div className="payment-icons">
      <ul className="payment-icons__list">
        {dataCartPaymentIcons.map((item, index) => (
          <CartPaymentIconItem key={index} icon={item.icon} />
        ))}
      </ul>
    </div>
    <div className="trustpilot trustpilot--row">
      <div className="trustpilot__stars">{handleRating(4.4)}</div>
      <TrustPilotSummary rating="4.4" />
    </div>
  </div>
)
