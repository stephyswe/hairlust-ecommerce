import cn from 'clsx'
import s from './Sidebar.module.css'
import { useEffect, useRef } from 'react'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import { ModalOpen } from '../../common/Layout/ModalParts'
import { CartMenuCrossSell } from '../../common/Navbar/components/Cart'
interface SidebarProps {
  children: any
  onClose: () => void
  sidebarView: any
  className: string
}

const Sidebar: React.FC<SidebarProps> = ({
  children,
  onClose,
  sidebarView,
  className,
}) => {
  const sidebarRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const contentRef = useRef() as React.MutableRefObject<HTMLDivElement>

  const onKeyDownSidebar = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.code === 'Escape') {
      onClose()
    }
  }

  useEffect(() => {
    /* if (sidebarRef.current) {
      sidebarRef.current.focus()
    } */

    const contentElement = contentRef.current

    if (sidebarView !== '') {
      disableBodyScroll(contentElement, { reserveScrollBarGap: true })
    }

    return () => {
      clearAllBodyScrollLocks()
    }
  }, [sidebarView])

  return (
    <div
      id="shopify-section-cart"
      className="shopify-section"
      ref={sidebarRef}
      onKeyDown={onKeyDownSidebar}
      tabIndex={1}
    >
      <ModalOpen className={className} open={sidebarView !== ''}>
        <CartMenuCrossSell />
        <div ref={contentRef} className="cart-drawer__inner">
          {children}
        </div>
      </ModalOpen>
    </div>
  )
}

export default Sidebar
