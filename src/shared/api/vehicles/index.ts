import { z } from 'zod'
import { useQuery } from '@tanstack/react-query'
import { vehicleAPI } from './types'

const BASE_URL = 'https://api.carvago.com'

export function useVehicles(page = 1, limit = 1) {
  return useQuery(['vehicles'], async () => {
    return z.array(vehicleAPI)
      .parse(await fetch(
        `${BASE_URL}/api/listedcars?page=${page}&limit=${limit}`,
      ).then(r => r.json()))
  })
}
