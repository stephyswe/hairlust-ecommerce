import { useState } from 'react'
import cn from 'clsx'

import { handleOpen } from '../..'

export const ProductIngredientItem = ({ title, subtitle }: any) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <li
      onClick={() => setOpen(!isOpen)}
      className={cn('harmonica__item js-item', handleOpen(isOpen))}
    >
      <button type="button" className="harmonica__item__title js-title">
        <span className="harmonica__item__title__text">{title}</span>
        <div
          className={cn(
            'icon icon--plus-minus icon--plus-minus--dark js-icon',
            handleOpen(isOpen)
          )}
        >
          <div className="icon--plus-minus__line"></div>
          <div className="icon--plus-minus__line"></div>
        </div>
      </button>
      <div className="harmonica__item__content">{subtitle}</div>
    </li>
  )
}

export const ProductFaqItem = ({ title, subtitle }: any) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <li
      onClick={() => setOpen(!isOpen)}
      className={cn('harmonica__item js-item', handleOpen(isOpen))}
    >
      <div className="harmonica__item__title js-title">
        <span className="harmonica__item__title__text">{title}</span>
        <div
          className={cn(
            'icon icon--plus-minus icon--plus-minus--dark js-icon',
            handleOpen(isOpen)
          )}
        >
          <div className="icon--plus-minus__line"></div>
          <div className="icon--plus-minus__line"></div>
        </div>
      </div>

      <div className="harmonica__item__content rte">{subtitle}</div>
    </li>
  )
}
