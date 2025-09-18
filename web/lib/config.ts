/**
 * Site Configuration - Single Source of Truth
 * Clean, universal template configuration
 */

export const siteConfig = {
  // Core Brand Identity - Update for your project
  name: "NextJS Starter",
  description:
    "Modern web application built with Next.js 15, Supabase, and TypeScript. Production-ready foundation.",

  // Localization & Business Settings
  currency: "CHF" as const,
  region: "swiss" as const,
  locale: "de-CH" as const,

  // Contact & Legal Information
  contact: {
    email: "support@yourcompany.com",
    company: "Your Company Name",
  },
} as const

// Type exports for TypeScript safety
export type SiteConfig = typeof siteConfig
export type Currency = typeof siteConfig.currency
export type Region = typeof siteConfig.region
export type Locale = typeof siteConfig.locale

/**
 * Helper function to get formatted currency display
 */
export function formatPrice(amount: number): string {
  if (amount === 0) return "Free forever"

  return new Intl.NumberFormat(siteConfig.locale, {
    style: "currency",
    currency: siteConfig.currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

/**
 * Helper function to get site metadata
 */
export function getSiteMetadata() {
  return {
    title: `${siteConfig.name} - Modern Web Application`,
    description: siteConfig.description,
    author: siteConfig.contact.company,
    keywords: ["nextjs", "supabase", "typescript", "web-app", "modern", siteConfig.region],
  }
}
