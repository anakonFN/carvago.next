/* eslint-disable max-len */
import type { Meta } from '@storybook/react'

import { CCarousel, type CCarouselProps } from '.'

const meta: Meta<CCarouselProps> = {
  title: 'Shared/UI/CCarousel',
  component: CCarousel,
}

export default meta

const images = [
  'https://bidfax.info/uploads/posts/2023-01/05/mclaren-automotive-720s-2019-sbm14dca7kw003067-img1.jpg',
  'https://bidfax.info/uploads/posts/2023-01/05/mclaren-automotive-720s-2019-sbm14dca7kw003067-img2.jpg',
  'https://bidfax.info/uploads/posts/2023-01/05/mclaren-automotive-720s-2019-sbm14dca7kw003067-img3.jpg',
  'https://bidfax.info/uploads/posts/2023-01/05/mclaren-automotive-720s-2019-sbm14dca7kw003067-img4.jpg',
  'https://bidfax.info/uploads/posts/2023-01/05/mclaren-automotive-720s-2019-sbm14dca7kw003067-img5.jpg',
  'https://bidfax.info/uploads/posts/2023-01/05/mclaren-automotive-720s-2019-sbm14dca7kw003067-img6.jpg',
  'https://bidfax.info/uploads/posts/2023-01/05/mclaren-automotive-720s-2019-sbm14dca7kw003067-img7.jpg',
  'https://bidfax.info/uploads/posts/2023-01/05/mclaren-automotive-720s-2019-sbm14dca7kw003067-img8.jpg',
  'https://bidfax.info/uploads/posts/2023-01/05/mclaren-automotive-720s-2019-sbm14dca7kw003067-img9.jpg',
  'https://bidfax.info/uploads/posts/2023-01/05/mclaren-automotive-720s-2019-sbm14dca7kw003067-img10.jpg',
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
