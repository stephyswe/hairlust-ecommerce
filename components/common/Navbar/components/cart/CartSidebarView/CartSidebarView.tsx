import { FC, useRef } from 'react'
import cn from 'clsx'

import { CartMenuCrossSell, CartMenuSidebar } from '../../Cart'
import { useClickAway } from 'react-use'

export const CartSidebarView = ({ cartRef, isOpen, onClose }: any) => {
  const componentRef = useRef(null)

  useClickAway(componentRef, () => {
    if (!isOpen) return
    onClose()
  })
  return (
    <div id="shopify-section-cart" className="shopify-section">
      <div className={cn('cart-drawer', isOpen ? 'is-open' : '')}>
        <CartMenuCrossSell />
        <CartMenuSidebar cartRef={cartRef} onClose={onClose} />
      </div>
    </div>
  )
}
