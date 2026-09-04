import { RotateCcw, SlidersHorizontal } from 'lucide-react'

const formatPrice = (price) => `$${Math.round(price)}`

const FilterFields = ({
  categories,
  idPrefix,
  isFiltered,
  maxPrice,
  minRating,
  onCategoryChange,
  onMinRatingChange,
  onPriceLimitChange,
  onReset,
  priceLimit,
  selectedCategories,
}) => {
  const visiblePriceLimit = priceLimit ?? maxPrice

  return (
    <>
      <div className="product-filters__heading">
        <div>
          <p className="product-filters__eyebrow">Refine</p>
          <h2>Filters</h2>
        </div>
        <button className="product-filters__reset" type="button" onClick={onReset} disabled={!isFiltered}>
          <RotateCcw aria-hidden="true" size={15} />
          <span>Reset</span>
        </button>
      </div>

      <fieldset className="product-filters__group">
        <legend>Category</legend>
        <div className="product-filters__options">
          {categories.map((category) => {
            const categoryId = `${idPrefix}-${category.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}`

            return (
              <label className="product-filters__check" htmlFor={categoryId} key={category}>
                <input
                  id={categoryId}
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => onCategoryChange(category)}
                />
                <span>{category}</span>
              </label>
            )
          })}
        </div>
      </fieldset>

      <div className="product-filters__group">
        <div className="product-filters__label-row">
          <label htmlFor={`${idPrefix}-price`}>Price ceiling</label>
          <output htmlFor={`${idPrefix}-price`}>{formatPrice(visiblePriceLimit)}</output>
        </div>
        <input
          className="product-filters__range"
          id={`${idPrefix}-price`}
          type="range"
          min="0"
          max={maxPrice}
          step="5"
          value={visiblePriceLimit}
          onChange={(event) => onPriceLimitChange(Number(event.target.value))}
        />
        <div className="product-filters__range-labels" aria-hidden="true">
          <span>$0</span>
          <span>{formatPrice(maxPrice)}</span>
        </div>
      </div>

      <div className="product-filters__group">
        <label htmlFor={`${idPrefix}-rating`}>Minimum rating</label>
        <select
          id={`${idPrefix}-rating`}
          value={minRating}
          onChange={(event) => onMinRatingChange(Number(event.target.value))}
        >
          <option value="0">Any rating</option>
          <option value="3">3 stars & up</option>
          <option value="4">4 stars & up</option>
          <option value="4.5">4.5 stars & up</option>
        </select>
      </div>
    </>
  )
}

const ProductFilters = (props) => (
  <>
    <aside className="product-filters product-filters--desktop" aria-label="Product filters">
      <FilterFields {...props} idPrefix="desktop-filter" />
    </aside>

    <details className="product-filters product-filters--mobile">
      <summary>
        <SlidersHorizontal aria-hidden="true" size={18} />
        <span>Filter products</span>
      </summary>
      <div className="product-filters__mobile-content">
        <FilterFields {...props} idPrefix="mobile-filter" />
      </div>
    </details>
  </>
)

export default ProductFilters