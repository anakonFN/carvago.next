/* eslint-disable max-len */
import type { Meta } from '@storybook/react'

import { CCarousel, type CCarouselProps } from '.'

const meta: Meta<CCarouselProps> = {
  title: 'Shared/UI/CCarousel',
  component: CCarousel,
}

export default meta

const images = [
  {
    id: 1,
    path: 'https://storage.prod.alpha-analytics.dev/resize/e5392b79-5807-45d5-a185-4eed9b9ced3e?fit=inside&height=1096&width=1600&withoutEnlargement=false',
  },
  {
    id: 2,
    path: 'https://storage.prod.alpha-analytics.dev/resize/cb5ad8a2-3d5a-4304-a8cc-775ac8c2f61d?fit=inside&height=1096&width=1600&withoutEnlargement=false',
  },
]

export function Default() {
  return (
      <div className="group max-w-[640px]">
          <CCarousel
              images={images}
              variant='big'
          />
      </div>
  )
}
