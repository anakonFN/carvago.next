/* eslint-disable max-len */
export interface car {
  id: number
  images: string[]
  make: string
  model: string
  driven: number
  registration: number
  power: number
  transmission: string
  fuel: string
  features: string[]
  location: string
  price: number
  seller: {
    name: string
    rate: number
  }
  whenPutUp: number
  allWheel?: boolean
  consumption: number
}

export const cars: car[] = [
  {
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
    driven: 103,
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
    consumption: 7,
  },
  {
    id: 2,
    images: [
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
    ],
    make: 'Mclaren',
    model: '720S',
    driven: 23.5,
    registration: 2019,
    power: 720,
    transmission: 'Automatic',
    fuel: 'Petrol',
    features: [
      'LED headlights',
      'Navigation',
      'Air condtitioning',
      '360 camera',
    ],
    location: 'Kyiv',
    price: 240000,
    seller: {
      name: 'Dealership',
      rate: 4.9,
    },
    whenPutUp: 31,
    allWheel: false,
    consumption: 20,
  },
]

export const options = [
  {
    sortName: 'Recommended',
    sortValue: 'recommended',
    direction: 'asc'
  },
  {
    sortName: 'Lowest Price',
    sortValue: 'price',
    direction: 'asc',
  },
  {
    sortName: 'Highest Price',
    sortValue: 'price',
    direction: 'desc',
  },
  {
    sortName: 'Newest ad',
    sortValue: 'publish-date',
    direction: 'desc',
  },
  {
    sortName: 'Lowest mileage',
    sortValue: 'mileage',
    direction: 'asc',
  },
]
