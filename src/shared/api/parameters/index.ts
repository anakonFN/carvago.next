import { z } from 'zod'
import { useQuery } from '@tanstack/react-query'
import { MarksAPI } from './types'

const BASE_URL = 'http://localhost:5000'

export function useCategories() {
  return useQuery(['categories'], () => {
    return fetch(`${BASE_URL}/api/categories`).then(r => r.json())
  })
}

export function useMarks() {
  return useQuery(['marks'], async () => {
    return z.array(MarksAPI)
      .parse(await fetch(`${BASE_URL}/api/categories/1/marks`)
        .then(r => r.json()))
  })
}

export function useModels(markId: number | undefined) {
  return useQuery(['marks', markId, 'models'], async () => {
    if (markId === undefined)
      throw new Error('mark is undefined')
    return z.array(MarksAPI)
      .parse(await fetch(`${BASE_URL}/api/categories/1/marks/${markId}/models`)
        .then(r => r.json()))
  }, { enabled: !!markId })
}
