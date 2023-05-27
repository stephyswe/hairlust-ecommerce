import React from 'react'
import cn from 'clsx'

import { useModalDef } from '../../../config/contexts/modalDefProduct'
import { SvgIconClose, SvgIconCloseLarge, SvgIconArrowLeft } from '../../icons'
import { ImageSingleItem } from '../../ui/Image/Image'

interface IconTitleProps {
  arrow: any
  title: string
  position?: 'before' | 'after'
  spanClassName: string
}

interface ModalSlideMainProps {
  srcSet: string
  className: string
}

export const ModalHeader = ({ title }: any) => (
  <header className="modal-slidein__header">
    <p className="modal-slidein__title">{title}</p>
    <ButtonModalClose
      className="modal-slidein__close-button js-closeBtn"
      spanClassName="modal-slidein__close-button__text"
      arrow={<SvgIconClose />}
    />
  </header>
)

export const ModalContent = ({ className, content }: any) => (
  <article className={cn(className)}>
    <ContentDisplay content={content} />
  </article>
)

export const ContentDisplay = ({ content }: any) => (
  <>
    {content.map(
      (
        { title, subtitle, paragraph, ol, ul, oneParagraph }: any,
        index: number
      ) => (
        <React.Fragment key={index}>
          <p />
          {title && <h2>{title}</h2>}
          {subtitle && <h3>{subtitle}</h3>}
          {paragraph &&
            paragraph.map((paragraph: any, index: number) => (
              <p key={index}>{paragraph}</p>
            ))}
          {ol && ol.length > 0 && (
            <ol>
              {ol.map((item: any, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          )}
          {ul && ul.length > 0 && (
            <ul>
              {ul.map((item: any, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
          {oneParagraph && <p>{oneParagraph}</p>}
          <p />
        </React.Fragment>
      )
    )}
  </>
)

export const ModalOpen = ({ children, className, open, type }: any) => {
  const Container = type === 'article' ? 'article' : 'div'
  return (
    <Container className={cn(className, open ? 'is-open' : '')}>
      {children}
    </Container>
  )
}

export const SpanTitle: React.FC<IconTitleProps> = ({
  arrow = <SvgIconCloseLarge />,
  title = 'Stäng',
  position = 'after',
  spanClassName,
}) => {
  return (
    <>
      {position === 'before' && arrow}
      <span className={cn(spanClassName)}>{title}</span>
      {position === 'after' && arrow}
    </>
  )
}

export const ButtonModalClose = ({
  onClose,
  title,
  className,
  spanClassName,
  iconPosition,
  arrow,
}: any) => {
  const { handleModalClose } = useModalDef()
  return (
    <button
      onClick={onClose ?? handleModalClose}
      type="button"
      className={cn(className, 'js-closeBtn')}
    >
      <SpanTitle
        spanClassName={spanClassName}
        arrow={arrow}
        title={title}
        position={iconPosition}
      />
    </button>
  )
}

export const ModalSlideInInner = ({ compRef, children }: any) => (
  <div ref={compRef} className="modal-slidein__inner">
    {children}
  </div>
)

export const ModalSlideMain = ({ className, srcSet }: ModalSlideMainProps) => (
  <div className={cn(className, 'modal-slidein__main')}>
    <ButtonModalClose
      className="back-button js-closeBtn"
      spanClassName="back-button__text"
      title="Gå tillbaka"
      arrow={<SvgIconArrowLeft />}
      iconPosition="before"
    />

    <figure className="product__ingredients__modal__main__list">
      <ImageSingleItem className="lazyautosizes lazyloaded" srcSet={srcSet} />
    </figure>
  </div>
)
