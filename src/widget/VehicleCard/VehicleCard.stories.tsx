/* eslint-disable max-len */
import type { Meta } from '@storybook/react'

import { VehicleCard, type VehicleCardProps } from '.'

const meta: Meta<VehicleCardProps> = {
  title: 'Widget/VehicleCard',
  component: VehicleCard,
}

export default meta

export function Default() {
  const car = {
    id: 1,
    images: [
      'https://bidfax.info/uploads/posts/2020-05/13/mercedes-benz-glk-250-bl-2015-wdcgg0eb2fg374348-img1.jpg',
      'https://bidfax.info/uploads/posts/2020-05/13/mercedes-benz-glk-250-bl-2015-wdcgg0eb2fg374348-img2.jpg',
      'https://bidfax.info/uploads/posts/2020-05/13/mercedes-benz-glk-250-bl-2015-wdcgg0eb2fg374348-img3.jpg',
      'https://bidfax.info/uploads/posts/2020-05/13/mercedes-benz-glk-250-bl-2015-wdcgg0eb2fg374348-img4.jpg',
      'https://bidfax.info/uploads/posts/2020-05/13/mercedes-benz-glk-250-bl-2015-wdcgg0eb2fg374348-img5.jpg',
      'https://bidfax.info/uploads/posts/2020-05/13/mercedes-benz-glk-250-bl-2015-wdcgg0eb2fg374348-img6.jpg',
      'https://bidfax.info/uploads/posts/2020-05/13/mercedes-benz-glk-250-bl-2015-wdcgg0eb2fg374348-img7.jpg',
      'https://bidfax.info/uploads/posts/2020-05/13/mercedes-benz-glk-250-bl-2015-wdcgg0eb2fg374348-img8.jpg',
      'https://bidfax.info/uploads/posts/2020-05/13/mercedes-benz-glk-250-bl-2015-wdcgg0eb2fg374348-img9.jpg',
      'https://bidfax.info/uploads/posts/2020-05/13/mercedes-benz-glk-250-bl-2015-wdcgg0eb2fg374348-img10.jpg',
    ],
    make: 'Mercedes-Benz',
    model: 'GLK 250CDI',
    driven: 128,
    registration: 2015,
    power: 204,
    transmission: 'Automatic',
    fuel: 'Diesel',
    features: [
      'LED headlights',
      'Cruise control',
      'Navigation',
      'Air condtitioning',
      '360 camera',
      'panorama',
      'ILS',
    ],
    location: 'Lviv',
    price: 21900,
    seller: {
      name: 'Used cars seller',
      rate: 4.7,
    },
    whenPutUp: 20,
    allWheel: true,
    consumption: 100,
  }

  return (
      <VehicleCard car={car} />
  )
}
