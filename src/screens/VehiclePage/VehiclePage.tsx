import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import {
  CalendarIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  Cog8ToothIcon,
  HeartIcon,
  PlusIcon,
  ShieldCheckIcon,
  TruckIcon,
} from '@heroicons/react/24/outline'

import {
  HeartIcon as HeartIconSolid,
  MapPinIcon,
  StarIcon,
} from '@heroicons/react/24/solid'

import { useVehicle } from '@/shared/api/vehicle'
import { CButton } from '@/shared/ui/CButton'
import { CCarousel } from '@/shared/ui/CCarousel'
import { CAdvantages } from '@/shared/ui/CAdvantages'
import { CLayout } from '@/shared/ui/CLayout'

import hangar from './assets/hangar.svg'
import speedometer from './assets/speedometer.svg'
import occasion from './assets/occasion.svg'
import road from './assets/road.svg'
import motor from './assets/motor.svg'
import gas from './assets/gas.svg'

interface Props {
  carId: string
}

export function VehiclePage({ carId = '52849457' }: Props) {
  const { data: car, isLoading } = useVehicle(carId)
  const [liked, setLiked] = useState(false)

  if (car === undefined) {
    return (
        <CLayout>
            <Head>
                <title>
                    Carvago | cars
                </title>
            </Head>

            <div className='my-48 text-center font-bold'>
                NOT FOUND CAR
            </div>
        </CLayout>
    )
  }

  if (isLoading) {
    return (
        <CLayout>
            <Head>
                <title>
                    Carvago | car
                </title>
            </Head>

            <div className='my-48 text-center font-bold'>
                LOADING...
            </div>
        </CLayout>
    )
  }

  const numbFmt = new Intl.NumberFormat('ru-RU')
    .format(Math.trunc(car.uniform_price))
  const numbFmtVAT = new Intl
    .NumberFormat('ru-RU').format(Math.trunc(car.uniform_price))

  return (
      <CLayout>
          <Head>
              <title>
                  Carvago |
                  {' '}

                  {car.title}
              </title>
          </Head>

          <div className="mx-auto max-w-[1110px] px-3 pb-10">
              <div
                  className="py-4"
              >
                  <Link href="/cars">
                      <CButton
                          classes="gap-2 underline-offset-8"
                          variant="underline"
                      >
                          <ChevronLeftIcon className="h-5 w-5" />

                          <div className="text-sm font-bold">
                              Back to results
                          </div>
                      </CButton>
                  </Link>
              </div>

              <div
                  className="
                  flex flex-col items-center gap-10 pb-10 md:flex-row
                  md:items-start
                  "
              >
                  <div className="flex flex-col justify-between">
                      <div>
                          <p className="mb-5 text-3xl font-bold text-slate-700">
                              {car.title}
                          </p>

                          <div className="mb-2 flex max-w-2xl flex-wrap gap-2">
                              {car.features.slice(1, 12).map((feature) => {
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
                      </div>

                      <div className="group h-96 max-w-[640px]">
                          <CCarousel
                              images={car.images}
                              variant='big'
                          />
                      </div>
                  </div>

                  <div className="w-full md:w-auto">
                      <div
                          className="
                          mb-11 w-full border py-2 md:border-none md:py-0
                          "
                      >
                          <div
                              className="
                              mb-5 text-center text-3xl
                              font-bold text-slate-700
                              "
                          >
                              {numbFmt}

                              &euro;
                          </div>

                          <div className="text-center text-slate-500">
                              <span className="font-medium">
                                  {numbFmtVAT}

                                  {' '}

                                  &euro;

                              </span>

                              {' '}

                              without 21% VAT
                          </div>
                      </div >

                      <div
                          className="
                          mb-3 rounded-md border
                          px-5 py-4 text-slate-500 md:w-[340px]
                          "
                      >
                          <div
                              className="
                              flex justify-between pb-2 md:justify-start
                              "
                          >
                              <div className="flex w-1/2 items-center gap-1">
                                  <TruckIcon className="h-4 w-4" />

                                  <div
                                      className="
                                      flex items-center gap-1 text-sm underline
                                      "
                                  >
                                      Delivery
                                      <ChevronDownIcon
                                          className="h-4 w-4"
                                      />
                                  </div>

                              </div>

                              <div className="flex rounded-md bg-orange-200">
                                  <div
                                      className="rounded-l-md bg-orange-400 p-1"
                                  >
                                      <PlusIcon
                                          className="
                                          h-4 w-4 rounded-full
                                          bg-yellow-500/40 p-1 text-yellow-900
                                          "
                                      />
                                  </div>

                                  <div
                                      className="
                                    p-1 text-xs font-bold text-yellow-900
                                    "
                                  >
                                      Enter ZIP code
                                  </div>
                              </div>
                          </div>

                          <div
                              className="
                              flex items-center justify-between md:justify-start
                              "
                          >
                              <div className="flex w-1/2 items-center gap-1">
                                  <ShieldCheckIcon className="h-4 w-4" />

                                  <div className="text-sm font-semibold">
                                      Extended warranty
                                  </div>

                              </div>

                              <div
                                  className="
                                  text-xs font-extrabold text-green-600
                                  "
                              >
                                  Free
                              </div>
                          </div>
                      </div>

                      <div
                          className="
                          mb-3 rounded-md border
                          px-5 py-4 text-slate-500 md:w-[340px]
                          "
                      >
                          <div
                              className="
                              flex justify-between pb-2 md:justify-start
                              "
                          >
                              <div className="flex w-1/2 items-center gap-1">
                                  <Image
                                      alt="hangar"
                                      className="h-4 w-4 text-slate-500"
                                      src={hangar}
                                  />

                                  <div
                                      className="
                                    flex items-center gap-1 text-sm
                                    "
                                  >
                                      Vendor
                                  </div>

                              </div>

                              <div>
                                  <div>

                                      {car.seller.type.name}
                                  </div>

                                  <div className="flex items-center gap-1">
                                      <StarIcon
                                          className="h-4 w-4 text-yellow-500"
                                      />

                                      {' '}

                                      <span className="text-sm font-bold">
                                          {car.seller.rating_average}
                                      </span>

                                      <span className="ml-2 text-xs">
                                          (
                                          {Math
                                            .trunc(Number(car
                                              .seller.rating_average),
                                            )}

                                          {' '}
                                          ratings)
                                      </span>
                                  </div>
                              </div>
                          </div>

                          <div
                              className="
                              flex items-center justify-between md:justify-start
                              "
                          >
                              <div className="flex w-1/2 items-center gap-1">
                                  <MapPinIcon className="h-4 w-4" />

                                  <div className="text-sm">
                                      Location
                                  </div>

                              </div>

                              <div className="text-sm font-semibold">
                                  {car.location_country.name}
                              </div>
                          </div>
                      </div>

                      <div
                          className="
                          mb-3 flex flex-col gap-3 rounded-md
                          border px-5 py-4 text-slate-500 md:w-[340px]
                          "
                      >
                          <div
                              className="
                              flex items-center justify-between md:justify-start
                              "
                          >
                              <div className="flex w-1/2 items-center gap-1">
                                  <Image
                                      alt="road"
                                      className="h-4 w-4"
                                      src={road}
                                  />

                                  <div className="text-sm">
                                      Kms drievn
                                  </div>

                              </div>

                              <div className="text-sm font-semibold">
                                  {car.mileage}
                              </div>
                          </div>

                          <div
                              className="
                              flex items-center justify-between md:justify-start
                              "
                          >
                              <div className="flex w-1/2 items-center gap-1">
                                  <CalendarIcon className="h-4 w-4" />

                                  <div className="text-sm">
                                      First registration
                                  </div>

                              </div>

                              <div className="text-sm font-semibold">
                                  {car.registration_date}
                              </div>
                          </div>

                          <div
                              className="
                              flex items-center justify-between md:justify-start
                              "
                          >
                              <div className="flex w-1/2 items-center gap-1">
                                  <Cog8ToothIcon className="h-4 w-4" />

                                  <div className="text-sm">
                                      Transmisson
                                  </div>

                              </div>

                              <div className="text-sm font-semibold">
                                  {car.transmission.name}
                              </div>
                          </div>

                          <div
                              className="
                              flex items-center justify-between md:justify-start
                              "
                          >
                              <div className="flex w-1/2 items-center gap-1">
                                  <Image
                                      alt="motor"
                                      className="h-4 w-4"
                                      src={motor}
                                  />

                                  <div className='text-sm'>
                                      Power
                                  </div>

                              </div>

                              <div className="text-sm font-semibold">
                                  {Math.trunc(car.power * 0.74)}

                                  {' '}

                                  kW

                                  (
                                  {car.power}

                                  {' '}
                                  hp)
                              </div>
                          </div>

                          <div
                              className="
                                flex items-center justify-between
                                md:justify-start
                                "
                          >
                              <div className="flex w-1/2 items-center gap-1">
                                  <Image
                                      alt="gas"
                                      className="h-4 w-4"
                                      src={gas}
                                  />

                                  <div className="text-sm">
                                      Fuel
                                  </div>

                              </div>

                              <div className="text-sm font-semibold">
                                  {car.fuel_type.name}
                              </div>
                          </div>

                          <div
                              className="
                              flex items-center justify-between md:justify-start
                              "
                          >
                              <div className="flex w-1/2 items-center gap-1">
                                  <Image
                                      alt="speedometer"
                                      className="h-4 w-4"
                                      src={speedometer}
                                  />

                                  <div className="text-sm">
                                      Consumption
                                  </div>

                              </div>

                              <div className="text-sm font-semibold">
                                  {car.fuel_consumption_combined}
                                  l
                                  /100km
                              </div>
                          </div>

                          <div
                              className="
                              flex items-center justify-between md:justify-start
                              "
                          >
                              <div className="flex w-1/2 items-center gap-1">
                                  <Image
                                      alt="occasion"
                                      className="h-4 w-4"
                                      src={occasion}
                                  />

                                  <div className="text-sm">
                                      Drive type
                                  </div>

                              </div>

                              <div className="text-sm font-semibold">
                                  {car.drive.name}
                              </div>
                          </div>
                      </div>

                      <div className="flex justify-between">
                          <button
                              className={clsx(
                                liked
                                  ? 'border-indigo-700'
                                  : 'border-indigo-300',
                                'rounded-md border  p-2',
                              )}
                              onClick={() => setLiked(!liked)}
                          >
                              {
                              liked
                                ? (
                                    <HeartIconSolid
                                        className="h-6 w-6 text-indigo-600"
                                    />
                                  )
                                : (
                                    <HeartIcon
                                        className="h-6 w-6 text-indigo-600"
                                    />
                                  )
                              }
                          </button>

                          <CButton
                              classes="sm:px-32 px-24"
                              size="lg"
                              variant="warning"
                          >
                              Buy
                          </CButton>
                      </div>
                  </div>
              </div>

              <div className="flex justify-center">
                  <CAdvantages />
              </div>
          </div>
      </CLayout>
  )
}
