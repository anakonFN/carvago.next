import { z } from 'zod'

import { type filterAPI, vehicleAPI } from './types'
import { BASE_URL } from '../lib'

export const vehiclesKeys = {
  GetVehicles: (page: number, filters: Partial<filterAPI>, limit: number) => [
    'vehicles',
    page,
    filters,
    limit,
  ],
} as const

export const vehiclesEndPoints = {
  getVehicles: (queryParams: string) => `/api/listedcars?${queryParams}`,
}

export async function vehiclesFetcher(queryParams: string) {
  return z
    .array(vehicleAPI)
    .parse(
      await fetch(
        `${BASE_URL}${vehiclesEndPoints.getVehicles(queryParams)}`,
      ).then(r => r.json()),
    )
}
