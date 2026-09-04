const ProductSkeleton = () => (
  <section className="product-skeleton" aria-busy="true" aria-label="Loading product catalog">
    <span className="sr-only">Loading product catalog</span>
    <aside className="product-skeleton__filters" aria-hidden="true">
      <div className="product-skeleton__filter-line product-skeleton__filter-line--heading" />
      <div className="product-skeleton__filter-line" />
      <div className="product-skeleton__filter-line product-skeleton__filter-line--short" />
      <div className="product-skeleton__filter-line" />
    </aside>
    <div className="product-skeleton__grid" aria-hidden="true">
      {Array.from({ length: 9 }, (_, index) => (
        <article className="product-skeleton__card" key={index}>
          <div className="product-skeleton__image" />
          <div className="product-skeleton__body">
            <div className="product-skeleton__line product-skeleton__line--short" />
            <div className="product-skeleton__line" />
            <div className="product-skeleton__line product-skeleton__line--medium" />
            <div className="product-skeleton__footer">
              <div className="product-skeleton__price" />
              <div className="product-skeleton__button" />
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
)

export default ProductSkeleton