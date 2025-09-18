/**
 * Email Templates Export
 * Clean imports für alle email templates
 */

// Re-export types for convenience
export type {
  OrderConfirmationEmailProps,
  OrderItem,
} from "./order-confirmation"
// 🟩 SHOP-ONLY - E-commerce emails (SaaS templates entfernt)
export { OrderConfirmationEmail } from "./order-confirmation"
export type { OrderStatusEmailProps } from "./order-status"
export { OrderStatusEmail } from "./order-status"
