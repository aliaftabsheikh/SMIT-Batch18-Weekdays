const links = [
  { label: 'Models', href: '#models' },
  { label: 'Craftsmanship', href: '#craftsmanship' },
  { label: 'Ownership', href: '#ownership' },
  { label: 'Stories', href: '#stories' },
]

const Navbar = () => {
  return (
    <nav aria-label="Main navigation" className="border-b border-white/20 bg-zinc-950 py-5 text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-x-5 gap-y-4 px-6 sm:px-10 lg:px-16">
        <a href="#top" className="leading-none transition-opacity hover:opacity-75">
          <span className="block text-lg font-semibold uppercase">Velocity</span>
          <span className="mt-1 block text-[9px] uppercase text-white/55">Automotive</span>
        </a>

        <ul className="order-3 flex w-full items-center justify-between border-t border-white/15 pt-4 text-[10px] font-semibold uppercase text-white/75 sm:order-none sm:w-auto sm:gap-7 sm:border-0 sm:pt-0">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="transition-colors hover:text-red-400 focus:outline-none focus:text-red-400">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#configure"
          className="inline-flex items-center gap-3 border border-white/70 px-4 py-2 text-[10px] font-bold uppercase transition hover:border-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Configure
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </nav>
  )
}

export default Navbar