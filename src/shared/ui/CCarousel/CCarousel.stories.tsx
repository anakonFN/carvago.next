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
    path: 'https://bidfax.info/uploads/posts/2023-01/05/mclaren-automotive-720s-2019-sbm14dca7kw003067-img1.jpg',
    ordering: 1,
    ordering_computed: undefined,
    variants: [],
  },
  {
    id: 2,
    path: 'https://bidfax.info/uploads/posts/2023-01/05/mclaren-automotive-720s-2019-sbm14dca7kw003067-img2.jpg',
    ordering: 2,
    ordering_computed: undefined,
    variants: [],
  },
  {
    id: 3,
    path: 'https://bidfax.info/uploads/posts/2023-01/05/mclaren-automotive-720s-2019-sbm14dca7kw003067-img3.jpg',
    ordering: 3,
    ordering_computed: undefined,
    variants: [],
  },
  {
    id: 4,
    path: 'https://bidfax.info/uploads/posts/2023-01/05/mclaren-automotive-720s-2019-sbm14dca7kw003067-img4.jpg',
    ordering: 4,
    ordering_computed: undefined,
    variants: [],
  },
  {
    id: 5,
    path: 'https://bidfax.info/uploads/posts/2023-01/05/mclaren-automotive-720s-2019-sbm14dca7kw003067-img5.jpg',
    ordering: 5,
    ordering_computed: undefined,
    variants: [],
  },
  {
    id: 6,
    path: 'https://bidfax.info/uploads/posts/2023-01/05/mclaren-automotive-720s-2019-sbm14dca7kw003067-img6.jpg',
    ordering: 6,
    ordering_computed: undefined,
    variants: [],
  },
  {
    id: 7,
    path: 'https://bidfax.info/uploads/posts/2023-01/05/mclaren-automotive-720s-2019-sbm14dca7kw003067-img7.jpg',
    ordering: 7,
    ordering_computed: undefined,
    variants: [],
  },
  {
    id: 8,
    path: 'https://bidfax.info/uploads/posts/2023-01/05/mclaren-automotive-720s-2019-sbm14dca7kw003067-img8.jpg',
    ordering: 8,
    ordering_computed: undefined,
    variants: [],
  },
  {
    id: 9,
    path: 'https://bidfax.info/uploads/posts/2023-01/05/mclaren-automotive-720s-2019-sbm14dca7kw003067-img9.jpg',
    ordering: 9,
    ordering_computed: undefined,
    variants: [],
  },
  {
    id: 10,
    path: 'https://bidfax.info/uploads/posts/2023-01/05/mclaren-automotive-720s-2019-sbm14dca7kw003067-img10.jpg',
    ordering: 10,
    ordering_computed: undefined,
    variants: [],
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
