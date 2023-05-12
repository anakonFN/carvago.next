import { z } from 'zod'
import { useQuery } from '@tanstack/react-query'
import { modelAPI, paramsAPI } from './types'

const BASE_URL = 'https://carvago-server.vercel.app'

export function useParams() {
  return useQuery(['aggregations'], async () => {
    return paramsAPI
      .parse(await fetch(`${BASE_URL}/api/listedcars/aggregations`)
        .then(r => r.json()))
  })
}

export function useModels(makeId: number) {
  return useQuery(['marks', makeId, 'models'], async () => {
    if (makeId === undefined)
      throw new Error('mark is undefined')
    return z.array(modelAPI)
      .parse(await fetch(`${BASE_URL}/api/makes/${makeId}/model-families`)
        .then(r => r.json()))
  }, { enabled: !!makeId })
}
