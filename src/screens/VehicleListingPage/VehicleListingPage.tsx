import {
  AdjustmentsHorizontalIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline'

import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { SearchForm } from '@/widget/SearchForm'
import { VehicleCard } from '@/widget/VehicleCard'

import { CLayout } from '@/shared/ui/CLayout'
import { CRadioGroup } from '@/shared/ui/CRadioGroup'
import { useVehicles } from '@/shared/api/vehicles'

import { options } from './config'

export function VehicleListingPage() {
  const router = useRouter()

  const page = Number(router.query.page)

  const nextPage = () => {
    void router.push(`/cars?page=${page + 1}`)
  }

  const previousPage = () => {
    void router.push(`/cars?page=${page - 1}`)
  }

  const firstPage = () => {
    void router.push('/cars?page=1')
  }

  const [selectedSort, setSelectedSort] = useState(options[0])
  const [showSearchForm, setShowSearchForm] = useState(false)

  const onChangeSort = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSort(e.target.value)
  }

  const { data: cars, isLoading, isFetching } = useVehicles(page, 10)

  if (isLoading) {
    return (
        <CLayout>
            <Head>
                <title>
                    Carvago | cars
                </title>
            </Head>

            <div className='my-48 text-center font-bold'>
                LOADING...
            </div>
        </CLayout>
    )
  }

  if (isFetching) {
    return (
        <CLayout>
            <Head>
                <title>
                    Carvago | cars
                </title>
            </Head>

            <div className='my-48 text-center font-bold'>
                LOADING...
            </div>
        </CLayout>
    )
  }

  if (cars?.length === undefined) {
    return (
        <CLayout>
            <Head>
                <title>
                    Carvago | cars
                </title>
            </Head>

            <div className='my-48 text-center font-bold'>
                NOT FOUND CARS
            </div>
        </CLayout>
    )
  }

  const openSearchForm = () => setShowSearchForm(true)

  const closeSearchForm = () => {
    setShowSearchForm(false)
    document.body.style.overflow = 'auto'
  }

  return (
      <CLayout>
          <>
              <Head>
                  <title>
                      Carvago | cars
                  </title>
              </Head>

              <div
                  className="block py-4 shadow-2xl min-[1300px]:hidden"
                  onClick={openSearchForm}
              >
                  <div
                      className="
                        ml-3 inline-flex items-center
                        rounded-md bg-blue-700 px-2 py-1
                        "
                      onClick={openSearchForm}
                  >
                      <AdjustmentsHorizontalIcon
                          className="h-5 w-5 text-white"
                      />

                      <div className="font-semibold text-white">
                          Filter
                      </div>

                  </div>
              </div>

              <div
                  className={
                `fixed right-0 top-0 z-30 
                ${showSearchForm ? 'translate-x-0' : 'translate-x-full'}
                transition-all duration-300 ease-in`
        }
              >
                  {showSearchForm
                    ? <SearchForm
                            carNumber={cars.length}
                            closeSidebar={closeSearchForm}
                            isMobile
                            show={showSearchForm}
                      />
                    : null}
              </div>

              <div className="bg-gray-800">
                  <div className="bg-slate-100 py-5">
                      <div
                          className="
                            mx-auto flex justify-center md:max-w-[1222px]
                            "
                      >

                          <div className="hidden min-[1300px]:block">
                              <SearchForm />
                          </div>

                          <div className="px-1 md:pr-0 lg:pl-8">
                              <div
                                  className="
                                    mb-8 flex items-end
                                    gap-5 text-slate-700
                                    "
                              >
                                  <div className="text-3xl font-extrabold">
                                      Verified cars
                                  </div>
                              </div>

                              <div
                                  className="
                                    flex items-center justify-between
                                    "
                              >
                                  <div className="my-5">
                                      <CRadioGroup
                                          currentValue={selectedSort}
                                          onChange={onChangeSort}
                                          options={options}
                                      />
                                  </div>

                              </div>

                              <div
                                  className="
                                    grid-cols-2 flex-col gap-3
                                    px-2 sm:grid
                                    sd:flex-row sd:gap-4
                                    md:flex md:flex-col md:px-0
                                    "
                              >
                                  {cars.map((car) => {
                                    return (
                                        <Link
                                            className="sd:flex sd:w-full"
                                            href={`/car/${car.id}`}
                                            key={car.id}
                                        >
                                            <VehicleCard
                                                car={car}
                                            />
                                        </Link>
                                    )
                                  })}
                              </div>

                              <div
                                  className="
                                   mt-8 flex items-center justify-between
                                   "
                              >
                                  <button
                                      className="
                                      h-8 whitespace-nowrap
                                      rounded-lg border
                                      border-blue-800 px-1 text-blue-800
                                      transition duration-200
                                      hover:shadow-md
                                      hover:shadow-blue-700/50
                                      disabled:opacity-60
                                      disabled:shadow-none
                                      "
                                      disabled={page === 1}
                                      onClick={firstPage}
                                  >

                                      FIRST PAGE
                                  </button>

                                  <div
                                      className="flex w-full justify-evenly"
                                  >
                                      <button
                                          className="
                                          flex h-8 items-center
                                          rounded-lg border
                                          border-blue-800 px-1 text-blue-800
                                          transition duration-200
                                          hover:shadow-md
                                          hover:shadow-blue-700/50
                                          disabled:opacity-60
                                          disabled:shadow-none
                                          "
                                          disabled={page <= 1}
                                          onClick={previousPage}
                                      >

                                          <ChevronLeftIcon
                                              className="h-4 w-4"
                                          />
                                          PREVIOUS
                                      </button>

                                      <button
                                          className="
                                          flex h-8 items-center
                                          rounded-lg border
                                          border-blue-800 px-1 text-blue-800
                                          transition duration-200
                                          hover:shadow-md
                                          hover:shadow-blue-700/50
                                          disabled:opacity-60
                                          disabled:shadow-none
                                          "
                                          onClick={nextPage}
                                      >
                                          NEXT
                                          <ChevronRightIcon
                                              className="h-4 w-4"
                                          />
                                      </button>

                                  </div>
                              </div>

                          </div>
                      </div>
                  </div>
              </div>
          </>
      </CLayout>
  )
}
