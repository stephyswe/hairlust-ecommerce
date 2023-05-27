import '@assets/index.css'
//import '@assets/main.css'
import '@assets/chrome-bug.css'
//import 'keen-slider/keen-slider.min.css'
import '@assets/instagram.css'

//pages
import '@assets/pages/collection.css'
import '@assets/pages/product.css'
import '@assets/pages/about.css'

// lightbox
import '@assets/lightbox.css'

import { FC, ReactNode, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { Head } from '@components/common'
import { ManagedUIContext } from '@components/ui/context'

import { ModalDefProvider } from '../config/contexts/modalDefProduct'

const Noop: FC<{ children?: ReactNode }> = ({ children }) => <>{children}</>

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <Head />
      <ModalDefProvider>
        <Layout pageProps={pageProps}>
          <Component {...pageProps} />
        </Layout>
      </ModalDefProvider>
    </>
  )
}
