import { Heart, ShoppingBag, Star } from 'lucide-react'
import { useState } from 'react'

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

const ProductCard = ({ product, isFavorite, onAddToCart, onToggleFavorite }) => {
  const [hasImageError, setHasImageError] = useState(false)
  const rating = Number(product.rating?.rate) || 0
  const reviewCount = Number(product.rating?.count) || 0

  return (
    <article className="product-card">
      <div className="product-card__media">
        {rating >= 4.5 && <span className="product-card__badge">Top rated</span>}
        <button
          className={`product-card__favorite${isFavorite ? ' is-active' : ''}`}
          type="button"
          onClick={() => onToggleFavorite(product.id)}
          aria-label={isFavorite ? `Remove ${product.title} from saved items` : `Save ${product.title}`}
          aria-pressed={isFavorite}
          title={isFavorite ? 'Remove from saved items' : 'Save item'}
        >
          <Heart aria-hidden="true" size={18} fill={isFavorite ? 'currentColor' : 'none'} />
        </button>

        {hasImageError ? (
          <div className="product-card__image-fallback" role="img" aria-label={`${product.title} image unavailable`}>
            Image unavailable
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            onError={() => setHasImageError(true)}
          />
        )}
      </div>

      <div className="product-card__body">
        <p className="product-card__category">{product.category}</p>
        <h2 className="product-card__title">{product.title}</h2>
        <div className="product-card__rating" aria-label={`${rating.toFixed(1)} out of 5 stars from ${reviewCount} reviews`}>
          <Star aria-hidden="true" size={16} fill="currentColor" />
          <span>{rating.toFixed(1)}</span>
          <span className="product-card__reviews">({reviewCount})</span>
        </div>
        <div className="product-card__footer">
          <strong>{currencyFormatter.format(product.price)}</strong>
          <button className="product-card__cart" type="button" onClick={() => onAddToCart(product)}>
            <ShoppingBag aria-hidden="true" size={17} />
            <span>Add to bag</span>
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard