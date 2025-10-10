/**
 * Site Configuration - Single Source of Truth
 * Clean, universal template configuration
 */

export const siteConfig = {
  // Core Brand Identity - FC Flamingo Kinderbuch
  name: "FC Flamingo",

  // Hero Section (Schweizer Rechtschreibung)
  hero: {
    title: "Fussball auf einem Bein",
    subtitle: "Die Flamingos träumen vom Schweizer Meistertitel",
    cta: "Buch entdecken",
  },

  // Long Description (für Meta/About)
  description:
    "Die Flamingos träumen vom ersten Schweizer Meistertitel, doch ihre seltsame Vorliebe, auf einem Bein zu stehen, bringt den Trainer Mister King an den Rand der Verzweiflung.",

  // Localization & Business Settings
  currency: "CHF" as const,
  region: "swiss" as const,
  locale: "de-CH" as const,

  // Contact & Legal Information
  contact: {
    email: "info@fcflamingo.ch",
    company: "FC Flamingo",
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
    title: `${siteConfig.name} - Schweizer Kinderbuch`,
    description: siteConfig.description,
    author: siteConfig.contact.company,
    keywords: ["kinderbuch", "fussball", "flamingo", "schweiz", "kinder", "buch", siteConfig.region],
  }
}
