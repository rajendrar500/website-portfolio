import { navItems, primaryCta, site } from '@/lib/site'

const socials = [
  { label: 'LinkedIn', href: site.links.linkedin },
  { label: 'WhatsApp', href: site.links.whatsapp },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border pb-28 pt-14 md:pb-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 md:flex-row md:items-start md:justify-between md:px-8">
        <div className="max-w-xs">
          <p className="text-lg font-semibold tracking-tight">
            {site.name}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-2 text-muted-foreground">Websites that help businesses win more customers.</p>
          <a href={primaryCta.href} className="mt-4 inline-block text-sm font-medium text-accent underline-offset-4 hover:underline">
            {primaryCta.label}
          </a>
        </div>
        <div className="flex gap-16">
          <nav aria-label="Footer">
            <ul className="space-y-2.5">
              {navItems.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="space-y-2.5">
            <li>
              <a href={`mailto:${site.email}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Email
              </a>
            </li>
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-6xl px-5 text-sm text-muted-foreground md:px-8">
        © 2026 {site.name}. All rights reserved.
      </p>
    </footer>
  )
}
