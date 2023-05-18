import type { option, params } from '@/shared/types/params'

import { pick } from '../lib'

import type { modelAPI, paramsAPI } from './types'

export function normalizeParameters(
  params: paramsAPI,
): params {
  return {
    ...pick(
      params,
      'color',
      'make',
      'transmission',
    ),
    fuelType: params.fuel_type,
  }
}

export function normalizeModel(
  model: modelAPI,
): option {
  return {
    key: model.id,
    label: model.name,
  }
}
