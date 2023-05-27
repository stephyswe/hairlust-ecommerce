import { useState } from 'react'
import cn from 'clsx'
import { handleOpen } from '..'

export const ProductGuide = ({ guide, title }: any) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <section className="product__guide section section--medium product__content">
      <div className="product__guide__inner">
        <div className="product__guide__content section container">
          <h2 className="title title--small">{title}</h2>
          <article
            className={cn(
              'product__guide__list rte js-list',
              isOpen ? 'is-extended' : ''
            )}
          >
            {guide}
          </article>
          <button
            type="button"
            onClick={() => setOpen(!isOpen)}
            className={cn(
              'read-more-button js-mobileToggleBtn',
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
        </div>
      </div>
    </section>
  )
}
