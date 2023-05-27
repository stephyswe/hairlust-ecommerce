import { FC, ReactNode } from 'react'
import cn from 'clsx'
import { useRouter } from 'next/router'

import { MobileMenu } from './components/MobileMenu'
import { SearchMenu } from './components/SearchMenu'

const NavbarRoot: FC<{
  hasScrolled: any
  searchOpen: any
  searchToggle: any
  menuToggle: any
  menuOpen: boolean
  children?: ReactNode
}> = ({
  hasScrolled,
  menuToggle,
  menuOpen,
  searchOpen,
  searchToggle,
  children,
}) => {
  const router = useRouter()

  return (
    <div id="shopify-section-header" className="shopify-section">
      <header
        className={cn(
          'header',
          hasScrolled ? 'is-fixed' : '',
          router.asPath === '/' ? 'header--light' : '',
          router.route === '/products/[slug]' ? 'header--solid' : ''
        )}
      >
        {children}
      </header>
      <MobileMenu isOpen={menuOpen} onClose={menuToggle} />
      <SearchMenu isOpen={searchOpen} onClose={searchToggle} />
    </div>
  )
}

export default NavbarRoot
