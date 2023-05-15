/* eslint-disable react/jsx-handler-names */
import type { Dispatch, SetStateAction } from 'react'

import {
  ArrowUturnLeftIcon, ChevronRightIcon, FunnelIcon, XMarkIcon,
} from '@heroicons/react/24/outline'

import { CButton } from '@/shared/ui/CButton'
import { CAutocomplete } from '@/shared/ui/CAutocomplete'
import { CCheckbox } from '@/shared/ui/CCheckbox'
import { CCheckboxGroup } from '@/shared/ui/CCheckboxGroup'
import { CColorPicker } from '@/shared/ui/CColorPicker'

import {
  useModels,
  useParams,
} from '@/shared/api/parameters'

import {
  kmsDriven,
  features as options,
  price,
  registerDate,
} from './config'

interface filterOption {
  key: number
  label: string
}

type IEvent = React.ChangeEvent<HTMLInputElement>

interface Props extends React.BaseHTMLAttributes<HTMLDivElement> {
  isMobile?: boolean
  show?: boolean
  closeSidebar?: () => void
  carNumber?: number
  states: {
    selectedMark: filterOption
    selectedModel: filterOption
    minPrice: filterOption
    maxPrice: filterOption
    kmsDrivenFrom: filterOption
    kmsDrivenTo: filterOption
    registrationFrom: filterOption
    registrationTo: filterOption
    selectedDriverTypes: number[]
    selectedFuels: number[]
    selectedTransmissions: number[]
    selectedColors: number[]
    selectedOptions: string[]
  }
  handlers: {
    onChangeDriverTypes: (e: IEvent) => void
    onChangeFuels: (e: IEvent) => void
    onChangeTransmission: (e: IEvent) => void
    onChangeColor: (e: IEvent) => void
    onChangeOptions: (e: IEvent) => void
  }
  setters: {
    setSelectedMark: Dispatch<SetStateAction<filterOption>>
    setSelectedModel: Dispatch<SetStateAction<filterOption>>
    setMinPrice: Dispatch<SetStateAction<filterOption>>
    setMaxPrice: Dispatch<SetStateAction<filterOption>>
    setKmsDrivenFrom: Dispatch<SetStateAction<filterOption>>
    setKmsDrivenTo: Dispatch<SetStateAction<filterOption>>
    setRegistrationTo: Dispatch<SetStateAction<filterOption>>
    setRegistrationFrom: Dispatch<SetStateAction<filterOption>>
  }
}

export function SearchForm({
  isMobile,
  show,
  closeSidebar,
  carNumber,
  states,
  handlers,
  setters,
  ...props
}: Props) {
  const { data: params } = useParams()

  const { data: models } = useModels(states.selectedMark.key)

  const correctModels = models?.map((model) => {
    return {
      label: model.name,
      key: model.id,
    }
  })

  const datesFrom = registerDate
    .filter(data => Number(data.label) >= Number(states.registrationFrom.label))
  const priceFrom = price
    .filter(data => Number(data.label) >= Number(states.minPrice.label))
  const kmsDrivenFrom = kmsDriven
    .filter(kms => Number(kms.label) >= Number(states.kmsDrivenFrom.label))

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
                    sticky top-16 z-50 flex items-center
                    justify-between bg-white p-[30px] shadow-xl
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
                    </div>
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
                              itemsList={params?.make ?? []}
                              onChange={setters.setSelectedMark}
                              placeholder='Make'
                              value={states.selectedMark}
                          />
                      </div>

                      <div>

                          <CAutocomplete
                              disabled={states.selectedMark.label.length === 0}
                              itemsList={correctModels ?? []}
                              onChange={setters.setSelectedModel}
                              placeholder='Model'
                              value={states.selectedModel}
                          />
                      </div>
                  </div>

                  <div className='mb-4'>
                      <div className="text-sm font-semibold text-slate-700">
                          PRICE VAT INCL. (EUR)
                      </div>

                      <div className="flex">
                          <CAutocomplete
                              itemsList={price}
                              onChange={setters.setMinPrice}
                              placeholder="From"
                              rounededSide="left"
                              value={states.minPrice}
                          />

                          <CAutocomplete
                              itemsList={priceFrom}
                              onChange={setters.setMaxPrice}
                              placeholder="To"
                              rounededSide="right"
                              value={states.maxPrice}
                          />
                      </div>
                  </div>

                  <div className='mb-4'>
                      <div className="text-sm font-semibold text-slate-700">
                          REGISTRATION
                      </div>

                      <div className="flex">
                          <CAutocomplete
                              itemsList={registerDate}
                              onChange={setters.setRegistrationFrom}
                              placeholder="From"
                              rounededSide="left"
                              value={states.registrationFrom}
                          />

                          <CAutocomplete
                              itemsList={datesFrom}
                              onChange={setters.setRegistrationTo}
                              placeholder="To"
                              rounededSide="right"
                              value={states.registrationTo}
                          />
                      </div>
                  </div>

                  <div>
                      <div className="text-sm font-semibold text-slate-700">
                          KMS DRIVEN
                      </div>

                      <div className="flex">
                          <CAutocomplete
                              itemsList={kmsDriven}
                              onChange={setters.setKmsDrivenFrom}
                              placeholder="From"
                              rounededSide="left"
                              value={states.kmsDrivenFrom}
                          />

                          <CAutocomplete
                              itemsList={kmsDrivenFrom}
                              onChange={setters.setKmsDrivenTo}
                              placeholder="To"
                              rounededSide="right"
                              value={states.kmsDrivenTo}
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
                              FUELS
                          </div>

                          { states.selectedFuels.length >= 1
                        && (
                        <div
                            className="
                            mb-1 h-6 w-6 rounded-full
                            bg-blue-600 text-center font-semibold text-white
                            "
                        >
                            {states.selectedFuels.length}
                        </div>
                        )}
                      </div>

                      <CCheckboxGroup
                          mainOptions={params?.fuel_type.slice(0, 2) ?? []}
                          onChange={handlers.onChangeFuels}
                          options={params?.fuel_type ?? []}
                          values={states.selectedFuels}
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

                          { states.selectedTransmissions.length >= 1
                        && (
                        <div
                            className="
                            mb-1 h-6 w-6 rounded-full
                            bg-blue-600 text-center font-semibold text-white
                            "
                        >
                            {states.selectedTransmissions.length}
                        </div>
                        )}
                      </div>

                      <CCheckboxGroup
                          mainOptions={params?.transmission?.slice(0, 2) ?? []}
                          onChange={handlers.onChangeTransmission}
                          options={params?.transmission ?? []}
                          values={states.selectedTransmissions}
                      />
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
                          colors={params?.color ?? []}
                          onChange={handlers.onChangeColor}
                          values={states.selectedColors}
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
                                    states.selectedOptions.includes(option)
                                  }
                                  key={option}
                                  onChange={handlers.onChangeOptions}
                                  value={option}
                              >
                                  {option}
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
