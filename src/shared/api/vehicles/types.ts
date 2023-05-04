import { z } from 'zod'

export const vehcileAPI = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  vin: z.string().nullable(),
  hot: z.boolean(),
  user: z.null(),
  cubic_capacity: z.number().nullable(),
  power: z.number(),
  number_of_seats: z.number(),
  features: z.array(
    z.object({ id: z.string(), const_key: z.string(), name: z.string() }),
  ),
  fuel_type: z.object({
    id: z.string(),
    const_key: z.string(),
    name: z.string(),
  }),
  transmission: z.object({
    id: z.string(),
    const_key: z.string(),
    name: z.string(),
  }),
  vehicle_type: z.object({
    id: z.string(),
    const_key: z.string(),
    name: z.string(),
  }).nullable(),
  fuel_consumption_urban: z.number().nullable(),
  fuel_consumption_extra_urban: z.number().nullable(),
  fuel_consumption_combined: z.number().nullable(),
  fuel_consumption_unit: z.string().nullable(),
  power_unit: z.string(),
  weight: z.number().nullable(),
  number_of_gears: z.number().nullable(),
  carbon_dioxide_emission: z.number().nullable(),
  drive: z.object({ id: z.string(), const_key: z.string(), name: z.string() }),
  car_style: z.object({
    id: z.string(),
    const_key: z.string(),
    name: z.string(),
  }),
  emission_class: z.object({
    id: z.string(),
    const_key: z.string(),
    name: z.string(),
  }).nullable(),
  equipment_version: z.string().nullable(),
  manufactured_from: z.object({
    date: z.string(),
    timezone_type: z.number(),
    timezone: z.string(),
  }),
  manufactured_to: z.object({
    date: z.string(),
    timezone_type: z.number(),
    timezone: z.string(),
  }).nullable(),
  interior_material: z.object({
    id: z.string(),
    const_key: z.string(),
    name: z.string(),
  }).nullable(),
  number_of_airbags: z.null(),
  air_conditioning: z.object({
    id: z.string(),
    const_key: z.string(),
    name: z.string(),
  }).nullable(),
  audio: z.object({
    id: z.string(),
    const_key: z.string(),
    name: z.string(),
  }).nullable(),
  auxiliary_heating: z.null(),
  ceiling_material: z.null(),
  cruise_control: z.object({
    id: z.string(),
    const_key: z.string(),
    name: z.string(),
  }).nullable(),
  display: z.null(),
  door_count: z.object({
    id: z.string(),
    const_key: z.string(),
    name: z.string(),
  }),
  folding_roof: z.null(),
  hands_free: z.object({
    id: z.string(),
    const_key: z.string(),
    name: z.string(),
  }).nullable(),
  headlights_type: z.object({
    id: z.string(),
    const_key: z.string(),
    name: z.string(),
  }).nullable(),
  parking_camera: z.object({
    id: z.string(),
    const_key: z.string(),
    name: z.string(),
  }).nullable(),
  parking_sensors: z.object({
    id: z.string(),
    const_key: z.string(),
    name: z.string(),
  }).nullable(),
  rear_spoiler: z.null(),
  sliding_doors: z.object({
    id: z.string(),
    const_key: z.string(),
    name: z.string(),
  }).nullable(),
  spare_tyre: z.object({
    id: z.string(),
    const_key: z.string(),
    name: z.string(),
  }).nullable(),
  sunroof: z.null(),
  tailgate_opening: z.null(),
  trailer_coupling: z.object({
    id: z.string(),
    const_key: z.string(),
    name: z.string(),
  }).nullable(),
  number_of_cylinders: z.null(),
  model_edition: z.object({
    model_family: z.object({
      make: z.object({ id: z.string(), name: z.string() }),
      id: z.string(),
      name: z.string(),
      full_name: z.string(),
    }),
    id: z.string(),
    name: z.string(),
    full_name: z.string(),
  }),
  created_at: z.object({
    date: z.string(),
    timezone_type: z.number(),
    timezone: z.string(),
  }),
  updated_at: z.string(),
  car: z.object({ id: z.string() }),
  registration_date: z.string(),
  mileage: z.number(),
  number_of_owners: z.number().nullable(),
  color: z.object({
    id: z.string(),
    const_key: z.string(),
    name: z.string(),
  }).nullable(),
  interior_color: z.object({
    id: z.string(),
    const_key: z.string(),
    name: z.string(),
  }).nullable(),
  condition: z.object({
    id: z.string(),
    const_key: z.string(),
    name: z.string(),
  }).nullable(),
  origin_country: z.object({
    id: z.string(),
    const_key: z.string(),
    name: z.string(),
    iso_code: z.string(),
  }).nullable(),
  last_registration_country: z.null(),
  technical_inspection_valid_to: z.object({
    date: z.string(),
    timezone_type: z.number(),
    timezone: z.string(),
  }).nullable(),
  export_advantage: z.null(),
  number_of_keys: z.null(),
  warranty_mileage: z.null(),
  warranty_date: z.null(),
  source_created_at: z.string(),
  manufacture_date: z.string(),
  first_registration_country: z.null(),
  former_country: z.null(),
  wheel_diameter: z.null(),
  registered: z.null(),
  only_for_export: z.null(),
  color_specification: z.object({
    id: z.string(),
    const_key: z.string(),
    name: z.string(),
  }).nullable(),
  color_shade: z.null(),
  enum_any_checks: z.array(
    z.object({ id: z.string(), const_key: z.string(), name: z.string() }),
  ),
  score: z.number(),
  source_name: z.string(),
  external_url: z.string(),
  advertisement_score: z.null(),
  first_crawl: z.object({
    date: z.string(),
    timezone_type: z.number(),
    timezone: z.string(),
  }),
  location_post_code: z.string(),
  location_street: z.string(),
  location_city: z.string(),
  location_number: z.string(),
  location_country: z.object({
    id: z.string(),
    const_key: z.string(),
    name: z.string(),
    iso_code: z.string(),
  }),
  status: z.string(),
  external_score: z.number(),
  suggested: z.boolean(),
  seller: z.object({
    id: z.string(),
    type: z.object({ id: z.string(), const_key: z.string(), name: z.string() }),
    country: z.object({
      id: z.string(),
      const_key: z.string(),
      name: z.string(),
      iso_code: z.string(),
    }),
    zip: z.string(),
    email: z.null(),
    rating_average: z.number().nullable(),
    rating_count: z.number().nullable(),
    offers_count: z.number(),
  }),
  grade_score: z.number(),
  hidden: z.boolean(),
  cloned_advertised_car: z.null(),
  in_preparation: z.boolean(),
  sold_at: z.null(),
  carvago_pickup_point: z.null(),
  gefco_pickup_point: z.null(),
  external_id: z.string(),
  uniform_price: z.number(),
  number_of_images: z.number(),
  platform: z.null(),
  advertising_rules: z.array(z.unknown()),
  pbt_algorithm: z.string(),
  available_in_feed: z.null(),
  available_in_feed_computed: z.boolean().nullable(),
  make: z.object({ const_key: z.string(), label: z.string() }),
  model: z.object({ const_key: z.string(), label: z.string() }),
  catalog_features: z.array(
    z.object({ const_key: z.string(), label: z.string() }),
  ),
  vehicle_class: z.string().nullable(),
  vehicle_tags: z.array(z.object({ const_key: z.string() })),
  labels: z.array(z.unknown()),
  image: z.object({ id: z.number(), path: z.string() }),
  images: z.array(
    z.object({
      id: z.number(),
      path: z.string(),
      ordering: z.number(),
      ordering_computed: z.number().nullable(),
    }),
  ),
  main_image: z.string(),
  price_information: z.object({
    currency: z.object({
      id: z.number(),
      name: z.string(),
      const_key: z.string(),
    }),
    vat_reclaimable: z.boolean(),
    margin_data: z.object({
      price_with_margin: z.number(),
      margin_price: z.number(),
      margin_percent: z.number(),
      price_margin_fixed: z.boolean(),
    }),
    nice_price_data: z.object({
      price: z.number(),
      price_without_vat: z.number().nullable(),
    }),
    price_data: z.object({
      price: z.number(),
      vat_rate: z.number().nullable(),
      price_without_vat: z.number().nullable(),
    }),
    previous_price_data: z.null(),
    discount_data: z.object({
      price: z.number(),
      vat_rate: z.number().nullable(),
      price_without_vat: z.number().nullable(),
      is_discounted: z.boolean(),
    }),
  }),
  price: z.number(),
  price_without_vat: z.number().nullable(),
  vat_rate: z.number().nullable(),
  exact_price: z.number(),
  exact_price_without_vat: z.number().nullable(),
  vat_reclaimable: z.boolean(),
  price_currency: z.object({
    id: z.number(),
    name: z.string(),
    const_key: z.string(),
  }),
  original_currency: z.object({ id: z.string() }),
  power_hp: z.number(),
})

export type vehcileAPI = z.infer<typeof vehcileAPI>