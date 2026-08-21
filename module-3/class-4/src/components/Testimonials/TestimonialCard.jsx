import Rating from "../Rating/Rating"

function TestimonialCard({ testimonial }) {
  return (
    <article
      className={`testimonial-card${testimonial.featured ? " testimonial-card--featured" : ""}`}
    >
      <Rating rating={testimonial.rating} showValue={false} size={15} />
      <blockquote className="testimonial-card__quote">&ldquo;{testimonial.quote}&rdquo;</blockquote>
      <footer className="testimonial-card__author">
        <span className="testimonial-card__avatar" aria-hidden="true">
          {testimonial.initials}
        </span>
        <span>
          <strong>{testimonial.author}</strong>
          <small>{testimonial.role}</small>
        </span>
      </footer>
    </article>
  )
}

export default TestimonialCard