export interface vehicle {
  id: string | number
  title: string
  power: number
  powerHp: number | null
  price: number
  fuelType: {
    id: string | number
    name: string
  }
  transmission: {
    id: string | number
    name: string
  }
  driveType: {
    id: string | number
    name: string
  }
  registrationDate: string
  kmsDriven: number
  locationCountry: {
    id: string | number
    name: string
  }
  seller: {
    id: string | number
    type: {
      id: string | number
      name: string
    }
    country: {
      id: string | number
      name: string
    }
    rating_average?: number | string | null
    rating_count?: number | string | null
    offers_count?: number | string | null
  }
  images: {
    id: number | string
    path: string
  }[]
  features: {
    id: string | number
    name: string
  }[]
  fuelConsumptionCombined?: number | null
}
