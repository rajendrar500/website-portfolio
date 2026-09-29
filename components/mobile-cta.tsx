import { ArrowRight } from 'lucide-react'
import { primaryCta } from '@/lib/site'

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/90 p-3 backdrop-blur-xl md:hidden">
      <a
        href={primaryCta.href}
        className="flex items-center justify-center gap-2 rounded-full bg-accent py-3.5 font-medium text-accent-foreground shadow-lg shadow-accent/25"
      >
        {primaryCta.label} <ArrowRight className="size-4" aria-hidden="true" />
      </a>
    </div>
  )
}
