import { z } from 'zod'

export const vehicleAPI = z.object({
  id: z.string(),
  title: z.string(),
  power: z.number(),
  features: z.array(
    z.object({ id: z.string(), const_key: z.string(), name: z.string() }),
  ),
  fuel_type: z.object({
    id: z.string(),
    const_key: z.string(),
    name: z.string(),
  }),
  transmission: z.object({
    id: z.string(),
    const_key: z.string(),
    name: z.string(),
  }),
  drive: z.object({
    id: z.string(),
    const_key: z.string(),
    name: z.string(),
  }),
  registration_date: z.string(),
  mileage: z.number(),
  location_country: z.object({
    id: z.string(),
    const_key: z.string(),
    name: z.string(),
    iso_code: z.string(),
  }),
  seller: z.object({
    id: z.string(),
    type: z.object({
      id: z.string(),
      const_key: z.string(),
      name: z.string(),
    }),
    country: z.object({
      id: z.string(),
      const_key: z.string(),
      name: z.string(),
      iso_code: z.string(),
    }),
    zip: z.string(),
    email: z.string().nullable(),
    rating_average: z.number().nullable(),
    rating_count: z.number().nullable(),
    offers_count: z.number(),
  }),
  uniform_price: z.number(),
  images: z.array(
    z.object({
      id: z.number(),
      path: z.string(),
      ordering: z.number(),
      ordering_computed: z.number().nullable(),
    }),
  ),
})

export const filterAPI = z.object({
  'make': z.number(),
  'model-family': z.number(),
  'price-from': z.number(),
  'price-to': z.number(),
  'sort': z.string(),
  'registration-date-from': z.number(),
  'registration-date-to': z.number(),
  'mileage-from': z.number(),
  'mileage-to': z.number(),
  'transmission': z.array(z.number()),
  'fuel-type': z.array(z.number()),
  'direction': z.string(),
  'color': z.array(z.number()),
})

export type filterAPI = z.infer<typeof filterAPI>

export type vehicleAPI = z.infer<typeof vehicleAPI>
