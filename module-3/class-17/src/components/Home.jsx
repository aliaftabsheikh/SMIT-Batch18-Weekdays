import React from 'react'
import {NavLink} from 'react-router'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 h-[560px] bg-gradient-to-br from-violet-700 via-indigo-700 to-slate-950" />
        <div className="absolute -left-24 top-28 -z-10 h-72 w-72 rounded-full bg-fuchsia-400/30 blur-3xl" />
        <div className="absolute right-0 top-8 -z-10 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />

    <Navbar/>

        <main id="home" className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28 lg:pt-20">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-indigo-50 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Learning made for your next big move
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Turn curiosity into
              <span className="block text-cyan-200">career-ready skills.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-indigo-100">
              Learn practical skills, build projects you are proud of, and grow with a community that keeps you moving forward.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                id="get-started"
                href="#courses"
                className="rounded-full bg-cyan-300 px-6 py-3.5 text-sm font-bold text-slate-900 shadow-xl shadow-cyan-950/20 transition hover:-translate-y-0.5 hover:bg-cyan-200"
              >
                Explore courses
              </a>
              <a
                href="#features"
                className="rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                How it works
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-indigo-700 bg-amber-300 text-xs font-bold text-amber-950">AM</span>
                <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-indigo-700 bg-rose-300 text-xs font-bold text-rose-950">SK</span>
                <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-indigo-700 bg-emerald-300 text-xs font-bold text-emerald-950">JR</span>
              </div>
              <p className="text-sm text-indigo-100"><span className="font-bold text-white">10,000+</span> learners growing every day</p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-4 rounded-[2rem] bg-cyan-300/20 blur-2xl" />
            <div className="relative rounded-[2rem] border border-white/20 bg-white/10 p-4 shadow-2xl shadow-indigo-950/40 backdrop-blur-xl sm:p-6">
              <div className="rounded-2xl bg-slate-900 p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Your progress</p>
                    <h2 className="mt-1 text-xl font-bold">Frontend Developer</h2>
                  </div>
                  <div className="grid h-12 w-12 place-items-center rounded-full border-4 border-cyan-300 text-sm font-bold text-cyan-200">72%</div>
                </div>

                <div className="mt-7 rounded-xl bg-slate-800/80 p-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">Current lesson</span>
                    <span className="text-cyan-300">8 min left</span>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-700">
                    <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" />
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-lg bg-violet-500/30 text-violet-200">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
                        <path d="m10 8 6 4-6 4V8Z" fill="currentColor" stroke="none" />
                        <rect x="3" y="4" width="18" height="16" rx="2" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Build a responsive layout</p>
                      <p className="text-xs text-slate-400">CSS foundations · Module 4</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-xl bg-slate-800 p-3"><p className="text-lg font-bold text-cyan-200">24</p><p className="mt-1 text-xs text-slate-400">Lessons</p></div>
                  <div className="rounded-xl bg-slate-800 p-3"><p className="text-lg font-bold text-violet-200">8</p><p className="mt-1 text-xs text-slate-400">Projects</p></div>
                  <div className="rounded-xl bg-slate-800 p-3"><p className="text-lg font-bold text-emerald-200">12h</p><p className="mt-1 text-xs text-slate-400">Learned</p></div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>

      <section id="features" className="bg-white px-6 py-20 text-slate-900 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">Why SkillSpring</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Everything you need to learn by doing.</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-indigo-100 text-indigo-600">01</div>
              <h3 className="mt-5 text-lg font-bold">Structured paths</h3>
              <p className="mt-2 leading-7 text-slate-600">Clear, focused lessons that take you from first step to finished project.</p>
            </article>
            <article className="rounded-2xl border border-slate-200 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-100 text-cyan-700">02</div>
              <h3 className="mt-5 text-lg font-bold">Real projects</h3>
              <p className="mt-2 leading-7 text-slate-600">Build a portfolio with practical challenges designed for real-world confidence.</p>
            </article>
            <article id="community" className="rounded-2xl border border-slate-200 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-100 text-emerald-700">03</div>
              <h3 className="mt-5 text-lg font-bold">Helpful community</h3>
              <p className="mt-2 leading-7 text-slate-600">Stay motivated with peers, feedback, and support whenever you need it.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="courses" className="bg-slate-100 px-6 py-20 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-3xl bg-indigo-700 px-8 py-10 text-white sm:px-12 sm:py-12 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">Start today</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">Your next skill is waiting.</h2>
            <p className="mt-3 max-w-xl text-indigo-100">Choose a path, set your pace, and begin building something meaningful.</p>
          </div>
          <a href="#home" className="shrink-0 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-indigo-700 transition hover:bg-cyan-100">Browse learning paths</a>
        </div>
      </section>
    </div>
  )
}

export default Home