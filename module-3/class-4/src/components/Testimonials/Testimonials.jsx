import { testimonials } from "../../constants/data/SiteData"
import TestimonialCard from "./TestimonialCard"
import "./Testimonials.css"

function Testimonials() {
  return (
    <section className="testimonials section" id="stories" aria-labelledby="stories-title">
      <div className="content-shell testimonials__layout">
        <div className="section-heading testimonials__heading">
          <p className="section-heading__eyebrow">Stories from the everyday</p>
          <h2 id="stories-title">Things worth taking with you.</h2>
          <p>Thoughtful objects earn their place one ordinary day at a time.</p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials