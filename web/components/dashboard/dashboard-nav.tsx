/**
 * Dashboard Navigation - Admin-only
 * Clean header for dashboard with home link, navigation, and user menu
 */

import { Home, Package } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { AuthButton } from "@/components/auth"
import { Container } from "@/components/layout/container"
import { ThemeToggle } from "@/components/theme"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export async function DashboardNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo + Back to Home */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="relative -my-2">
              <Image
                src="/Logo_Fc_Flamingo.png"
                alt="FC Flamingo Logo"
                width={64}
                height={64}
                className="h-16 w-16 transition-transform hover:scale-105 drop-shadow-md"
                priority
              />
            </Link>
            <Separator orientation="vertical" className="h-8" />
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">
                <Home className="h-4 w-4 mr-2" />
                Zur Startseite
              </Link>
            </Button>
          </div>

          {/* Right: Dashboard Navigation + Theme + User Menu */}
          <nav className="flex items-center space-x-4">
            {/* Dashboard Links */}
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard/orders">
                <Package className="h-4 w-4 mr-2" />
                Bestellungen
              </Link>
            </Button>
            <Separator orientation="vertical" className="h-6" />
            {/* Theme Toggle */}
            <ThemeToggle />
            {/* User Dropdown with Logout */}
            <AuthButton />
          </nav>
        </div>
      </Container>
    </header>
  )
}
