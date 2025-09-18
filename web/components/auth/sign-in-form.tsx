"use client"

import { AlertCircle } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { useActionState } from "react"
import { SubmitButton } from "@/components/auth/submit-button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useFormField } from "@/hooks/useFormField"
import { type AuthState, signInAction } from "@/lib/auth/actions"

const initialState: AuthState = {
  error: undefined,
  success: undefined,
  field_errors: undefined,
}

export function SignInForm() {
  const searchParams = useSearchParams()
  const redirectTo = searchParams.get("redirectTo") || "/dashboard"

  const [state, formAction] = useActionState(signInAction, initialState)
  const emailField = useFormField()
  const passwordField = useFormField()

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="redirectTo" value={redirectTo} />

      {state.error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{state.error}</AlertDescription>
        </Alert>
      )}

      {state.success && (
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{state.success}</AlertDescription>
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

      <div className="space-y-2">
        <Label {...passwordField.labelProps}>Password</Label>
        <Input
          {...passwordField.fieldProps}
          {...passwordField.getAriaProps(!!state.field_errors?.password)}
          name="password"
          type="password"
          placeholder="Enter your password"
          required
        />
        {state.field_errors?.password && (
          <p {...passwordField.errorProps} className="text-sm text-destructive">
            {state.field_errors.password[0]}
          </p>
        )}
      </div>

      <SubmitButton>Sign In</SubmitButton>
    </form>
  )
}
