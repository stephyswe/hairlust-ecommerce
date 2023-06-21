import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { MutableRefObject, useEffect, useRef, useState } from 'react'
import { useClickAway } from 'react-use'
import throttle from 'lodash.throttle'
import cn from 'clsx'

// import { CommerceProvider } from '@framework'
import { Navbar } from '@components/common'
import { useAcceptCookies } from '@lib/hooks/useAcceptCookies'
import { LoadingDots } from '@components/ui'
/* import type { Page } from '@commerce/types/page'
import type { Category } from '@commerce/types/site' */

import { NavbarLinkData } from '../../../pages/api/static/navbar'
import { ShopifyFooter } from '../../shopify/Footer'
import { ShopifyFeedInstagram } from '../../shopify/FeedInstagram'
import { ShopifyNewsLetter } from '../../shopify/NewsLetter'
import { useModalDef } from '../../../config/contexts/modalDefProduct'
import { ModalDefault, ModalLightBox, ModalIngredient } from './Modal'

import { modalData } from '../../../pages/api/static/navbar/modal'
import { CartSidebarView } from '../Navbar/components/cart/CartSidebarView/CartSidebarView'
import { dataInstagramFeed } from '../../../pages/api/static/shopify/instagram'
import Cookie from '@components/cookie'

const Loading = () => (
  <div className="w-80 h-80 flex items-center text-center justify-center p-3">
    <LoadingDots />
  </div>
)

const dynamicProps = {
  loading: Loading,
}

/* const SignUpView = dynamic(
  () => import('@components/deprecated/auth/SignUpView'),
  {
    ...dynamicProps,
  }
)

const ForgotPassword = dynamic(
  () => import('@components/deprecated/auth/ForgotPassword'),
  {
    ...dynamicProps,
  }
)

const Modal = dynamic(() => import('@components/ui/Modal'), {
  ...dynamicProps,
  ssr: false,
}) */

interface Props {
  pageProps: {
    pages?: any[]
    categories: any[]
  }
  children?: React.ReactNode
}

const ModalView: React.FC = () => {
  const { modalName, modalIndex } = useModalDef()

  const modalComponents = {
    ingredients: {
      component: ModalIngredient,
      className: 'product__ingredients__modal modal-slidein js-modal',
      data: modalData.ingredients,
      open: modalName === 'ingredients',
    },
    shipping: {
      component: ModalDefault,
      className: 'modal-slidein js-modal',
      data: modalData.shipping,
      open: modalName === 'shipping',
    },
    lightbox: {
      component: ModalLightBox,
      className: 'product__lightbox',
      data: modalData.lightbox,
      index: modalIndex,
      open: modalName === 'lightbox',
    },
  } as any

  return (
    <>
      {Object.keys(modalComponents).map((modalName) => {
        const { component: ModalComponent, ...props } =
          modalComponents[modalName]
        return <ModalComponent key={modalName} {...props} />
      })}
    </>
  )
}

const ModalUI: React.FC = () => <ModalView />

export const handleHtmlBodyOverFlow = (item: any) => {
  item
    ? (document.body.style.overflow = '')
    : (document.body.style.overflow = 'hidden')
}

const Layout: React.FC<Props> = ({
  children,
  pageProps: { categories = [] },
}) => {
  const [hasScrolled, setHasScrolled] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const cartToggle = () => {
    handleHtmlBodyOverFlow(cartOpen)
    setCartOpen(!cartOpen)
  }

  const { acceptedCookies, onAcceptCookies } = useAcceptCookies()
  const { locale = 'en-US' } = useRouter()
  const navBarlinks = categories.slice(0, 2).map((c) => ({
    label: c.name,
    href: `/search/${c.slug}`,
  }))

  const componentRef = useRef(null)

  useClickAway(componentRef, () => {
    if (!cartOpen) return
    cartToggle()
  })

  useEffect(() => {
    const handleScroll = throttle(() => {
      const offset = 0
      const { scrollTop } = document.documentElement
      const scrolled = scrollTop > offset

      if (hasScrolled !== scrolled) {
        setHasScrolled(scrolled)
      }
    }, 200)

    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [hasScrolled])

  return (
    <>
      <Navbar
        hasScrolled={hasScrolled}
        links={NavbarLinkData}
        cartToggle={cartToggle}
      />
      <main
        role="main"
        className={cn('page-wrapper', hasScrolled ? 'header-fixed' : '')}
      >
        {children}
      </main>
      <ShopifyFeedInstagram data={dataInstagramFeed} />
      <ShopifyNewsLetter />
      <ShopifyFooter />

      <CartSidebarView
        cartRef={componentRef as MutableRefObject<null>}
        isOpen={cartOpen}
        onClose={cartToggle}
      />

      {/* <Footer pages={pageProps.pages} /> */}
      <ModalUI />
      <Cookie />
      {/* <FeatureBar
        title="This site uses cookies to improve your experience. By clicking, you agree to our Privacy Policy."
        hide={acceptedCookies}
        action={
          <Button className="mx-5" onClick={() => onAcceptCookies()}>
            Accept cookies
          </Button>
        }
      /> */}
      {/* </div> */}
    </>
  )
}

export default Layout
