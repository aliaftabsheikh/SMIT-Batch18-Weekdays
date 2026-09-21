const About = () => {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-800 sm:px-10 lg:px-16">
      <section className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-200/60">
        <div className="grid lg:grid-cols-2">
          <div className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 p-8 text-white sm:p-12 lg:p-16">
            <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1 text-sm font-semibold tracking-wide">
              ABOUT US
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
              Building skills for a brighter future.
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-emerald-50 sm:text-lg">
              We make quality learning accessible, practical, and inspiring for everyone ready to grow.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/20 pt-8 text-center">
              <div>
                <p className="text-2xl font-bold sm:text-3xl">10K+</p>
                <p className="mt-1 text-xs text-emerald-100 sm:text-sm">Learners</p>
              </div>
              <div>
                <p className="text-2xl font-bold sm:text-3xl">50+</p>
                <p className="mt-1 text-xs text-emerald-100 sm:text-sm">Courses</p>
              </div>
              <div>
                <p className="text-2xl font-bold sm:text-3xl">95%</p>
                <p className="mt-1 text-xs text-emerald-100 sm:text-sm">Success rate</p>
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-12 lg:p-16">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">Our story</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Learn today. Lead tomorrow.
            </h2>
            <p className="mt-6 leading-7 text-slate-600">
              Our community brings together curious minds, expert mentors, and real-world projects. We believe education should open doors and give every learner the confidence to create meaningful change.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-lg font-bold text-emerald-700">
                  01
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Practical learning</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">Build skills through hands-on lessons and guided projects.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-100 text-lg font-bold text-cyan-700">
                  02
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Supportive community</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">Learn alongside peers and mentors who want to see you succeed.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-lg font-bold text-amber-700">
                  03
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Career-focused growth</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">Prepare for opportunities with the knowledge employers value.</p>
                </div>
              </div>
            </div>

            <button className="mt-10 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-200">
              Explore our programs
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About