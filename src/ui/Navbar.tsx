import { Link, NavLink, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

import iconHamburger from "../assets/icon-hamburger.svg"
import iconClose from "../assets/icon-close.svg"
import logoRoom from "../assets/logo.svg"

import navbarStyles from "../ui/Navbar.module.css"
import NavLinkStyles from "../ui/NavLink.module.css"

export function Navbar() {
  const [navbarVisibility, setNavbarVisibility] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { pathname } = useLocation()
  const isInAboutOrContactPath = pathname == "/about" || pathname == "/contact"

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }
  const handleToggleNavVisibility = () => {
    setNavbarVisibility(!navbarVisibility)
  }

  const navLinkDefaultStyles = `relative before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-[0] before:h-1 before:bg-black before:lg:bg-white before:rounded-full before:duration-300 before:opacity-0 p-2 opacity-75 hover:opacity-100 ${isInAboutOrContactPath ? "before:lg:bg-black" : ""}`

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="absolute flex h-28 w-full items-center justify-center">
      <Link to="/">
        <img
          src={logoRoom}
          alt="logo room"
          className="h-4 lg:invisible lg:hidden"
        />
      </Link>
      <nav
        className={`fixed left-0 top-0 z-10 flex h-28 w-full -translate-y-full items-center justify-end gap-3 bg-white pr-6 text-sm font-bold leading-none duration-200 lg:relative lg:h-20 lg:translate-y-0 lg:justify-start lg:bg-transparent lg:px-16 lg:pr-0 lg:text-base lg:font-semibold lg:text-white ${
          navbarVisibility && navbarStyles.active
        } ${isInAboutOrContactPath && "lg:text-black"}`}
      >
        <Link to="/">
          <img
            src={logoRoom}
            alt="logo room"
            className={`hidden md:block mr-8 h-auto w-20 ${isInAboutOrContactPath && "invert"}`}
          />
        </Link>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${NavLinkStyles.active} ${navLinkDefaultStyles}`
              : navLinkDefaultStyles
          }
          to="/"
        >
          home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${NavLinkStyles.active} ${navLinkDefaultStyles}`
              : navLinkDefaultStyles
          }
          to="/shop"
        >
          shop
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${NavLinkStyles.active} ${navLinkDefaultStyles}`
              : navLinkDefaultStyles
          }
          to="/about"
        >
          about
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${NavLinkStyles.active} ${navLinkDefaultStyles}`
              : navLinkDefaultStyles
          }
          to="/contact"
        >
          contact
        </NavLink>
      </nav>
      <button
        className={`fixed left-0 z-10 ml-4 flex h-12 w-12 items-center justify-center  ${isScrolled && !navbarVisibility ? "bg-stone-700/30" : ""} ${(isInAboutOrContactPath && !navbarVisibility) && 'invert'} duration-300 lg:invisible`}
        onClick={handleToggleNavVisibility}
      >
        {navbarVisibility ? (
          <img src={iconClose} />
        ) : (
          <img src={iconHamburger} />
        )}
      </button>
    </header>
  )
}

export default Navbar
