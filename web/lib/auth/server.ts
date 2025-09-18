/**
 * Server-side authentication and subscription utilities
 * For use in Server Components and API routes
 */

import {
  getUser as getSupabaseUser,
  requireAuth as requireSupabaseAuth,
  requireNoAuth as requireSupabaseNoAuth,
} from "@/lib/supabase/server"
// Shop-only: No subscription logic needed

// Re-export existing functions
export {
  getSupabaseUser as getUser,
  requireSupabaseAuth as requireAuth,
  requireSupabaseNoAuth as requireNoAuth,
}

// All subscription-related functions removed for shop-only implementation
// Core authentication functions are re-exported above
