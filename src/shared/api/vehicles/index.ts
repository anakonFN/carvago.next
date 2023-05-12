import { z } from 'zod'
import { useQuery } from '@tanstack/react-query'
import { vehicleAPI } from './types'

const BASE_URL = 'https://carvago-server.vercel.app'

export function useVehicles(page = 1, limit = 1, filters) {
  const queryParams = new URLSearchParams(
    {
      page,
      limit,
      ...filters,
    }).toString()

  return useQuery(['vehicles', page], async () => {
    return z.array(vehicleAPI)
      .parse(await fetch(
        `${BASE_URL}/api/listedcars?${queryParams}`,
      ).then(r => r.json()))
  }, { refetchOnWindowFocus: false })
}
