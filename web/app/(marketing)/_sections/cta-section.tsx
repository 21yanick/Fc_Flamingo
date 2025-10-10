import { ArrowRight, BookOpen } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground" id="kaufen">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Bereit für das Abenteuer?</h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Entdecke die Geschichte der Flamingo-Fußballmannschaft und ihrer Träume vom ersten
          Schweizer Meistertitel.
        </p>
        <Button variant="secondary" size="lg" asChild>
          <Link href="/shop">
            <BookOpen className="mr-2 h-4 w-4" />
            Buch entdecken
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
