import { ArrowUpRight } from "lucide-react"
import Button from "../Button/Button"
import Rating from "../Rating/Rating"
import "./ProductCard.css"

function ProductCard({ badge, category, description, image, price, rating, reviews, title }) {
  return (
    <article className="product-card">
      <div className="product-card__image-wrap">
        <img
          className="product-card__image"
          alt={title}
          decoding="async"
          loading="lazy"
          src={image}
        />
        {badge && <span className="product-card__badge">{badge}</span>}
      </div>

      <div className="product-card__content">
        <p className="product-card__category">{category}</p>
        <h3 className="product-card__title">{title}</h3>
        <p className="product-card__description">{description}</p>

        <div className="product-card__metadata">
          <p className="product-card__price">{price}</p>
          <Rating rating={rating} reviews={reviews} />
        </div>

        <Button className="product-card__button" variant="quiet" aria-label={`Add ${title} to basket`}>
          Add to basket
          <ArrowUpRight aria-hidden="true" size={16} strokeWidth={2.25} />
        </Button>
      </div>
    </article>
  )
}

export default ProductCard