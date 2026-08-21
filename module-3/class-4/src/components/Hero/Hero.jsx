import { ArrowDownRight } from "lucide-react"
import { hero } from "../../constants/data/SiteData"
import Button from "../Button/Button"
import "./Hero.css"

function Hero({ products }) {
  const [primaryProduct, secondaryProduct, detailProduct] = products

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero__layout content-shell">
        <div className="hero__copy">
          <p className="hero__eyebrow">
            {hero.eyebrow}
          </p>
          <h1 id="hero-title">
            {hero.titleLines.map((line) => <span key={line}>{line}</span>)}
          </h1>
          <p className="hero__summary">
            {hero.summary}
          </p>

          <div className="hero__actions">
            <Button href="#shop">
              Explore the edit
              <ArrowDownRight aria-hidden="true" size={18} strokeWidth={2.25} />
            </Button>
            <Button href="#stories" variant="quiet">Read the field notes</Button>
          </div>

          <p className="hero__proof">{hero.proof}</p>
        </div>

        <div className="hero__visual">
          <figure className="hero__image hero__image--primary">
            <img
              alt={primaryProduct.title}
              decoding="async"
              fetchPriority="high"
              loading="eager"
              src={primaryProduct.image}
            />
            <figcaption>{primaryProduct.title}</figcaption>
          </figure>
          <figure className="hero__image hero__image--secondary">
            <img alt={secondaryProduct.title} decoding="async" loading="eager" src={secondaryProduct.image} />
            <figcaption>{secondaryProduct.category}</figcaption>
          </figure>
          <figure className="hero__image hero__image--detail">
            <img alt={detailProduct.title} decoding="async" loading="eager" src={detailProduct.image} />
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Hero