/* eslint-disable @next/next/no-img-element */

import { ReviewReferencesListData } from './data'
import { ReviewReferencesItem } from './item'

export const ReviewReferences = ({ title }: any) => (
  <div className="references__logo-slider container js-logoSliderWrapper is-initialized">
    <p className="references__logo-slider__title references__logo-slider__title--light">
      {title}
    </p>
    <ul className="references__logo-slider__list js-logoSliderEl keen-slider">
      {ReviewReferencesListData.map((item, index) => (
        <ReviewReferencesItem
          key={index}
          props={item.imageProps}
          transform={item.transform}
        />
      ))}

      <li
        className="references__logo-slider__item js-slide keen-slider__slide"
        style={{
          minWidth: 'calc(20% - 40px)',
          maxWidth: 'calc(20% - 40px)',
          transform: 'translate3d(911.2px, 0px, 0px)',
        }}
      >
        <img
          className="lazyload references__logo-slider__item__logo"
          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
          data-src="//cdn.shopify.com/s/files/1/2199/8485/files/IN_white_f.svg?v=5005909784392054632"
          data-sizes="auto"
          data-max-width="180"
          alt=""
        />
      </li>
      <li
        className="references__logo-slider__item js-slide keen-slider__slide"
        style={{
          minWidth: 'calc(20% - 40px)',
          maxWidth: 'calc(20% - 40px)',
          transform: 'translate3d(961.2px, 0px, 0px)',
        }}
      >
        <img
          className="lazyload references__logo-slider__item__logo"
          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
          data-src="//cdn.shopify.com/s/files/1/2199/8485/files/Kosmetik_white_f.svg?v=779720665856232208"
          data-sizes="auto"
          data-max-width="180"
          alt=""
        />
      </li>
      <li
        className="references__logo-slider__item js-slide keen-slider__slide"
        style={{
          minWidth: 'calc(20% - 40px)',
          maxWidth: 'calc(20% - 40px)',
          transform: 'translate3d(1011.2px, 0px, 0px)',
        }}
      >
        <img
          className="lazyload references__logo-slider__item__logo"
          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
          data-src="//cdn.shopify.com/s/files/1/2199/8485/files/Resume_white_f.svg?v=10005296367833770710"
          data-sizes="auto"
          data-max-width="180"
          alt=""
        />
      </li>
      <li
        className="references__logo-slider__item js-slide keen-slider__slide"
        style={{
          minWidth: 'calc(20% - 40px)',
          maxWidth: 'calc(20% - 40px)',
          transform: 'translate3d(1061.2px, 0px, 0px)',
        }}
      >
        <img
          className="lazyload references__logo-slider__item__logo"
          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
          data-src="//cdn.shopify.com/s/files/1/2199/8485/files/BeauMonde_white_f.svg?v=7128751645370988518"
          data-sizes="auto"
          data-max-width="180"
          alt=""
        />
      </li>
      <li
        className="references__logo-slider__item js-slide keen-slider__slide"
        style={{
          minWidth: 'calc(20% - 40px)',
          maxWidth: 'calc(20% - 40px)',
          transform: 'translate3d(1111.2px, 0px, 0px)',
        }}
      >
        <img
          className="lazyload references__logo-slider__item__logo"
          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
          data-src="//cdn.shopify.com/s/files/1/2199/8485/files/Daisy_white_f.svg?v=12922309770392955488"
          data-sizes="auto"
          data-max-width="180"
          alt=""
        />
      </li>
      <li
        className="references__logo-slider__item js-slide keen-slider__slide"
        style={{
          minWidth: 'calc(20% - 40px)',
          maxWidth: 'calc(20% - 40px)',
          transform: 'translate3d(1161.2px, 0px, 0px)',
        }}
      >
        <img
          className="lazyload references__logo-slider__item__logo"
          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
          data-src="//cdn.shopify.com/s/files/1/2199/8485/files/ChriChri_White_f.svg?v=9987167820675159320"
          data-sizes="auto"
          data-max-width="180"
          alt=""
        />
      </li>
      <li
        className="references__logo-slider__item js-slide keen-slider__slide"
        style={{
          minWidth: 'calc(20% - 40px)',
          maxWidth: 'calc(20% - 40px)',
          transform: 'translate3d(1211.2px, 0px, 0px)',
        }}
      >
        <img
          className="lazyload references__logo-slider__item__logo"
          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
          data-src="//cdn.shopify.com/s/files/1/2199/8485/files/Plaza_white_f.svg?v=9513420445450509813"
          data-sizes="auto"
          data-max-width="180"
          alt=""
        />
      </li>
      <li
        className="references__logo-slider__item js-slide keen-slider__slide"
        style={{
          minWidth: 'calc(20% - 40px)',
          maxWidth: 'calc(20% - 40px)',
          transform: 'translate3d(1261.2px, 0px, 0px)',
        }}
      >
        <img
          className="lazyload references__logo-slider__item__logo"
          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
          data-src="//cdn.shopify.com/s/files/1/2199/8485/files/Linda_white_f.svg?v=7393103575723144231"
          data-sizes="auto"
          data-max-width="180"
          alt=""
        />
      </li>
      <li
        className="references__logo-slider__item js-slide keen-slider__slide"
        style={{
          minWidth: 'calc(20% - 40px)',
          maxWidth: 'calc(20% - 40px)',
          transform: 'translate3d(1311.2px, 0px, 0px)',
        }}
      >
        <img
          className="lazyload references__logo-slider__item__logo"
          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
          data-src="//cdn.shopify.com/s/files/1/2199/8485/files/Q_white_f.svg?v=11622957697821117007"
          data-sizes="auto"
          data-max-width="180"
          alt=""
        />
      </li>
      <li
        className="references__logo-slider__item js-slide keen-slider__slide"
        style={{
          minWidth: 'calc(20% - 40px)',
          maxWidth: 'calc(20% - 40px)',
          transform: 'translate3d(1361.2px, 0px, 0px)',
        }}
      >
        <img
          className="lazyload references__logo-slider__item__logo"
          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
          data-src="//cdn.shopify.com/s/files/1/2199/8485/files/Sondag_white_f.svg?v=17471624192017134646"
          data-sizes="auto"
          data-max-width="180"
          alt=""
        />
      </li>
      <li
        className="references__logo-slider__item js-slide keen-slider__slide"
        style={{
          minWidth: 'calc(20% - 40px)',
          maxWidth: 'calc(20% - 40px)',
          transform: 'translate3d(1411.2px, 0px, 0px)',
        }}
      >
        <img
          className="lazyload references__logo-slider__item__logo"
          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
          data-src="//cdn.shopify.com/s/files/1/2199/8485/files/Woman_white_f.png?v=7798476453859854601"
          data-sizes="auto"
          data-max-width="180"
          alt=""
        />
      </li>
      <li
        className="references__logo-slider__item js-slide keen-slider__slide"
        style={{
          minWidth: 'calc(20% - 40px)',
          maxWidth: 'calc(20% - 40px)',
          transform: 'translate3d(1461.2px, 0px, 0px)',
        }}
      >
        <img
          className="lazyload references__logo-slider__item__logo"
          src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
          data-src="//cdn.shopify.com/s/files/1/2199/8485/files/Skon_white_f.svg?v=3500284626472506488"
          data-sizes="auto"
          data-max-width="180"
          alt=""
        />
      </li>
      <li
        className="references__logo-slider__item js-slide keen-slider__slide"
        style={{
          minWidth: 'calc(20% - 40px)',
          maxWidth: 'calc(20% - 40px)',
          transform: 'translate3d(-4112px, 0px, 0px)',
        }}
      >
        <img
          className="references__logo-slider__item__logo lazyautosizes lazyloaded"
          src="//cdn.shopify.com/s/files/1/2199/8485/files/Go_white_f.svg?v=8191929459907590739"
          data-src="//cdn.shopify.com/s/files/1/2199/8485/files/Go_white_f.svg?v=8191929459907590739"
          data-sizes="auto"
          data-max-width="180"
          alt=""
          sizes="93px"
        />
      </li>
      <li
        className="references__logo-slider__item js-slide keen-slider__slide"
        style={{
          minWidth: 'calc(20% - 40px)',
          maxWidth: 'calc(20% - 40px)',
          transform: 'translate3d(-4062px, 0px, 0px)',
        }}
      >
        <img
          className="references__logo-slider__item__logo lazyautosizes lazyloaded"
          src="https://cdn.shopify.com/s/files/1/2199/8485/files/Grazia_white_f.svg?v=14846858696851602431"
          data-src="//cdn.shopify.com/s/files/1/2199/8485/files/Grazia_white_f.svg?v=14846858696851602431"
          data-sizes="auto"
          data-max-width="180"
          alt=""
          sizes="162px"
        />
      </li>
    </ul>
  </div>
)
