'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

type NavItem = { label: string; href: string }

export default function MainNavbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const nav: NavItem[] = [
    { label: 'Home', href: '#top' },
    { label: 'Story', href: '#story' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock body scroll when mobile menu is open
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  const onNavClick = (href: string) => {
    setOpen(false)
    // Smooth scroll if same page anchor
    if (href.startsWith('#')) {
      const el = document.querySelector(href)
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header
      className={[
        'sticky top-0 z-50 w-full',
        'backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-gray-950/60',
        scrolled
          ? 'border-b border-gray-200/70 dark:border-gray-800/70 shadow-sm'
          : 'border-b border-transparent',
      ].join(' ')}
    >
      <a id="top" className="sr-only" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-2 font-extrabold tracking-tight text-gray-900 dark:text-white"
            aria-label="Nok in House Home"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white">
              N
            </span>
            <span className="text-base sm:text-lg">Nok in House</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {nav.map((item) => (
              <button
                key={item.href}
                onClick={() => onNavClick(item.href)}
                className="rounded-full px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white transition"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="mailto:nokinhouse.service@gmail.com"
              className="rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-100 dark:bg-gray-950 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 transition"
            >
              Email
            </a>
            <button
              onClick={() => onNavClick('#contact')}
              className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition"
            >
              Talk with us
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-2.5 text-gray-900 dark:text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-white dark:bg-gray-950 border-l border-gray-200 dark:border-gray-800 shadow-xl">
            <div className="flex items-center justify-between px-6 h-16 border-b border-gray-200 dark:border-gray-800">
              <span className="font-extrabold text-gray-900 dark:text-white">
                Nok in House
              </span>
              <button
                className="inline-flex items-center justify-center rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-2.5 text-gray-900 dark:text-white"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="px-6 py-6 space-y-2">
              {nav.map((item) => (
                <button
                  key={item.href}
                  onClick={() => onNavClick(item.href)}
                  className="w-full text-left rounded-2xl px-4 py-3 text-base font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 transition"
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-4 space-y-3">
                <a
                  href="mailto:nokinhouse.service@gmail.com"
                  className="block text-center rounded-2xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-100 dark:bg-gray-950 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-900 transition"
                >
                  Email
                </a>
                <button
                  onClick={() => onNavClick('#contact')}
                  className="w-full rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition"
                >
                  Talk with us
                </button>
              </div>

              <p className="pt-6 text-xs text-gray-500 dark:text-gray-400">
                System-first. Human-centered. Built from within.
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
