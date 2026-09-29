import Image from 'next/image'
import { Reveal } from './reveal'

const projects = [
  {
    name: 'Real Estate Agency',
    result: 'More property enquiries with a form on every listing.',
    image: '/images/project-real-estate.png',
    alt: 'Real estate website with property photography and listing cards',
  },
  {
    name: 'Lifestyle Product Brand',
    result: 'Moved from Instagram DMs to a store that sells 24/7.',
    image: '/images/project-ecommerce.png',
    alt: 'Online store with a product grid and shopping cart',
  },
  {
    name: 'Professional Services Firm',
    result: 'A credible site with a simple path to book a call.',
    image: '/images/project-corporate.png',
    alt: 'Corporate website with a clean hero and service highlights',
  },
]

export function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="bg-muted/50 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <h2 id="work-title" className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Recent work
          </h2>
        </Reveal>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <li key={p.name}>
              <Reveal delay={i * 80}>
                <article>
                  <div className="overflow-hidden rounded-2xl border border-border bg-card">
                    <Image
                      src={p.image}
                      alt={p.alt}
                      width={1200}
                      height={900}
                      sizes="(min-width: 768px) 360px, 100vw"
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-4 font-semibold">{p.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.result}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
