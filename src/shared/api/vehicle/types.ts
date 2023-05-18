import { z } from 'zod'

export const vehicleAPI = z.object({
  id: z.number(),
  title: z.string(),
  power: z.number(),
  features: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
    }),
  ),
  fuel_type: z.object({
    id: z.number(),
    name: z.string(),
  }),
  transmission: z.object({
    id: z.number(),
    name: z.string(),
  }),
  drive: z.object({
    id: z.number(),
    name: z.string(),
  }),
  registration_date: z.string(),
  mileage: z.number(),
  location_country: z.object({
    id: z.number(),
    name: z.string(),
  }),
  seller: z.object({
    id: z.number(),
    type: z.object({
      id: z.number(),
      name: z.string(),
    }),
    country: z.object({
      id: z.number(),
      name: z.string(),
    }),
    rating_average: z.string().nullable().optional(),
    rating_count: z.union([z.number(), z.string()]).nullable().optional(),
    offers_count: z.string().optional(),
  }),
  uniform_price: z.number(),
  images: z.array(
    z.object({
      id: z.number(),
      path: z.string(),
    }),
  ),
  power_hp: z.number().nullable(),
  fuel_consumption_combined: z.number().nullable(),
})

export type vehicleAPI = z.infer<typeof vehicleAPI>
