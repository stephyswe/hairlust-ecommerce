import { ImageRender } from '../../../../ui/Image/Image'

export const ReviewReferencesItem = ({ props, transform }: any) => {
  props.sizes = '206px'
  props.className =
    'references__logo-slider__item__logo lazyautosizes ls-is-cached lazyloaded'
  return (
    <li
      className="references__logo-slider__item js-slide keen-slider__slide"
      style={{
        minWidth: 'calc(20% - 40px)',
        maxWidth: 'calc(20% - 40px)',
        transform: transform,
      }}
    >
      <ImageRender maxWidth="180" props={props} />
    </li>
  )
}
