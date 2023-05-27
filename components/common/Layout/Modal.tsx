import React, { useRef } from 'react'
import { useClickAway } from 'react-use'

import { useModalDef } from '../../../config/contexts/modalDefProduct'
import {
  ModalOpen,
  ModalHeader,
  ModalContent,
  ButtonModalClose,
  ModalSlideInInner,
  ModalSlideMain,
} from './ModalParts'
import { ImageSingleItem } from '../../ui/Image/Image'

export const ModalDefault = ({
  className,
  open,
  data: { title, content },
}: any) => {
  const { handleModalClose } = useModalDef()
  const componentRef = useRef(null)

  useClickAway(componentRef, () => {
    if (!open) return
    handleModalClose()
  })

  return (
    <ModalOpen className={className} open={open}>
      <ModalSlideInInner compRef={componentRef}>
        <ModalHeader title={title} />
        <ModalContent
          className="modal-slidein__content rte"
          content={content}
        />
      </ModalSlideInInner>
    </ModalOpen>
  )
}

export const ModalIngredient = ({
  open,
  className,
  data: { content, srcSet, title = 'Ingredienser' },
}: any) => (
  <ModalOpen type="article" className={className} open={open}>
    <ModalSlideMain
      className="product__ingredients__modal__main"
      srcSet={srcSet}
    />
    <ModalSlideInInner>
      <ModalHeader title={title} />
      <div className="modal-slidein__content">
        <ImageSingleItem
          className="lazyautosizes ls-is-cached lazyloaded"
          srcSet={srcSet}
        />
        <ModalContent className="rte" content={content} />
      </div>
    </ModalSlideInInner>
  </ModalOpen>
)

export const ModalLightBox = ({ open, className, data }: any) => {
  const thumbnailList = data.thumbnail.map((item: any, index: number) => (
    <li
      key={index}
      className="product__lightbox__thumbnails__item js-thumbItem"
      data-index={index}
    >
      <ImageSingleItem
        className="lazyautosizes ls-is-cached lazyloaded"
        srcSet={item.srcSet}
        sizes="75px"
      />
    </li>
  ))

  const fullScreenList = data.fullScreen.map((item: any, index: number) => (
    <li
      key={index}
      className="product__lightbox__images__item js-imgItem"
      data-index={index}
    >
      <ImageSingleItem
        className="lazyautosizes lazyloaded"
        srcSet={item.srcSet}
        sizes="951px"
      />
    </li>
  ))

  return (
    <ModalOpen className={className} open={open}>
      <ButtonModalClose
        className="product__lightbox__close-button"
        spanClassName="product__lightbox__close-button__text"
      />

      <div className="product__lightbox__thumbnails js-thumbContainer">
        <ul className="product__lightbox__thumbnails__list">{thumbnailList}</ul>
      </div>

      <div className="product__lightbox__images js-imgContainer">
        <ul className="product__lightbox__images__list">{fullScreenList}</ul>
      </div>
    </ModalOpen>
  )
}
