import Navbar from './Navbar'

const Hero = () => {
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-zinc-950 text-white">
      <img
        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2400&q=90"
        alt="Performance car driving along a mountain road"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[62%_center]"
      />

      <div className="absolute inset-0 -z-10 bg-black/50" />

      <Navbar />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 sm:px-10 lg:px-16">

        <div className="mt-auto max-w-3xl pb-10 pt-16 sm:pb-16 sm:pt-20 lg:pb-20">
          <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-red-500">
            <span className="h-px w-10 bg-red-500" />
            The new standard
          </div>

          <h1 className="font-serif text-5xl leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
            Born to move
            <span className="block italic text-white/90">your pulse.</span>
          </h1>

          <p className="mt-7 max-w-lg text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
            A bold expression of precision, power, and unmistakable presence.
            Every curve is engineered for the road ahead.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#discover"
              className="group inline-flex items-center gap-5 bg-red-600 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.18em] transition hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-zinc-950"
            >
              Discover the collection
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#experience"
              className="border-b border-white/50 pb-1 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:border-white"
            >
              Build your experience
            </a>
          </div>
        </div>

        <div className="flex items-end justify-between border-t border-white/20 pt-5 text-white/80">
          <div className="flex gap-8 sm:gap-14">
            <div>
              <p className="text-xl font-semibold text-white sm:text-2xl">3.2s</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.18em]">0–100 km/h</p>
            </div>
            <div>
              <p className="text-xl font-semibold text-white sm:text-2xl">830</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.18em]">Maximum hp</p>
            </div>
          </div>

          <a
            href="#discover"
            aria-label="Scroll to discover more"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition hover:border-white hover:bg-white hover:text-black"
          >
            ↓
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero