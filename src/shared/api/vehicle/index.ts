import { useQuery } from '@tanstack/react-query'
import { vehicleAPI } from './types'

const BASE_URL = 'https://carvago-server.vercel.app'

export function useVehicle(carId: string) {
  return useQuery(['vehicle'], async () => {
    return vehicleAPI
      .parse(await fetch(`${BASE_URL}/api/listedcars/${carId}`)
        .then(r => r.json()))
  }, { keepPreviousData: false })
}
