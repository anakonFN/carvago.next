import { z } from 'zod'

export const paramsAPI = z.object({
  make: z.array(
    z.object({
      label: z.string(),
      key: z.number(),
    }),
  ),
  fuel_type: z.array(
    z.object({
      label: z.string(),
      key: z.number(),
    }),
  ),
  transmission: z.array(
    z.object({
      label: z.string(),
      key: z.number(),
    }),
  ),
  color: z.array(
    z.object({
      label: z.string(),
      key: z.number(),
    }),
  ),
})

export const modelAPI = z.object({
  id: z.number(),
  name: z.string(),
})

export type modelAPI = z.infer<typeof modelAPI>

export type paramsAPI = z.infer<typeof paramsAPI>
