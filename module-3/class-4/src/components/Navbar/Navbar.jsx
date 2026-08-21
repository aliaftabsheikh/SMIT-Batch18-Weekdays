import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { navigationLinks, site } from "../../constants/data/SiteData"
import Button from "../Button/Button"
import "./Navbar.css"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const firstMenuLinkRef = useRef(null)
     
  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined
    }

    const focusTimer = window.setTimeout(() => firstMenuLinkRef.current?.focus(), 0)
    const handleKeyDown = (event) => {
      if (event.key !== "Escape") {
        return
      }

      event.preventDefault()
      setIsMenuOpen(false)
      window.setTimeout(() => menuButtonRef.current?.focus(), 0)
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      window.clearTimeout(focusTimer)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isMenuOpen])

  return (
    <header className="site-header">
      <nav className="navbar content-shell" aria-label="Primary navigation">
        <a className="navbar__brand" href="#home" onClick={closeMenu}>
          {site.name}
        </a>

        <div className="navbar__links">
          {navigationLinks.map((link) => (
            <a className="navbar__link" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <Button className="navbar__cta" href="#shop">
          Shop the edit
          <ArrowUpRight aria-hidden="true" size={16} strokeWidth={2.2} />
        </Button>

        <Button
          className="navbar__menu-toggle"
          iconOnly
          ref={menuButtonRef}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          {isMenuOpen ? <X aria-hidden="true" size={21} /> : <Menu aria-hidden="true" size={21} />}
        </Button>
      </nav>

      {isMenuOpen && (
        <div className="navbar__mobile-panel" id="mobile-navigation">
          <div className="navbar__mobile-links content-shell">
            {navigationLinks.map((link, index) => (
              <a
                className="navbar__mobile-link"
                href={link.href}
                key={link.href}
                onClick={closeMenu}
                ref={index === 0 ? firstMenuLinkRef : undefined}
              >
                {link.label}
              </a>
            ))}
            <Button className="navbar__mobile-cta" href="#shop" onClick={closeMenu}>
              Shop the edit
              <ArrowUpRight aria-hidden="true" size={16} strokeWidth={2.2} />
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar