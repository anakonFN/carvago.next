import type { Option, Params } from '@/shared/types/models'

import { pick } from '../lib'

import type { modelAPI, paramsAPI } from './types'

export function normalizeParameters(
  params: paramsAPI,
): Params {
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
): Option {
  return {
    key: model.id,
    label: model.name,
  }
}
