import {
  AdjustmentsHorizontalIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline'

import Head from 'next/head'
import Link from 'next/link'

import { SearchForm } from '@/widget/SearchForm'
import { VehicleCard } from '@/widget/VehicleCard'

import { CButton } from '@/shared/ui/CButton'
import { CLayout } from '@/shared/ui/CLayout'
import { CRadioGroup } from '@/shared/ui/CRadioGroup'
import { useVehicles } from '@/shared/api/vehicles'

import { options } from './config'

export function VehicleListingPage() {
  const [selectedSort, setSelectedSort] = useState(options[0])
  const [correctPage, setCorrectPage] = useState(1)
  const [showSearchForm, setShowSearchForm] = useState(false)

  const onChangeSort = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSort(e.target.value)
  }

  const { data: cars } = useVehicles(correctPage, 20)

  if (cars?.length === undefined)
    return

  const totalPages = cars.length

  const hasPrevPage = correctPage > 1
  const hasNextPage = correctPage < cars.length

  const hanlerPrevPage = () => {
    if (hasPrevPage)
      setCorrectPage(correctPage - 1)
  }
  const hanlerNextPage = () => {
    if (hasNextPage)
      setCorrectPage(correctPage + 1)
  }

  const openSearchForm = () => setShowSearchForm(true)

  const closeSearchForm = () => setShowSearchForm(false)

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

                                  <div>
                                      <strong>
                                          {cars.length}
                                      </strong>

                                      {' '}

                                      {cars.length > 1 ? 'results' : 'result'}
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

                                  <div
                                      className="
                                        hidden items-center gap-2 sd:flex
                                        "
                                  >
                                      <CButton
                                          classes="
                                            h-8 px-1 disabled:opacity-50
                                            hover:shadow-md
                                            hover:shadow-blue-700/50
                                            transition duration-200
                                            disabled:shadow-none
                                            "
                                          disabled={!hasPrevPage}
                                          onClick={hanlerPrevPage}
                                          variant='primary'
                                      >
                                          <ChevronLeftIcon
                                              className="h-4 w-4 text-white"
                                          />
                                      </CButton>

                                      <div className="flex gap-1">
                                          <p>
                                              {correctPage}
                                          </p>

                                          <p>
                                              /
                                          </p>

                                          <p>
                                              {totalPages}
                                          </p>
                                      </div>

                                      <CButton
                                          classes="
                                            h-8 px-1 disabled:opacity-50
                                            hover:shadow-md
                                            hover:shadow-blue-700/30
                                            transition duration-200
                                            disabled:shadow-none
                                            "
                                          disabled={!hasNextPage}
                                          onClick={hanlerNextPage}
                                          variant='primary'
                                      >
                                          <ChevronRightIcon
                                              className="h-4 w-4 text-white"
                                          />
                                      </CButton>
                                  </div>
                              </div>

                              <div
                                  className="
                                    flex flex-col gap-3
                                    px-2 sd:flex-row sd:gap-4
                                    md:flex-col md:px-0
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

                          </div>
                      </div>
                  </div>
              </div>
          </>
      </CLayout>
  )
}
