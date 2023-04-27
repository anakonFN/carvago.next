import { z } from 'zod'

export const paramsAPI = z.object({
  value: z.number(),
  name: z.string(),
})

export type paramsAPI = z.infer<typeof paramsAPI>
