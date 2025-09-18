import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Footer, Header } from "@/components/layout"
// 🟩 SHOP-ONLY: Global Shopping Cart Integration
import { CartHydration, ShoppingCart } from "@/components/shop"
import { ThemeProvider } from "@/components/theme"
import { getSiteMetadata } from "@/lib/config"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const siteMetadata = getSiteMetadata()

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: siteMetadata.author }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* 🟩 SHOP-ONLY: Cart State Hydration */}
          <CartHydration />
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          {/* 🟩 SHOP-ONLY: Global Shopping Cart Slideout */}
          <ShoppingCart />
        </ThemeProvider>
      </body>
    </html>
  )
}
