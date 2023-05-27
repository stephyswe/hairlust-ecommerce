import { NavbarLinkType } from '../../../../components/common/Navbar/Navbar'
import { omOssLinks, omOssItems } from './about-us'
import { hairTalkLinks, hairTalkItems } from './hairtalk'
import { ProdLinks, ProdItems } from './products'

export const NavbarLinkData: NavbarLinkType = [
  {
    nav: {
      label: 'Hem',
      href: '/',
    },
    link: [],
    items: [],
  },
  {
    nav: {
      label: 'Produkter',
      href: '/collections/all',
    },
    link: ProdLinks,
    items: ProdItems,
  },
  {
    nav: {
      label: 'Om oss',
      href: '/pages/about-overview',
    },
    link: omOssLinks,
    items: omOssItems,
  },
  {
    nav: {
      label: 'Hair Talk',
      href: '/pages/hair-talk',
    },
    link: hairTalkLinks,
    items: hairTalkItems,
  },
]
