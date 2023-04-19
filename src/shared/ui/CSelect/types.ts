export const roundedVariant = ['left', 'right', 'square'] as const

export type roundedVariant = typeof roundedVariant[number]
