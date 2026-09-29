import { LayoutTemplate, MousePointerClick, ShoppingBag, Workflow } from 'lucide-react'
import { Reveal } from './reveal'

const services = [
  {
    icon: LayoutTemplate,
    title: 'Business Website',
    text: 'A professional site that explains what you do and gets people to call or enquire.',
  },
  {
    icon: ShoppingBag,
    title: 'Online Store',
    text: 'Sell your products online with secure payments and easy product management.',
  },
  {
    icon: MousePointerClick,
    title: 'Landing Page',
    text: 'One focused page built to turn ad or social traffic into leads.',
  },
  {
    icon: Workflow,
    title: 'Custom Web App',
    text: 'Booking systems, dashboards and portals that replace spreadsheets.',
  },
]

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <h2 id="services-title" className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            What I can build for you
          </h2>
        </Reveal>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={i * 60} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                  <span className="grid size-11 place-items-center rounded-xl bg-accent/10 text-accent">
                    <s.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
