import { useId } from "react"

export interface FormFieldHook {
  fieldProps: { id: string }
  labelProps: { htmlFor: string }
  errorProps: { id: string }
  getAriaProps: (hasError: boolean) => {
    "aria-invalid"?: boolean
    "aria-describedby"?: string
  }
}

export function useFormField(): FormFieldHook {
  const id = useId()
  const errorId = `${id}-error`

  return {
    fieldProps: { id },
    labelProps: { htmlFor: id },
    errorProps: { id: errorId },
    getAriaProps: (hasError) => ({
      "aria-invalid": hasError ? true : undefined,
      "aria-describedby": hasError ? errorId : undefined,
    }),
  }
}
