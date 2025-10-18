"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Container } from "@/components/layout/container"
import { Separator } from "@/components/ui/separator"
import { siteConfig } from "@/lib/config"

export function Footer() {
  const pathname = usePathname()

  // Hide footer in Dashboard and Auth pages (admin-only areas)
  const shouldHide = pathname?.startsWith("/dashboard") || pathname?.startsWith("/auth")

  if (shouldHide) {
    return null
  }

  // FC Flamingo Footer - One-Pager Navigation (Marketing only)
  const { name: brandName, description, hero } = siteConfig

  const navigationLinks = [
    { href: "#hero", label: "Startseite" },
    { href: "#features", label: "Über das Buch" },
    { href: "/shop", label: "Buch kaufen" },
    { href: "/contact", label: "Kontakt" },
  ]

  const legalLinks = [
    { href: "/impressum", label: "Impressum" },
    { href: "/datenschutz", label: "Datenschutz" },
    { href: "/agb", label: "AGB" },
  ]

  return (
    <footer className="border-t bg-background">
      <Container>
        <div className="py-12 md:py-16">
          {/* Logo + Tagline - Centered */}
          <div className="text-center mb-10">
            <div className="flex justify-center mb-4">
              <Image
                src="/Logo_Fc_Flamingo.png"
                alt="FC Flamingo Logo"
                width={80}
                height={80}
                className="drop-shadow-lg hover:scale-105 transition-transform"
              />
            </div>
            <p className="text-primary text-lg font-medium max-w-xl mx-auto">{hero.subtitle}</p>
          </div>

          <Separator className="mb-8" />

          {/* Main footer content */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Brand column */}
            <div className="space-y-3 text-center md:text-left">
              <h4 className="font-bold text-foreground">{brandName}</h4>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>

            {/* Navigation column */}
            <div className="space-y-3 text-center md:text-left">
              <h4 className="text-sm font-semibold">Navigation</h4>
              <ul className="space-y-2 text-sm">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary hover:underline decoration-field-green decoration-2 underline-offset-4 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal + Admin column */}
            <div className="space-y-3 text-center md:text-left">
              <h4 className="text-sm font-semibold">Rechtliches</h4>
              <ul className="space-y-2 text-sm">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-2 border-t border-border/50">
                  <Link
                    href="/auth/login"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Admin Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Bottom footer */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 {brandName}.
            </p>
            <p className="text-xs text-muted-foreground mt-2">Powered by Next.js 15 & Supabase</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
