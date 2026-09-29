'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, Check, Mail, MessageCircle } from 'lucide-react'
import { site } from '@/lib/site'
import { Reveal } from './reveal'

const needs = ['Business Website', 'Online Store', 'Landing Page', 'Custom Web App', 'Not sure yet']

const fieldClass =
  'w-full rounded-xl border border-input bg-card px-4 py-3.5 text-base outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent focus:ring-4 focus:ring-accent/15'

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const get = (k: string) => String(data.get(k) ?? '').trim()
    const subject = `Quote request — ${get('need') || 'Website'}`
    const body = [`Name: ${get('name')}`, `Email: ${get('email')}`, `Need: ${get('need')}`, '', get('details')].join('\n')
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <h2 id="contact-title" className="text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            {"Let's talk about your website."}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Send a few details and {"I'll"} reply within 24 hours with a free quote. No commitment.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <a
              href={site.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-accent"
            >
              <MessageCircle className="size-5 text-accent" aria-hidden="true" />
              <span className="text-sm font-medium">Chat on WhatsApp</span>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-accent"
            >
              <Mail className="size-5 text-accent" aria-hidden="true" />
              <span className="truncate text-sm font-medium">{site.email}</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form onSubmit={handleSubmit} className="rounded-3xl border border-border bg-card p-6 shadow-xl shadow-ink/5 md:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium">Your name</label>
                <input id="name" name="name" required autoComplete="name" placeholder="Jane Smith" className={fieldClass} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input id="email" name="email" type="email" required autoComplete="email" placeholder="jane@company.com" className={fieldClass} />
              </div>
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="need" className="text-sm font-medium">What do you need?</label>
                <select id="need" name="need" required defaultValue="" className={fieldClass}>
                  <option value="" disabled>Select one</option>
                  {needs.map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="details" className="text-sm font-medium">About your business</label>
                <textarea
                  id="details"
                  name="details"
                  required
                  rows={3}
                  placeholder="What do you offer, and what should the website do for you?"
                  className={`${fieldClass} resize-y`}
                />
              </div>
            </div>
            <button
              type="submit"
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 font-medium text-accent-foreground shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5"
            >
              Get My Free Quote
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </button>
            <p role="status" className="mt-3 min-h-5 text-center text-sm text-muted-foreground">
              {sent ? (
                <span className="inline-flex items-center gap-1.5 text-foreground">
                  <Check className="size-4 text-accent" aria-hidden="true" />
                  Your email app should open with your message ready to send.
                </span>
              ) : (
                'Reply within 24 hours. Your details are never shared.'
              )}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
