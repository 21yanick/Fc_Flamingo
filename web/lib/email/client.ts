/**
 * Nodemailer SMTP Email Client
 * Clean SMTP implementation with React Email integration
 * KISS Design: Maintains existing interface for zero breaking changes
 */

import { render } from "@react-email/components"
import nodemailer from "nodemailer"
import { env } from "@/lib/env"

// YAGNI: Single transporter instance, no pooling until needed
const transporter = nodemailer.createTransport({
  host: env.SMTP_HOST,
  port: parseInt(env.SMTP_PORT, 10),
  secure: false, // TLS on STARTTLS for port 587
  auth: {
    user: env.SMTP_USER,
    pass: env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: true,
    minVersion: "TLSv1.2" as const,
  },
})

// Connection verification for development feedback
if (process.env.NODE_ENV === "development") {
  transporter.verify().then(
    () => console.log("✅ SMTP server ready for email delivery"),
    (error: Error) => console.warn("⚠️ SMTP connection issue:", error.message)
  )
}

// Email client interface - matches existing usage pattern exactly
export const emailClient = {
  /**
   * Send email with React Email template
   * @param options Email configuration matching existing interface
   * @returns Promise with success status and messageId
   */
  send: async (options: {
    from: string
    to: string
    subject: string
    react: React.ReactElement
  }) => {
    try {
      // Render React Email component to HTML
      const html = await render(options.react)

      // Prepare mail options
      const mailOptions = {
        from: options.from,
        to: options.to,
        subject: options.subject,
        html,
      }

      // Send email via SMTP
      const result = await transporter.sendMail(mailOptions)

      console.log(`📧 Email sent successfully: ${result.messageId}`)
      return {
        success: true,
        messageId: result.messageId,
      }
    } catch (error) {
      console.error("📧 Email sending failed:", error)
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      }
    }
  },
}

// Export type for external usage
export type EmailClient = typeof emailClient
