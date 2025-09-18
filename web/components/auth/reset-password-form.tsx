"use client"

import { AlertCircle, CheckCircle } from "lucide-react"
import { useActionState } from "react"
import { SubmitButton } from "@/components/auth/submit-button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useFormField } from "@/hooks/useFormField"
import { type AuthState, resetPasswordAction } from "@/lib/auth/actions"

const initialState: AuthState = {
  error: undefined,
  success: undefined,
  field_errors: undefined,
}

export function ResetPasswordForm() {
  const [state, formAction] = useActionState(resetPasswordAction, initialState)
  const emailField = useFormField()

  return (
    <form action={formAction} className="space-y-4">
      {state.error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{state.error}</AlertDescription>
        </Alert>
      )}

      {state.success && (
        <Alert className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-700 dark:text-green-200">
            {state.success}
          </AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <Label {...emailField.labelProps}>Email</Label>
        <Input
          {...emailField.fieldProps}
          {...emailField.getAriaProps(!!state.field_errors?.email)}
          name="email"
          type="email"
          placeholder="Enter your email"
          required
        />
        {state.field_errors?.email && (
          <p {...emailField.errorProps} className="text-sm text-destructive">
            {state.field_errors.email[0]}
          </p>
        )}
      </div>

      <SubmitButton>Send Reset Link</SubmitButton>
    </form>
  )
}
