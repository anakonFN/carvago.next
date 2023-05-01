/* eslint-disable react/jsx-closing-tag-location */
import {
  ArrowTrendingDownIcon,
  ArrowUturnLeftIcon, ChevronRightIcon, FunnelIcon, XMarkIcon,
} from '@heroicons/react/24/outline'

import {
  ExclamationCircleIcon,
} from '@heroicons/react/24/solid'

import { CButton } from '@/shared/ui/CButton'
import { CAutocomplete } from '@/shared/ui/CAutocomplete'
import { CCheckbox } from '@/shared/ui/CCheckbox'
import { CCheckboxGroup } from '@/shared/ui/CCheckboxGroup'
import { CColorPicker } from '@/shared/ui/CColorPicker'

import {
  useCities,
  useDriverType,
  useFuels,
  useMarks,
  useModels,
  useOptions,
  useRegions,
  useTransmissions,
} from '@/shared/api/parameters'

import {
  colors,
  price,
} from './config'

interface Props extends React.BaseHTMLAttributes<HTMLDivElement> {
  isMobile?: boolean
  show?: boolean
  closeSidebar?: () => void
  carNumber?: number
}

export function SearchForm({
  isMobile,
  show,
  closeSidebar,
  carNumber,
  ...props
}: Props) {
  const { data: marks } = useMarks()
  const { data: regions } = useRegions()
  const { data: driverTypes } = useDriverType()
  const { data: fuels } = useFuels()
  const { data: transmissions } = useTransmissions()
  const { data: options } = useOptions()

  const [selectedMark, setSelectedMark] = useState({ value: 0, name: '' })
  const [selectedModel, setSelectedModel] = useState({ value: 0, name: '' })
  const [minPrice, setMinPrice] = useState({ value: 0, name: '' })
  const [maxPrice, setMaxPrice] = useState({ value: 0, name: '' })
  const [selectedRegion, setSelectedRegion] = useState({ value: 0, name: '' })
  const [selectedCity, setSelectedCity] = useState({ value: 0, name: '' })
  const [selectedDriverTypes, setSelectedDriverTypes]
  = useState<number[]>([])
  const [selectedFuels, setSelectedFuels]
  = useState<number[]>([])
  const [selectedTransmissions, setSelectedTransmissions]
  = useState<number[]>([])
  const [selectedColors, setSelecetedColors] = useState<string[]>([])
  const [selectedOptions, setSelectedOptions] = useState<number[]>([])

  const { data: models } = useModels(selectedMark.value)
  const { data: cities } = useCities(selectedRegion.value)

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
  const onChangeFuels = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    if (selectedFuels.includes(value)) {
      const filteredValues = selectedFuels.filter((item) => {
        return item !== value
      })
      setSelectedFuels([...filteredValues])
    }
    else { setSelectedFuels([...selectedFuels, value]) }
  }
  const onChangeTransmission = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    if (selectedTransmissions.includes(value)) {
      const filteredValues = selectedTransmissions.filter((item) => {
        return item !== value
      })
      setSelectedTransmissions([...filteredValues])
    }
    else { setSelectedTransmissions([...selectedTransmissions, value]) }
  }
  const onChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = e
    if (selectedColors.includes(value)) {
      const filteredValues = selectedColors.filter((item) => {
        return item !== value
      })
      setSelecetedColors([...filteredValues])
    }
    else { setSelecetedColors([...selectedColors, value]) }
  }
  const onChangeOptions = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)
    if (selectedOptions.includes(value)) {
      const filteredValues = selectedOptions.filter((item) => {
        return item !== value
      })
      setSelectedOptions([...filteredValues])
    }
    else { setSelectedOptions([...selectedOptions, value]) }
  }

  useEffect(() => {
    if (show && isMobile)
      document.body.style.overflow = 'hidden'
    else
      document.body.style.overflow = 'auto'
  }, [show, isMobile])

  return (
      <div
          {...props}
      >
          { isMobile
            ? (
                <div
                    className="
                    sticky z-50 flex items-center justify-between
                    bg-white p-[30px] shadow-xl
                    "
                >
                    <div className="flex gap-2">
                        <FunnelIcon className="h-5 w-5 text-slate-300" />

                        <div className="text-lg font-bold text-slate-700">
                            Filter
                        </div>
                    </div>

                    <div onClick={closeSidebar}>
                        <XMarkIcon className="h-5 w-5 text-indigo-600" />
                    </div>

                </div>)
            : null}

          { isMobile
            ? (
                <div
                    className="
                    fixed bottom-0 z-50 items-center
                    bg-white p-[30px] shadow-xl
                    "
                >
                    <div
                        className="
                        whitespace-nowrap bg-blue-700 px-16 py-2
                        text-center font-semibold text-white
                        "
                        onClick={closeSidebar}
                    >
                        {carNumber}

                        {' '}
                        offers
                    </div
                    >
                </div>
              )
            : null}

          <div className={clsx(
            isMobile && ' h-screen overflow-y-auto overflow-x-hidden',
            'relative w-72 bg-white p-6',
          )}
          >

              <CButton
                  classes="text-indigo-600 gap-1"
                  variant="link"
              >
                  <ArrowUturnLeftIcon className="h-4 w-4" />
                  Previous filters
              </CButton>

              <div
                  className="
                  mx-[-2.2rem] my-8 h-[1px]
                  w-auto bg-slate-200 lg:block
                  "
              />

              <div>
                  <div className='mb-4'>
                      <div className="text-sm font-semibold text-slate-700">
                          MARK AND MODEL
                      </div>

                      <div className='mb-2'>
                          <CAutocomplete
                              itemsList={marks ?? []}
                              onChange={setSelectedMark}
                              placeholder='Make'
                              value={selectedMark}
                          />
                      </div>

                      <div>

                          <CAutocomplete
                              disabled={selectedMark.name.length === 0}
                              itemsList={models ?? []}
                              onChange={setSelectedModel}
                              placeholder='Model'
                              value={selectedModel}
                          />
                      </div>
                  </div>

                  <div className="text-sm font-semibold text-slate-700">
                      PRICE VAT INCL. (EUR)
                  </div>

                  <div className="flex">
                      <CAutocomplete
                          itemsList={price}
                          onChange={setMinPrice}
                          placeholder="From"
                          rounededSide="left"
                          value={minPrice}
                      />

                      <CAutocomplete
                          itemsList={price}
                          onChange={setMaxPrice}
                          placeholder="To"
                          rounededSide="right"
                          value={maxPrice}
                      />
                  </div>

                  <div className='my-4'>
                      <div className="text-sm font-semibold text-slate-700">
                          REGION AND CITY
                      </div>

                      <div className='mb-2'>
                          <CAutocomplete
                              itemsList={regions ?? []}
                              onChange={setSelectedRegion}
                              placeholder='Region'
                              value={selectedRegion}
                          />
                      </div>

                      <div>

                          <CAutocomplete
                              disabled={selectedRegion.name.length === 0}
                              itemsList={cities ?? []}
                              onChange={setSelectedCity}
                              placeholder='City'
                              value={selectedCity}
                          />
                      </div>
                  </div>

                  <div className="my-4 rounded-md bg-slate-100 px-2 py-3">
                      <CCheckbox>
                          <div className="flex items-center">
                              <div
                                  className="
                                  whitespace-nowrap text-sm text-slate-600
                                  "
                              >
                                  Discounted cars
                              </div>

                              <ExclamationCircleIcon
                                  className="h-4 w-4 self-end text-slate-400"
                              />

                              <ArrowTrendingDownIcon
                                  className="h-5 w-5 text-orange-400"
                              />
                          </div>
                      </CCheckbox>
                  </div>

                  <div className="px-2">
                      <CCheckbox>
                          VAT deducion
                      </CCheckbox>
                  </div>

                  <div className='mb-4'>
                      <div className="flex items-end justify-between">
                          <div
                              className="
                              mb-1 mt-5 text-sm font-semibold text-slate-700
                              "
                          >
                              DRIVER TYPES
                          </div>

                          { selectedDriverTypes.length >= 1
                        && <div
                            className="
                            mb-1 h-6 w-6 rounded-full
                            bg-blue-600 text-center font-semibold text-white
                            "
                           >
                            {selectedDriverTypes.length}
                        </div>}
                      </div>

                      <CCheckboxGroup
                          mainOptions={driverTypes?.slice(0, 2) ?? []}
                          onChange={onChangeDriverTypes}
                          options={driverTypes ?? []}
                          values={selectedDriverTypes}
                      />
                  </div>

                  <div className='mb-4'>
                      <div className="flex items-end justify-between">
                          <div
                              className="
                              mb-1 mt-5 text-sm font-semibold text-slate-700
                              "
                          >
                              FUELS
                          </div>

                          { selectedFuels.length >= 1
                        && <div
                            className="
                            mb-1 h-6 w-6 rounded-full
                            bg-blue-600 text-center font-semibold text-white
                            "
                           >
                            {selectedFuels.length}
                        </div>}
                      </div>

                      <CCheckboxGroup
                          mainOptions={fuels?.slice(0, 2) ?? []}
                          onChange={onChangeFuels}
                          options={fuels ?? []}
                          values={selectedFuels}
                      />
                  </div>

                  <div className='mb-4'>
                      <div className="flex items-end justify-between">
                          <div
                              className="
                              mb-1 mt-5 text-sm font-semibold text-slate-700
                              "
                          >
                              TRANSMISSIONS
                          </div>

                          { selectedTransmissions.length >= 1
                        && <div
                            className="
                            mb-1 h-6 w-6 rounded-full
                            bg-blue-600 text-center font-semibold text-white
                            "
                           >
                            {selectedTransmissions.length}
                        </div>}
                      </div>

                      <CCheckboxGroup
                          mainOptions={transmissions?.slice(1, 3) ?? []}
                          onChange={onChangeTransmission}
                          options={transmissions ?? []}
                          values={selectedTransmissions}
                      />
                  </div>

                  <div className="px-2">
                      <CCheckbox>
                          VAT deducion
                      </CCheckbox>
                  </div>

                  <div>
                      <div
                          className="
                          mb-1 mt-5 text-sm font-semibold text-slate-700
                          "
                      >
                          EXTERIOR COLOR
                      </div>

                      <CColorPicker
                          colors={colors}
                          onChange={onChangeColor}
                          values={selectedColors}
                      />
                  </div>

                  <div>
                      <div
                          className="
                          mb-1 mt-5 text-sm font-semibold text-slate-700
                          "
                      >
                          OPTIONS
                      </div>

                      <div className="flex flex-col gap-2 px-2 text-sm">
                          {options?.slice(0, 10).map(option => (
                              <CCheckbox
                                  checked={
                                    selectedOptions
                                      .includes(option.value)
                                  }
                                  key={option.value}
                                  onChange={onChangeOptions}
                                  value={option.value}
                              >
                                  {option.name}
                              </CCheckbox>
                          ))}
                      </div>
                  </div>

                  <div>
                      <CButton
                          classes='underline-offset-8'
                          variant="underline"
                      >
                          <div
                              className="
                              mt-5 flex items-center gap-3 text-sm font-semibold
                              "
                          >
                              More features
                              <ChevronRightIcon className="h-5 w-5" />
                          </div>
                      </CButton>
                  </div>

                  <div
                      className="
                      mx-[-2.2rem] my-8 h-[1px] w-auto bg-slate-200
                      "
                  />

                  <CButton
                      classes="
                      py-3 rounded-md w-full flex justify-center
                      hover:shadow-md hover:shadow-blue-700/10
                      "
                      variant="border"
                  >
                      <span
                          className="
                          text-sm font-semibold text-indigo-600
                          "
                      >
                          Details search
                      </span>
                  </CButton>

              </div>
          </div>
      </div>
  )
}
