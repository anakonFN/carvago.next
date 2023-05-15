import { vehicleAPI } from './types'
import { BASE_URL } from '../lib'

export const vehicleKeys = {
  GetVehicle: ['vehicle'],
} as const

export const vehicleEndPoints = {
  getVehicle: (carId: string) => `/api/listedcars/${carId}`,
}

export async function VehicleFetcher(carId: string) {
  return vehicleAPI
    .parse(await fetch(`${BASE_URL}${vehicleEndPoints.getVehicle(carId)}`)
      .then(r => r.json()))
}
