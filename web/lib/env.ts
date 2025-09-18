import { z } from "zod"

const envSchema = z.object({
  // Public variables (exposed to client)
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().min(1),
  NEXT_PUBLIC_SENTRY_DSN: z.string().url().optional(),
  NEXT_PUBLIC_APP_URL: z.string().url(),

  // Server-only variables
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1),
  STRIPE_SECRET_KEY: z.string().min(1),
  STRIPE_WEBHOOK_SECRET: z.string().min(1),
  STRIPE_PRODUCT_1_PRICE_ID: z.string().optional(),
  STRIPE_PRODUCT_2_PRICE_ID: z.string().optional(),
  SENTRY_AUTH_TOKEN: z.string().optional(),

  // Database Direct Connection (for migrations)
  DATABASE_URL: z.string().optional(),

  // SMTP Email Configuration
  SMTP_HOST: z.string().min(1),
  SMTP_PORT: z.string().regex(/^\d+$/, "SMTP_PORT must be a number"),
  SMTP_USER: z.string().min(1),
  SMTP_PASS: z.string().min(1),
  EMAIL_FROM: z.string().email(),
  EMAIL_DOMAIN: z.string().min(1),

  // Logging
  LOG_LEVEL: z.enum(["debug", "info", "warn", "error"]).default("info"),

  // Runtime
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
})

// Validate on startup
export const env = envSchema.parse(process.env)
