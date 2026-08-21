import { ArrowUpRight } from "lucide-react"
import { footerLinkGroups, site } from "../../constants/data/SiteData"
import "./Footer.css"

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="content-shell site-footer__masthead">
        <div className="site-footer__intro">
          <p className="site-footer__eyebrow">Stay in the loop</p>
          <a className="site-footer__brand" href="#home">
            {site.name}
          </a>
        </div>

        <div className="site-footer__lead">
          <p>{site.statement}</p>
          <a className="site-footer__email" href={`mailto:${site.email}`}>
            {site.email}
            <ArrowUpRight aria-hidden="true" size={17} strokeWidth={2.25} />
          </a>
        </div>
      </div>

      <div className="content-shell site-footer__layout">
        <div className="site-footer__links" aria-label="Footer navigation">
          {footerLinkGroups.map((group) => (
            <div className="site-footer__link-group" key={group.title}>
              <h2>{group.title}</h2>
              {group.links.map((link) => (
                <a href={link.href} key={link.label}>
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="content-shell site-footer__bottom">
        <p>&copy; {new Date().getFullYear()} {site.name}. Good things, kept close.</p>
        <a className="site-footer__top-link" href="#home">
          Back to top
          <ArrowUpRight aria-hidden="true" size={16} strokeWidth={2.25} />
        </a>
      </div>
    </footer>
  )
}

export default Footer