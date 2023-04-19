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

import Link from 'next/link'

import { CButton } from '@/shared/ui/CButton'
import { CCarousel } from '@/shared/ui/CCarousel'
import { CAdvantages } from '@/shared/ui/CAdvantages'

import hangar from './assets/hangar.svg'
import speedometer from './assets/speedometer.svg'
import occasion from './assets/occasion.svg'
import road from './assets/road.svg'
import motor from './assets/motor.svg'
import gas from './assets/gas.svg'

import { cars } from './config'
import Image from 'next/image'
import { CLayout } from '@/shared/ui/CLayout'
import Head from 'next/head'

// interface Props {
//   car: car
// }

export function VehiclePage({ id = 1 }: { id: number }) {
  const car = cars.find(car => +id === car.id)!
  const numbFmt = new Intl.NumberFormat('ru-RU').format(car.price)
  const numbFmtVAT = new Intl.NumberFormat('ru-RU').format(car.price * 0.79)
  const [liked, setLiked] = useState(false)

  return (
      <CLayout>
          <Head>
              <title>
                  Carvago |
                  {' '}

                  {`${car.make} ${car.model}`}
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
                  "
              >
                  <div className="flex flex-col justify-between">
                      <div>
                          <p className="mb-5 text-3xl font-bold text-slate-700">
                              {car.make}

                              {' '}

                              {car.model}

                              {' '}

                              {Math.trunc(car.power * 0.74)}

                              {' '}
                              kW
                          </p>

                          <div className="mb-2 flex max-w-2xl flex-wrap gap-2">
                              {car.features.map((feature) => {
                                return (
                                    <div
                                        className="
                                        flex w-auto items-center
                                        rounded-md bg-blue-100 px-1 py-0.5
                                        text-sm text-blue-700
                                        "
                                        key={feature}
                                    >
                                        <CheckCircleIcon
                                            className="h-4 w-4"
                                        />

                                        {feature}
                                    </div>
                                )
                              })}
                          </div>
                      </div>

                      <div className="group max-w-[640px]">
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

                                      {car.seller.name}
                                  </div>

                                  <div className="flex items-center gap-1">
                                      <StarIcon
                                          className="h-4 w-4 text-yellow-500"
                                      />

                                      {' '}

                                      <span className="text-sm font-bold">
                                          {car.seller.rate}
                                      </span>

                                      <span className="ml-2 text-xs">
                                          (
                                          {Math.trunc(car.seller.rate)}

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
                                  {car.location}
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
                                  {car.driven}
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
                                  {car.registration}
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
                                  {car.transmission}
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
                                  {car.fuel}
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
                                  {car.consumption}
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
                                  {car.allWheel === false
                                    ? (
                                        <div>
                                            4x2
                                        </div>
                                      )
                                    : (
                                        <div>
                                            4x4
                                        </div>
                                      )}
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
