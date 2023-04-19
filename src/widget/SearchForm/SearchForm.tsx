/* eslint-disable react/jsx-closing-tag-location */
import {
  ArrowTrendingDownIcon,
  ArrowUturnLeftIcon, ChevronRightIcon, FunnelIcon, XMarkIcon,
} from '@heroicons/react/24/outline'

import {
  ExclamationCircleIcon, PlusCircleIcon,
} from '@heroicons/react/24/solid'

import { CButton } from '@/shared/ui/CButton'
import { CAutocomplete } from '@/shared/ui/CAutocomplete'
import { CCheckbox } from '@/shared/ui/CCheckbox'
import { CCheckboxGroup } from '@/shared/ui/CCheckboxGroup'
import { CColorPicker } from '@/shared/ui/CColorPicker'

import {
  colors,
  features,
  fuels,
  kmsDriven,
  price,
  registerDate,
  transmissins,
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
  const [minPrice, setMinPrice] = useState({ value: 0, label: '' })
  const [maxPrice, setMaxPrice] = useState({ value: 0, label: '' })
  const [minRegisterDate, setMinRegisterDate]
  = useState([0])
  const [maxRegisterDate, setMaxRegisterDate]
  = useState([0])
  const [minKmsDriven, setMinKmsDriven]
  = useState([0])
  const [maxKmsDriven, setMaxKmsDriven]
  = useState([0])
  const [selectedTransmissions, setSelectedTransmissions]
  = useState<string[]>([])
  const [selectedFuels, setSelectedFuels] = useState<string[]>([])
  const [selectedColors, setSelecetedColors] = useState<string[]>([])

  const onChangeTransmission = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = e
    if (selectedTransmissions.includes(value)) {
      const filteredValues = selectedTransmissions.filter((item) => {
        return item !== value
      })
      setSelectedTransmissions([...filteredValues])
    }
    else { setSelectedTransmissions([...selectedTransmissions, value]) }
  }
  const onChangeFuels = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = e
    if (selectedFuels.includes(value)) {
      const filteredValues = selectedFuels.filter((item) => {
        return item !== value
      })
      setSelectedFuels([...filteredValues])
    }
    else { setSelectedFuels([...selectedFuels, value]) }
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
                  <div className="text-sm font-semibold text-slate-700">
                      MAKE AND MODEL
                  </div>

                  <CButton
                      classes="border w-full rounded-lg p-2 my-6"
                      variant="border"
                  >
                      <div className="flex flex-1 items-center justify-between">
                          <div className="flex items-center gap-1">
                              <PlusCircleIcon
                                  className="
                                  h-5 w-5 text-indigo-600
                                  "
                              />

                              <span className="text-slate-400">
                                  Add a car
                              </span>
                          </div>

                          <ChevronRightIcon
                              className="
                              h-5 w-5 text-indigo-600
                              "
                          />
                      </div>
                  </CButton>

                  <div className="text-sm font-semibold text-slate-700">
                      PRICE VAT INCL. (EUR)
                  </div>

                  <div className="flex">
                      <CAutocomplete
                          itemsList={price}
                          // @ts-expect-error
                          label={minPrice}
                          onChange={setMinPrice}
                          placeholder="From"
                          rounededSide="left"
                      />

                      <CAutocomplete
                          itemsList={price}
                          // @ts-expect-error
                          label={maxPrice}
                          onChange={setMaxPrice}
                          placeholder="To"
                          rounededSide="right"
                      />
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

                  <div>
                      <div
                          className="
                          mb-1 mt-5 text-sm font-semibold text-slate-700
                          "
                      >
                          REGISTRATION FROM
                      </div>

                      <div className="flex">

                          <CAutocomplete
                              itemsList={[{ value: 0, label: 'From' },
                                ...registerDate]}
                              // @ts-expect-error
                              label={minRegisterDate}
                              onChange={setMinRegisterDate}
                              placeholder="From"
                              rounededSide="left"
                          />

                          <CAutocomplete
                              itemsList={[{ value: 0, label: 'To' },
                                ...registerDate]}
                              // @ts-expect-error
                              label={maxRegisterDate}
                              onChange={setMaxRegisterDate}
                              placeholder="To"
                              rounededSide="right"
                          />
                      </div>
                  </div>

                  <div>
                      <div
                          className="
                          mb-1 mt-5 text-sm font-semibold text-slate-700
                          "
                      >
                          KMS DRIVEN
                      </div>

                      <div className="flex">

                          <CAutocomplete
                              itemsList={kmsDriven}
                              // @ts-expect-error
                              label={minKmsDriven}
                              onChange={setMinKmsDriven}
                              placeholder="From"
                              rounededSide="left"
                          />

                          <CAutocomplete
                              itemsList={kmsDriven}
                              // @ts-expect-error
                              label={maxKmsDriven}
                              onChange={setMaxKmsDriven}
                              placeholder="To"
                              rounededSide="right"
                          />
                      </div>
                  </div>

                  <div>
                      <div className="flex items-end justify-between">
                          <div
                              className="
                              mb-1 mt-5 text-sm font-semibold text-slate-700
                              "
                          >
                              TRANSMISSION
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
                          mainOptions={['Manual', 'Automatic']}
                          onChange={onChangeTransmission}
                          options={transmissins}
                          values={selectedTransmissions}
                      />
                  </div>

                  <div className="mb-4">
                      <div className="flex items-end justify-between">
                          <div
                              className="
                              mb-1 mt-5 text-sm font-semibold text-slate-700
                              "
                          >
                              FUEL
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
                          mainOptions={['Diesel', 'Petrol']}
                          onChange={onChangeFuels}
                          options={fuels}
                          values={selectedFuels}
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
                          FEATURES
                      </div>

                      <div className="flex flex-col gap-2 px-2 text-sm">
                          {features.map(feature => (
                              <CCheckbox key={feature}>
                                  {feature}
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
