export const ButtonVariant = [
  'primary', 'warning', 'routerLink',
  'light', 'link', 'underline', 'border',
] as const
export const ButtonSize = ['sm', 'md', 'lg', 'square'] as const

export type ButtonSize = typeof ButtonSize[number]
export type ButtonVariant = typeof ButtonVariant[number]
