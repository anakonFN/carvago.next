import type { Vehicle } from '@/shared/types/models'

import { pick } from '../lib'

import type { vehicleAPI } from './types'

export function normalizeVehicles(
  vehicle: vehicleAPI,
): Vehicle {
  const {
    drive,
    fuel_type,
    location_country,
    mileage,
    power_hp,
    registration_date,
    uniform_price,
  } = vehicle

  return {
    ...pick(
      vehicle,
      'id',
      'power',
      'title',
      'transmission',
      'features',
      'seller',
      'images',
      'features',
    ),
    powerHp: power_hp,
    registrationDate: registration_date,
    locationCountry: location_country,
    price: uniform_price,
    kmsDriven: mileage,
    driveType: drive,
    fuelType: fuel_type,
  }
}
