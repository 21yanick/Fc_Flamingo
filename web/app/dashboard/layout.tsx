/**
 * Dashboard Layout - Server Component
 * KISS: Single-page admin dashboard for order management
 */

import { Container } from "@/components/ui/container"
import { requireAuth } from "@/lib/auth/server"

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  // Server-side authentication - redirects to login if not authenticated
  await requireAuth()

  return (
    <div className="py-8">
      <Container>
        <div className="space-y-8">
          {/* Dashboard Header */}
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Verwalten Sie Ihre Bestellungen</p>
          </div>

          {/* Dashboard Content */}
          <div className="space-y-6">{children}</div>
        </div>
      </Container>
    </div>
  )
}
