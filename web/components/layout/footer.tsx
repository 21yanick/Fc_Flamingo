"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Container } from "@/components/layout/container"
import { siteConfig } from "@/lib/config"

export function Footer() {
  const pathname = usePathname()

  // Hide footer in Dashboard and Auth pages (admin-only areas)
  const shouldHide = pathname?.startsWith("/dashboard") || pathname?.startsWith("/auth")

  if (shouldHide) {
    return null
  }

  const { name: brandName } = siteConfig

  return (
    <footer className="border-t bg-background">
      <Container>
        <div className="py-4 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-3 text-xs text-muted-foreground">
            <span>© 2025 {brandName}</span>
            <span className="hidden sm:inline" aria-hidden="true">
              ·
            </span>
            <Link href="/impressum" className="hover:text-foreground transition-colors">
              Impressum
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/datenschutz" className="hover:text-foreground transition-colors">
              Datenschutz
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/agb" className="hover:text-foreground transition-colors">
              AGB
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
