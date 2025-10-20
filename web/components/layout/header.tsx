import Image from "next/image"
import Link from "next/link"
import { AuthButton } from "@/components/auth"
import { Container } from "@/components/layout/container"
// 🟩 SHOP-ONLY: Cart Icon Integration
import { CartIcon } from "@/components/shop"
import { ThemeToggle } from "@/components/theme"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { getUser } from "@/lib/supabase/server"

export async function Header() {
  // 🟩 SHOP-FOCUSED: Clean navigation for Kinderbuch-Shop
  const navigationLinks = [
    { href: "/#shop", label: "Shop" }, // 🟩 SHOP-ONLY: One-Pager Shop Section
    { href: "/contact", label: "Kontakt" }, // ✅ SHARED: Customer service
  ]

  // ✅ ADMIN-ONLY: Check if admin is logged in
  const user = await getUser()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand - Statement Size! */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="relative -my-4">
              <Image
                src="/Logo_Fc_Flamingo.png"
                alt="FC Flamingo Logo"
                width={96}
                height={96}
                className="h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 transition-transform hover:scale-105 drop-shadow-md"
                priority
              />
            </Link>
            <Badge
              variant="secondary"
              className="hidden sm:inline-flex bg-field-green text-white hover:bg-field-dark"
            >
              Kinderbuch
            </Badge>
          </div>

          {/* Dynamic Navigation */}
          <nav className="flex items-center space-x-6">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-primary hover:underline decoration-field-green decoration-2 underline-offset-4"
              >
                {link.label}
              </Link>
            ))}
            <Separator orientation="vertical" className="h-6" />
            {/* 🟩 SHOP-ONLY: Shopping Cart Icon */}
            <CartIcon />
            <ThemeToggle />
            {/* ✅ ADMIN-ONLY: AuthButton only visible when admin is logged in */}
            {user && <AuthButton />}
          </nav>
        </div>
      </Container>
    </header>
  )
}
