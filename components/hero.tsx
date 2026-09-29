import Image from 'next/image'
import { ArrowRight, Check } from 'lucide-react'
import { primaryCta } from '@/lib/site'
import { Reveal } from './reveal'

const promises = ['Free, no-obligation quote', 'Fixed price, no surprises', 'Reply within 24 hours']

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 size-[36rem] rounded-full bg-accent/15 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-16 pt-10 md:px-8 md:pb-24 md:pt-14 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <Reveal>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent/60" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              Taking on 2 new projects this month
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1
              id="hero-title"
              className="text-balance text-5xl font-semibold leading-[1] tracking-tight sm:text-6xl lg:text-[4.25rem]"
            >
              A website that turns visitors into{' '}
              <span className="font-serif font-normal italic text-accent">customers.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              I build fast, professional websites and online stores for business owners who want more
              enquiries, more sales and a brand people trust.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={primaryCta.href}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 font-medium text-accent-foreground shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30"
              >
                {primaryCta.label}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-full border border-foreground/15 bg-card px-7 py-4 font-medium transition-colors hover:border-foreground/40"
              >
                See Recent Work
              </a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {promises.map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm font-medium">
                  <span className="grid size-5 place-items-center rounded-full bg-ink text-ink-foreground">
                    <Check className="size-3" aria-hidden="true" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-ink shadow-2xl shadow-ink/20">
            <Image
              src="/images/hero-mockup.png"
              alt="A modern business website shown on desktop and mobile screens"
              width={1200}
              height={1000}
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
              className="h-auto w-full"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 hidden items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-xl sm:flex">
            <p className="text-3xl font-semibold tracking-tight">
              8<span className="text-accent">+</span>
            </p>
            <p className="text-xs leading-snug text-muted-foreground">
              Years helping
              <br />
              businesses grow online
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
