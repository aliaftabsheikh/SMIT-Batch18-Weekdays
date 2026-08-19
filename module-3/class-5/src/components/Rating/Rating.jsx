import { Star } from "lucide-react"
import "./Rating.css"

function Rating({ className = "", rating, reviews, showValue = true, size = 14 }) {
  const numericRating = Number(rating)
  const visibleStars = Math.max(0, Math.min(5, Math.round(numericRating)))
  const reviewLabel = reviews?.replace(/[()]/g, "")
  const label = reviews
    ? `Rated ${numericRating} out of 5 from ${reviewLabel}`
    : `Rated ${numericRating} out of 5`

  return (
    <span className={["rating", className].filter(Boolean).join(" ")} role="img" aria-label={label}>
      <span className="rating__stars" aria-hidden="true">
        {Array.from({ length: 5 }, (_, index) => (
          <Star fill={index < visibleStars ? "currentColor" : "none"} key={index} size={size} strokeWidth={1.75} />
        ))}
      </span>
      {showValue && <span className="rating__value" aria-hidden="true">{rating}</span>}
      {reviews && <span className="rating__reviews" aria-hidden="true">{reviews}</span>}
    </span>
  )
}

export default Rating