import { z } from 'zod'

export const MarksAPI = z.object({
  value: z.number(),
  name: z.string(),
})

export type MarksAPI = z.infer<typeof MarksAPI>
