import { z } from 'zod'
import { useQuery } from '@tanstack/react-query'
import queryString from 'query-string'

import { type filterAPI, vehicleAPI } from './types'

const BASE_URL = 'https://carvago-server.vercel.app'

export function useVehicles(page = 1, limit = 1, filters: Partial<filterAPI>) {
  const queryParams = queryString.stringify(
    {
      page,
      limit,
      ...filters,
    }, { arrayFormat: 'bracket' })
  return useQuery(['vehicles', page, filters], async () => {
    return z.array(vehicleAPI)
      .parse(await fetch(
        `${BASE_URL}/api/listedcars?${queryParams}`,
      ).then(r => r.json()))
  }, { refetchOnWindowFocus: false })
}
