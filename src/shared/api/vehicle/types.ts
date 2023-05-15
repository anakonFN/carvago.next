import { z } from 'zod'

export const vehicleAPI = z.object({
  id: z.number(),
  title: z.string(),
  power: z.number(),
  features: z.array(
    z.object({ id: z.number(), const_key: z.string(), name: z.string() }),
  ),
  fuel_type: z.object({
    id: z.number(),
    const_key: z.string(),
    name: z.string(),
  }),
  transmission: z.object({
    id: z.number(),
    const_key: z.string(),
    name: z.string(),
  }),
  fuel_consumption_combined: z.number().nullable(),
  drive: z.object({
    id: z.number(),
    const_key: z.string(),
    name: z.string(),
  }),
  registration_date: z.string(),
  mileage: z.number(),
  location_country: z.object({
    id: z.number(),
    const_key: z.string(),
    name: z.string(),
    iso_code: z.string(),
  }),
  seller: z.object({
    id: z.number(),
    type: z.object({ id: z.number(), const_key: z.string(), name: z.string() }),
    country: z.object({
      id: z.number(),
      iso_code: z.string(),
      const_key: z.string(),
      name: z.string(),
    }),
    zip: z.string(),
    rating_count: z.number().nullable(),
    email: z.null(),
    rating_average: z.string().nullable(),
  }),
  uniform_price: z.number(),
  images: z.array(
    z.object({
      id: z.number(),
      path: z.string(),
      ordering: z.number(),
    }),
  ),
  power_hp: z.number().nullable(),
})

export type vehicleAPI = z.infer<typeof vehicleAPI>
