const ProductCard = ({ product }) => {
  return (
    <article
      id={product.id}
      className="group w-full max-w-md animate-[card-enter_650ms_cubic-bezier(0.22,1,0.36,1)] overflow-hidden rounded-lg border border-[#d8dfd8] bg-white p-3 text-[#173326] shadow-[0_18px_50px_rgba(36,55,42,0.12)] transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(36,55,42,0.18)] motion-reduce:animate-none motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <div className="relative aspect-16/10 overflow-hidden rounded-md bg-[#dce7e0]">
        <img
          src={product.image.src}
          alt={product.image.alt}
          className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
        <div className="absolute inset-0 bg-[#163d2e]/0 transition duration-300 group-hover:bg-[#163d2e]/5 motion-reduce:transition-none" />
        <span className="absolute left-3 top-3 border border-white/80 bg-white/90 px-2 py-1 text-xs font-semibold text-[#1d6b50]">
          Featured
        </span>
      </div>

      <div className="px-2 pb-2 pt-5">
        <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
          <p className="text-sm font-semibold text-[#1d6b50]">{product.category}</p>
          <span className="border border-[#f3b09f] bg-[#fff1ec] px-2 py-1 text-xs font-semibold text-[#9d3e2a]">
            {product.availability}
          </span>
        </div>

        <h2 className="mt-4 text-3xl leading-tight text-[#173326] [font-family:var(--font-display)]">
          {product.name}
        </h2>
        <p className="mt-3 max-w-sm text-base leading-7 text-[#537061]">
          {product.description}
        </p>

        <ul className="mt-5 grid gap-2 border-y border-[#e4e9e3] py-4 text-sm text-[#365444]">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <span aria-hidden="true" className="h-2 w-2 shrink-0 bg-[#e96d50]" />
              {feature}
            </li>
          ))}
        </ul>

        <footer className="mt-5 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-3xl leading-none text-[#173326] [font-family:var(--font-display)]">
              {product.price}
            </p>
            <p className="mt-2 text-sm text-[#698173]">{product.billingPeriod}</p>
          </div>

          <div className="border-l-2 border-[#1d6b50] pl-3 text-right">
            <p className="text-xs font-semibold text-[#537061]">Customer rating</p>
            <p className="mt-1 text-lg font-semibold leading-none text-[#173326]">
              {product.rating}/5
            </p>
            <p className="mt-1 text-xs text-[#698173]">{product.reviewCount}</p>
          </div>
        </footer>
      </div>
    </article>
  )
}

export default ProductCard