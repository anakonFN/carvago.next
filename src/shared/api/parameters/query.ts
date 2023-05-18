import { z } from 'zod'

import { BASE_URL } from '../lib'

import { normalizeModel, normalizeParameters } from './normalizers'
import { modelAPI, paramsAPI } from './types'

export const paramsKeys = {
  GetParams: ['aggregations'],
  GetModels: (makeId: number) => ['marks', makeId, 'models'],
} as const

export const paramsEndpoints = {
  getParams: '/api/listedcars/aggregations',
  getModels: (makeId: number) => `/api/makes/${makeId}/model-families`,
}

export async function paramsFetcher() {
  return normalizeParameters(
    paramsAPI
      .parse(await fetch(`${BASE_URL}${paramsEndpoints.getParams}`)
        .then(r => r.json())),
  )
}

export async function modelsFetcher(makeId: number) {
  if (makeId === undefined)
    throw new Error('mark is undefined')
  return z.array(modelAPI)
    .parse(await fetch(`${BASE_URL}${paramsEndpoints.getModels(makeId)}`)
      .then(r => r.json())).map(model => normalizeModel(model))
}
