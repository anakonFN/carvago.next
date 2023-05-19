import { useQuery } from '@tanstack/react-query'

import { VehicleFetcher, vehicleKeys } from './query'

export function useVehicle(carId: string) {
  return useQuery(vehicleKeys.GetVehicle, () => VehicleFetcher(carId), {
    keepPreviousData: false,
    refetchOnWindowFocus: false,
  })
}
