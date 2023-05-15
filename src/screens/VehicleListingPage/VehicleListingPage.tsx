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

  const page = Number(router.query.page ?? 1)

  const nextPage = () => {
    void router.push(`/cars?page=${page + 1}`)
  }

  const previousPage = () => {
    if (page - 1 === 1)
      void router.push('/cars')

    else
      void router.push(`/cars?page=${page - 1}`)
  }

  const firstPage = () => {
    void router.push('/cars?page=1')
  }

  type IEvent = React.ChangeEvent<HTMLInputElement>

  const [selectedSort, setSelectedSort] = useState(options[0])
  const [showSearchForm, setShowSearchForm] = useState(false)
  const [selectedMark, setSelectedMark] = useState({ key: 0, label: '' })
  const [selectedModel, setSelectedModel] = useState({ key: 0, label: '' })
  const [minPrice, setMinPrice] = useState({ key: 0, label: '' })
  const [maxPrice, setMaxPrice] = useState({ key: 0, label: '' })
  const [kmsDrivenFrom, setKmsDrivenFrom] = useState({ key: 0, label: '' })
  const [kmsDrivenTo, setKmsDrivenTo] = useState({ key: 0, label: '' })
  const [registrationFrom, setRegistrationFrom]
  = useState({ key: 0, label: '' })
  const [registrationTo, setRegistrationTo] = useState({ key: 0, label: '' })
  const [selectedDriverTypes, setSelectedDriverTypes]
  = useState<number[]>([])
  const [selectedFuels, setSelectedFuels]
  = useState<number[]>([])
  const [selectedTransmissions, setSelectedTransmissions]
  = useState<number[]>([])
  const [selectedColors, setSelecetedColors] = useState<number[]>([])
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const onChangeDriverTypes = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    if (selectedDriverTypes.includes(value)) {
      const filteredValues = selectedDriverTypes.filter((item) => {
        return item !== value
      })
      setSelectedDriverTypes([...filteredValues])
    }
    else { setSelectedDriverTypes([...selectedDriverTypes, value]) }
  }
  const onChangeFuels = (e: IEvent) => {
    const value = parseInt(e.target.value)
    if (selectedFuels.includes(value)) {
      const filteredValues = selectedFuels.filter((item) => {
        return item !== value
      })
      setSelectedFuels([...filteredValues])
    }
    else { setSelectedFuels([...selectedFuels, value]) }
  }
  const onChangeTransmission = (e: IEvent) => {
    const value = parseInt(e.target.value)
    if (selectedTransmissions.includes(value)) {
      const filteredValues = selectedTransmissions.filter((item) => {
        return item !== value
      })
      setSelectedTransmissions([...filteredValues])
    }
    else { setSelectedTransmissions([...selectedTransmissions, value]) }
  }
  const onChangeColor = (e: IEvent) => {
    const value = parseInt(e.target.value)
    if (selectedColors.includes(value)) {
      const filteredValues = selectedColors.filter((item) => {
        return item !== value
      })
      setSelecetedColors([...filteredValues])
    }
    else { setSelecetedColors([...selectedColors, value]) }
  }
  const onChangeOptions = (e: IEvent) => {
    const value = e.target.value
    if (selectedOptions.includes(value)) {
      const filteredValues = selectedOptions.filter((item) => {
        return item !== value
      })
      setSelectedOptions([...filteredValues])
    }
    else { setSelectedOptions([...selectedOptions, value]) }
  }

  const onChangeSort = (e: IEvent) => {
    const { value } = e.target
    const correctOption = options.find(option => option.sortName === value)
    setSelectedSort(correctOption)
  }

  interface IParams {
    'make[]': number
    'model-family[]': number
    'sort': string
    'direction': string
    'transmission': number[]
    'fuel-type': number[]
    'price-from': number
    'price-to': number
    'registration-date-from': number
    'registration-date-to': number
    'mileage-from': number
    'mileage-to': number
    'color': number[]
  }

  const params: Partial<IParams> = {
    'sort': selectedSort?.sortValue,
    'direction': selectedSort?.direction,
    'transmission': selectedTransmissions,
    'fuel-type': selectedFuels,
    'color': selectedColors,
  }

  if (kmsDrivenFrom.label)
    params['mileage-from'] = kmsDrivenFrom.key

  if (kmsDrivenTo.label)
    params['mileage-to'] = kmsDrivenFrom.key

  if (registrationFrom.label)
    params['registration-date-from'] = registrationFrom.key

  if (registrationTo.label)
    params['registration-date-to'] = registrationTo.key

  if (minPrice.label)
    params['price-from'] = minPrice.key

  if (maxPrice.label)
    params['price-to'] = maxPrice.key

  if (selectedModel.key === 0)
    params['make[]'] = selectedMark.key

  if (selectedModel.key >= 1)
    params['model-family[]'] = selectedModel.key

  const { data: cars, isLoading, isFetching }
  = useVehicles(page, 10, params)

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
                            handlers={
                              {
                                onChangeColor,
                                onChangeDriverTypes,
                                onChangeFuels,
                                onChangeOptions,
                                onChangeTransmission,
                              }
                            }
                            isMobile
                            setters={
                              {
                                setKmsDrivenFrom,
                                setKmsDrivenTo,
                                setRegistrationFrom,
                                setRegistrationTo,
                                setMaxPrice,
                                setMinPrice,
                                setSelectedModel,
                                setSelectedMark,
                              }
                            }
                            show={showSearchForm}
                            states={
                              {
                                selectedMark,
                                maxPrice,
                                minPrice,
                                kmsDrivenFrom,
                                kmsDrivenTo,
                                registrationFrom,
                                registrationTo,
                                selectedColors,
                                selectedDriverTypes,
                                selectedModel,
                                selectedOptions,
                                selectedFuels,
                                selectedTransmissions,
                              }
                            }
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
                              <SearchForm
                                  handlers={
                                    {
                                      onChangeColor,
                                      onChangeDriverTypes,
                                      onChangeFuels,
                                      onChangeOptions,
                                      onChangeTransmission,
                                    }
                                  }
                                  setters={
                                    {
                                      setKmsDrivenFrom,
                                      setKmsDrivenTo,
                                      setRegistrationFrom,
                                      setRegistrationTo,
                                      setMaxPrice,
                                      setMinPrice,
                                      setSelectedModel,
                                      setSelectedMark,
                                    }
                                  }
                                  states={
                                    {
                                      selectedMark,
                                      maxPrice,
                                      minPrice,
                                      kmsDrivenFrom,
                                      kmsDrivenTo,
                                      registrationFrom,
                                      registrationTo,
                                      selectedColors,
                                      selectedDriverTypes,
                                      selectedModel,
                                      selectedOptions,
                                      selectedFuels,
                                      selectedTransmissions,
                                    }
                                  }
                              />
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
