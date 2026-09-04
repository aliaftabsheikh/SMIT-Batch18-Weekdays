import { PackageOpen, RefreshCw, Search, X } from 'lucide-react'
import { useDeferredValue, useState } from 'react'
import './Product.css'
import ProductCard from './ProductCard'
import ProductFilters from './ProductFilters'
import ProductSkeleton from './ProductSkeleton'
import useProducts from '../../hooks/useProducts'

const Product = ({ onAddToCart = () => {} }) => {
  const { products, status, error, retry } = useProducts()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategories, setSelectedCategories] = useState([])
  const [priceLimit, setPriceLimit] = useState(null)
  const [minRating, setMinRating] = useState(0)
  const [sortBy, setSortBy] = useState('featured')
  const [favoriteIds, setFavoriteIds] = useState([])
  const [notice, setNotice] = useState('')
  const deferredSearchQuery = useDeferredValue(searchQuery)

  const categories = [...new Set(products.map((product) => product.category).filter(Boolean))]
  const maxPrice = Math.ceil(Math.max(1, ...products.map((product) => Number(product.price) || 0)))
  const normalizedSearchQuery = deferredSearchQuery.trim().toLowerCase()
  const visiblePriceLimit = priceLimit ?? maxPrice
  const isFiltered = Boolean(searchQuery.trim()) || selectedCategories.length > 0 || priceLimit !== null || minRating > 0

  const visibleProducts = products.filter((product) => {
    const productTitle = String(product.title || '').toLowerCase()
    const productCategory = String(product.category || '').toLowerCase()
    const matchesSearch = !normalizedSearchQuery
      || productTitle.includes(normalizedSearchQuery)
      || productCategory.includes(normalizedSearchQuery)
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category)
    const matchesPrice = Number(product.price) <= visiblePriceLimit
    const matchesRating = (Number(product.rating?.rate) || 0) >= minRating

    return matchesSearch && matchesCategory && matchesPrice && matchesRating
  })

  if (sortBy === 'price-low') {
    visibleProducts.sort((firstProduct, secondProduct) => firstProduct.price - secondProduct.price)
  }

  if (sortBy === 'price-high') {
    visibleProducts.sort((firstProduct, secondProduct) => secondProduct.price - firstProduct.price)
  }

  if (sortBy === 'rating') {
    visibleProducts.sort((firstProduct, secondProduct) => {
      const firstRating = Number(firstProduct.rating?.rate) || 0
      const secondRating = Number(secondProduct.rating?.rate) || 0

      return secondRating - firstRating
    })
  }

  const handleCategoryChange = (category) => {
    setSelectedCategories((currentCategories) => (
      currentCategories.includes(category)
        ? currentCategories.filter((currentCategory) => currentCategory !== category)
        : [...currentCategories, category]
    ))
  }

  const handleResetFilters = () => {
    setSearchQuery('')
    setSelectedCategories([])
    setPriceLimit(null)
    setMinRating(0)
    setSortBy('featured')
  }

  const handleFavoriteToggle = (productId) => {
    setFavoriteIds((currentFavoriteIds) => (
      currentFavoriteIds.includes(productId)
        ? currentFavoriteIds.filter((currentId) => currentId !== productId)
        : [...currentFavoriteIds, productId]
    ))
  }

  const handleAddToCart = (product) => {
    onAddToCart(product)
    setNotice(`${product.title} has been added to your bag.`)
  }

  const resultLabel = `${visibleProducts.length} ${visibleProducts.length === 1 ? 'product' : 'products'}`

  return (
    <main className="product-page" id="catalog">
      <section className="product-page__intro" aria-labelledby="catalog-title">
        <div>
          <p className="product-page__eyebrow">Curated essentials</p>
          <h1 id="catalog-title">The everyday edit</h1>
          <p className="product-page__description">Thoughtful finds for the things you reach for most.</p>
        </div>
        <p className="product-page__catalog-note">New pieces, simply considered.</p>
      </section>

      {status === 'loading' && <ProductSkeleton />}

      {status === 'error' && (
        <section className="product-feedback" role="alert">
          <RefreshCw aria-hidden="true" size={28} />
          <h2>We could not load the catalog</h2>
          <p>{error}</p>
          <button className="product-feedback__retry" type="button" onClick={retry}>
            Try again
          </button>
        </section>
      )}

      {status === 'success' && (
        <>
          <section className="product-toolbar" aria-label="Browse products">
            <div className="product-search">
              <Search aria-hidden="true" size={19} />
              <label className="sr-only" htmlFor="product-search">Search products</label>
              <input
                id="product-search"
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search products"
              />
              {searchQuery && (
                <button
                  className="product-search__clear"
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear product search"
                  title="Clear search"
                >
                  <X aria-hidden="true" size={16} />
                </button>
              )}
            </div>

            <div className="product-toolbar__actions">
              <p className="product-toolbar__count" aria-live="polite">{resultLabel}</p>
              <label className="product-toolbar__sort" htmlFor="product-sort">
                <span>Sort</span>
                <select id="product-sort" value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
                  <option value="featured">Featured</option>
                  <option value="rating">Top rated</option>
                  <option value="price-low">Price: low to high</option>
                  <option value="price-high">Price: high to low</option>
                </select>
              </label>
            </div>
          </section>

          <div className="product-catalog">
            <ProductFilters
              categories={categories}
              selectedCategories={selectedCategories}
              priceLimit={priceLimit}
              maxPrice={maxPrice}
              minRating={minRating}
              isFiltered={isFiltered}
              onCategoryChange={handleCategoryChange}
              onPriceLimitChange={setPriceLimit}
              onMinRatingChange={setMinRating}
              onReset={handleResetFilters}
            />

            <section className="product-catalog__main" aria-label="Product results">
              {notice && (
                <div className="product-notice" role="status">
                  <span>{notice}</span>
                  <button type="button" onClick={() => setNotice('')} aria-label="Dismiss cart update" title="Dismiss">
                    <X aria-hidden="true" size={16} />
                  </button>
                </div>
              )}

              {visibleProducts.length > 0 ? (
                <div className="product-grid">
                  {visibleProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      isFavorite={favoriteIds.includes(product.id)}
                      onAddToCart={handleAddToCart}
                      onToggleFavorite={handleFavoriteToggle}
                    />
                  ))}
                </div>
              ) : (
                <section className="product-empty">
                  <PackageOpen aria-hidden="true" size={34} />
                  <h2>{isFiltered ? 'No pieces match those filters' : 'The catalog is empty'}</h2>
                  <p>{isFiltered ? 'Clear a filter or broaden your search to see more.' : 'Please check back again soon.'}</p>
                  {isFiltered && (
                    <button className="product-empty__reset" type="button" onClick={handleResetFilters}>
                      Clear filters
                    </button>
                  )}
                </section>
              )}
            </section>
          </div>
        </>
      )}
    </main>
  )
}

export default Product