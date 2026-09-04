import Container from './components/Container/Container'
import ProductCard from './components/ProductCard/ProductCard'
import { featuredProduct } from './data/products'

const App = () => {
  return (
    <Container
      className="bg-[#f6f6f0] px-5 py-8 text-[#173326] [background-image:linear-gradient(rgba(29,107,80,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(29,107,80,0.06)_1px,transparent_1px)] [background-size:32px_32px] [font-family:var(--font-interface)] sm:px-8 lg:px-12"
    >
      <main className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center">
        <section
          aria-labelledby="showcase-title"
          className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(20rem,0.65fr)] lg:gap-16"
        >
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-[#1d6b50]">Featured product</p>
            <h1
              id="showcase-title"
              className="mt-4 max-w-lg text-4xl leading-[1.05] text-[#173326] [font-family:var(--font-display)] sm:text-5xl"
            >
              Work with a little more clarity.
            </h1>
            <p className="mt-5 max-w-md text-base leading-7 text-[#537061]">
              A focused home for the plans, notes, and progress that keep a team moving.
            </p>
            <div aria-hidden="true" className="mt-7 h-px w-20 bg-[#e96d50]" />
          </div>

          <div className="flex justify-center lg:justify-end">
            <ProductCard product={featuredProduct} />
          </div>
        </section>
      </main>
    </Container>
  )
}

export default App