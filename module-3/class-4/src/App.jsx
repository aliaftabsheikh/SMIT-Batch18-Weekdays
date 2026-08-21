import { MotionConfig } from "framer-motion"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import ProductCard from "./components/ProductCard/ProductCard"
import Testimonials from "./components/Testimonials/Testimonials"
import { products } from "./constants/data/ProductData"
import "./App.css"

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="app">
        <Navbar />
        <main>
          <Hero products={products.slice(0, 3)} />

          <section className="catalog section" id="shop" aria-labelledby="shop-title">
            <div className="content-shell">
              <div className="catalog__header">
                <div className="section-heading">
                  <p className="section-heading__eyebrow">The living edit</p>
                  <h2 id="shop-title">Objects that pull their weight.</h2>
                  <p>Useful things for work, wandering, and the quiet hours in between.</p>
                </div>
                <p className="catalog__count">10 objects / one good reason each</p>
              </div>

              <div className="catalog__grid">
                {products.map((product) => (
                  <ProductCard  key={product.} {...product} />
                ))}
              </div>
            </div>
          </section>

          <Testimonials />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}

export default App