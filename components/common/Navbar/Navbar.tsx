import { FC, useState } from 'react'
import NavbarRoot from './NavbarRoot'
import { ProdItem } from './components/LinkItem'
import { NavButton, NavUserButton } from './components/NavButton'
import { HairLustLogo } from './components/Logo'
import { NavCart } from './components/Cart'
import { NavAuth } from './components/Auth'

/*
link: string; srcSet: string; }[]; }'.
      Types of property 'link' are incompatible.
        Type '{ title: string; href: string; }[]' is not assignable to type '{ title: string; link: string; }[]'.
          Property 'link' is missing in type '{ title: string; href: string; }' but required in type '{ title: string; link: string; }'.ts(2322)
Navbar.tsx(11, 26): 'link' is declared here.
*/

export type NavbarLinkType = Array<{
  nav: { label: string; href: string }
  link: { title: string; href: string }[]
  items: { title: string; subtitle: string; link: string; srcSet: string }[]
}>

interface NavbarProps {
  links: NavbarLinkType
  cartToggle: () => void
  hasScrolled: boolean
}

const Navbar: FC<NavbarProps> = ({ hasScrolled, links, cartToggle }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const menuToggle = () => setMenuOpen(!menuOpen)
  const searchToggle = () => setSearchOpen(!searchOpen)

  return (
    <NavbarRoot
      hasScrolled={hasScrolled}
      menuOpen={menuOpen}
      menuToggle={menuToggle}
      searchOpen={searchOpen}
      searchToggle={searchToggle}
    >
      <div className="header__inner container container--full">
        <NavButton btnOnClick={menuToggle} />
        <HairLustLogo />
        <nav className="header__nav">
          <ul className="header__nav__list">
            {links.map(({ nav, link, items }) => (
              <ProdItem key={link} nav={nav} link={link} items={items} />
            ))}
          </ul>
        </nav>
        <div className="header__user">
          <NavUserButton title="Sök" onClick={searchToggle} />
          <NavAuth />
          <NavCart onClick={cartToggle} />
        </div>
      </div>
    </NavbarRoot>
  )
}

export default Navbar
