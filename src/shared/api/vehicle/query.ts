import { BASE_URL } from '../lib'

import { vehicleAPI } from './types'
import { normalizeVehicle } from './normalizers'

export const vehicleKeys = {
  GetVehicle: ['vehicle'],
} as const

export const vehicleEndPoints = {
  getVehicle: (carId: string) => `/api/listedcars/${carId}`,
}

export async function VehicleFetcher(carId: string) {
  return normalizeVehicle(
    vehicleAPI
      .parse(await fetch(`${BASE_URL}${vehicleEndPoints.getVehicle(carId)}`)
        .then(r => r.json())),
  )
}
