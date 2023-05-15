import { useQuery } from '@tanstack/react-query'
import { modelsFetcher, paramsFetcher, paramsKeys } from './query'

export function useParams() {
  return useQuery(paramsKeys.GetParams, paramsFetcher)
}

export function useModels(makeId: number) {
  return useQuery(paramsKeys.GetModels(makeId), () => modelsFetcher(makeId), {
    enabled: !!makeId,
  })
}
