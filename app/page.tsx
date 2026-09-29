import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Work } from '@/components/work'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'
import { MobileCta } from '@/components/mobile-cta'
import { site } from '@/lib/site'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: site.name,
  description: site.description,
  url: site.url,
  email: site.email,
  image: `${site.url}/images/og-image.png`,
  sameAs: [site.links.linkedin],
  serviceType: ['Web Design', 'E-commerce Development', 'Landing Pages', 'Web Application Development'],
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <Hero />
        <Services />
        <Work />
        <Contact />
      </main>
      <SiteFooter />
      <MobileCta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}
