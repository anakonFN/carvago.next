import { z } from 'zod'
import { useQuery } from '@tanstack/react-query'
import { type filterAPI, vehicleAPI } from './types'

const BASE_URL = 'https://carvago-server.vercel.app'

export function useVehicles(page = 1, limit = 1, filters: Partial<filterAPI>) {
  const queryParams = new URLSearchParams(
    // @ts-expect-error
    {
      page,
      limit,
      ...filters,
    }).toString()

  return useQuery(['vehicles', page, filters], async () => {
    return z.array(vehicleAPI)
      .parse(await fetch(
        `${BASE_URL}/api/listedcars?${queryParams}`,
      ).then(r => r.json()))
  }, { refetchOnWindowFocus: false })
}
