import Link from "next/link"
import { Suspense } from "react"
import { SignInForm } from "@/components/auth/sign-in-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { requireNoAuth } from "@/lib/supabase/server"

export default async function LoginPage() {
  // Redirect if already authenticated
  await requireNoAuth()

  return (
    <div className="py-16">
      <Container size="sm">
        <div className="mx-auto max-w-md">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Admin Anmeldung</CardTitle>
              <CardDescription>Melden Sie sich in Ihrem Admin-Bereich an</CardDescription>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<div>Loading...</div>}>
                <SignInForm />
              </Suspense>

              <div className="mt-6 text-center text-sm">
                <p className="text-muted-foreground">
                  <Link href="/auth/reset" className="text-primary hover:underline">
                    Passwort vergessen?
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  )
}
