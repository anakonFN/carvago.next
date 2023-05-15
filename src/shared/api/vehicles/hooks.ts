import { useQuery } from '@tanstack/react-query'
import queryString from 'query-string'

import { type filterAPI } from './types'
import { vehiclesFetcher, vehiclesKeys } from './query'

export function useVehicles(
  page = 1,
  limit: number,
  filters: Partial<filterAPI>,
) {
  const queryParams = queryString.stringify(
    {
      page,
      limit,
      ...filters,
    },
    { arrayFormat: 'bracket' },
  )
  return useQuery(
    vehiclesKeys.GetVehicles(page, filters, limit),
    () => vehiclesFetcher(queryParams),
    { refetchOnWindowFocus: false },
  )
}
