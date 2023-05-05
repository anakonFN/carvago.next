import Image from 'next/image'

import {
  CalendarDaysIcon,
  CalendarIcon,
  Cog8ToothIcon,
  MapPinIcon,
  ShieldCheckIcon,
  TruckIcon,
} from '@heroicons/react/24/outline'

import {
  CheckCircleIcon,
  StarIcon,
} from '@heroicons/react/24/solid'

import { CButton } from '@/shared/ui/CButton'
import type { vehicleAPI } from '@/shared/api/vehicles/types'
import { CCarousel } from '@/shared/ui/CCarousel'

import road from './assets/road.svg'
import motor from './assets/motor.svg'
import gas from './assets/gas.svg'
import hangar from './assets/hangar.svg'
import occasion from './assets/occasion.svg'

export interface Props extends React.BaseHTMLAttributes<HTMLDivElement> {
  car: vehicleAPI
}

export function VehicleCard({ car, ...props }: Props) {
  const numbFmt = new Intl.NumberFormat('ru-RU')
    .format(Math.trunc(car.uniform_price))
  const numbFmtVAT = new Intl
    .NumberFormat('ru-RU').format(Math.trunc(car.uniform_price))

  return (
      <div
          className="
          group cursor-pointer
          gap-3 rounded-md bg-white p-2 transition-shadow
          duration-300 hover:shadow-md md:flex md:w-full
          "
          {...props}
      >
          <div
              className="
                h-full flex-col justify-between
                md:flex md:flex-row md:gap-4
                "
          >
              <div className="m-auto w-60">
                  <CCarousel
                      images={car.images}
                      variant='small'
                  />
              </div>

              <div className="flex h-[440px] flex-col md:h-full">
                  <div
                      className="
                      mb-3 text-lg font-semibold leading-6
                      text-slate-600 transition duration-300
                      group-hover:text-indigo-700
                      "
                  >
                      {car.title}
                  </div>

                  <div
                      className="
                      mb-4 flex flex-wrap gap-2
                      text-slate-600
                      sm:justify-between md:max-w-[31.25rem]
                      "
                  >
                      <div className="flex items-center gap-2">
                          <Image
                              alt="driven"
                              className="h-4 w-4"
                              src={road}
                          />

                          <div className="text-xs font-semibold">

                              {`${car.mileage}K`}

                              {' '}

                              km
                          </div>
                      </div>

                      <div className="flex items-center gap-2">
                          <CalendarIcon className="h-4 w-4" />

                          <div className="text-xs font-semibold">
                              {car.registration_date}
                          </div>
                      </div>

                      <div className="flex items-center gap-2">
                          <Image
                              alt="motor"
                              className="h-4 w-4"
                              src={motor}
                          />

                          <div className="text-xs font-semibold">
                              {car.power}

                              {' '}
                              hp
                          </div>
                      </div>

                      <div className="flex items-center gap-2">
                          <Cog8ToothIcon className="h-4 w-4" />

                          <div className="text-xs font-semibold">
                              {car.transmission.name}
                          </div>
                      </div>

                      <div className="flex items-center gap-2">
                          <Image
                              alt="fuel"
                              className="h-4 w-4"
                              src={gas}
                          />

                          <div className="text-xs font-semibold">
                              {car.fuel_type.name}
                          </div>
                      </div>

                      {car.drive.name === '4X4'
                        ? (
                            <div className="flex items-center gap-2">
                                <Image
                                    alt="occasion"
                                    className="h-4 w-4"
                                    src={occasion}
                                />

                                <div className="text-xs font-semibold">
                                    4x4
                                </div>
                            </div>
                          )
                        : null}
                  </div>

                  <div className="mb-4 flex flex-wrap gap-2">
                      {car.features.slice(1, 5).map((feature) => {
                        return (
                            <div
                                className="
                                flex w-auto items-center
                                rounded-md bg-blue-100 px-1 py-0.5
                                text-sm text-blue-700
                                "
                                key={feature.name}
                            >
                                <CheckCircleIcon
                                    className="h-4 w-4"
                                />

                                {feature.name}
                            </div>
                        )
                      })}
                  </div>

                  <div
                      className="
                      mt-auto flex flex-col
                      justify-between md:flex-row
                      md:flex-nowrap md:justify-start md:gap-3
                      "
                  >
                      <div
                          className="
                          flex w-full flex-col gap-2
                          rounded-md bg-slate-100
                          px-3 py-2 text-slate-500 md:w-[208px]
                          "
                      >
                          <div className="flex justify-between">
                              <div className="ml-0.5 flex gap-1">
                                  <Image
                                      alt="hangar"
                                      className="h-4 w-4"
                                      src={hangar}
                                  />

                                  <div
                                      className="
                                      self-end whitespace-nowrap
                                      text-xs font-semibold
                                      "
                                  >
                                      {car.seller.type.name}
                                  </div>
                              </div>

                              <div
                                  className="
                                    flex w-10 gap-1 bg-white p-0.5
                                    "
                              >
                                  <StarIcon
                                      className="h-4 w-4 text-yellow-500"
                                  />

                                  <span
                                      className="
                                      self-end text-xs font-bold
                                      "
                                  >
                                      {car.seller.rating_average}
                                  </span>
                              </div>
                          </div>

                          <div className="flex gap-1">
                              <MapPinIcon className="h-5 w-5" />

                              <span className="self-end text-xs font-bold">
                                  {car.location_country.name}
                              </span>
                          </div>

                          <div className="flex gap-1">
                              <CalendarDaysIcon className="h-5 w-5" />

                              <span className="self-end text-xs font-bold">
                                  {car.source_created_at}
                              </span>
                          </div>
                      </div>

                      <div
                          className="
                          w-full flex-wrap
                          rounded-md bg-slate-100 px-3
                          py-2 text-slate-500
                          md:flex md:w-[31rem]
                          "
                      >
                          <div className="flex w-[208px] flex-col gap-2">
                              <div className="flex justify-between">
                                  <div className="flex gap-1">
                                      <TruckIcon className="h-5 w-5" />

                                      <div
                                          className="
                                          self-end text-xs font-bold
                                          "
                                      >
                                          Delivery
                                      </div>
                                  </div>

                                  <CButton
                                      className="
                                      text-xs font-bold
                                      text-slate-600 underline
                                      "
                                      variant="light"
                                  >
                                      Enter ZIP code
                                  </CButton>
                              </div>

                              <div className="flex justify-between">
                                  <div className="flex">
                                      <ShieldCheckIcon
                                          className="h-5 w-5"
                                      />

                                      <div
                                          className="
                                          self-end text-xs font-bold
                                          "
                                      >
                                          Warranty
                                      </div>
                                  </div>

                                  <div
                                      className="
                                      self-end text-xs
                                      font-extrabold text-green-600
                                      "
                                  >
                                      Free
                                  </div>
                              </div>
                          </div>

                          <div
                              className="
                                      -my-2 ml-4 hidden h-auto
                                      w-[1px] bg-slate-200 md:block
                                      "
                          />

                          <div
                              className="
                                      ml-auto mt-3 md:mt-0
                                      md:self-end md:justify-self-end
                                      "
                          >
                              <div
                                  className="
                                  text-xl font-bold
                                  text-slate-600 md:text-right
                                  "
                              >
                                  {numbFmt}

                                  {' '}

                                  &euro;
                              </div>

                              <div className="text-sm font-medium">
                                  {numbFmtVAT}

                                  {' '}

                                  &euro;

                                  {' '}

                                  without VAT
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}
