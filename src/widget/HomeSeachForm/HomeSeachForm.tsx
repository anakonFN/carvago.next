import Link from 'next/link'

import { ChevronRightIcon } from '@heroicons/react/20/solid'

import { CAutocomplete } from '@/shared/ui/CAutocomplete'
import { CCheckbox } from '@/shared/ui/CCheckbox'
import { CButton } from '@/shared/ui/CButton'
import { useMarks, useModels } from '@/shared/api/parameters'

import { Stars } from './assets/stars'

import {
  type Option, mileage,
  price,
  registerDate,
} from './config'

export function HomeSearchForm() {
  const { data: marks } = useMarks()

  const [selectedMark, setSelectedMark]
   = useState<Option>({ value: 0, name: '' })
  const [selectedModel, setSelectedModel]
   = useState<Option>({ value: 0, name: '' })
  const [selectedMileage, setSelectedMileage]
   = useState<Option>({ value: 0, name: '' })
  const [selectedRegisterDate, setSelectedRegisterDate]
   = useState<Option>({ value: 0, name: '' })
  const [selectedPrice, setSelectedPrice]
   = useState<Option>({ value: 0, name: '' })
  const [vat, setVat] = useState(false)

  const { data: models } = useModels(selectedMark.value)

  return (
      <div className="w-full md:max-w-xl">
          <div className="mb-4 rounded-xl bg-white">
              <div className="px-8 pb-2 pt-8">
                  <div
                      className="
                      mb-6 text-xl font-extrabold
                      leading-tight text-slate-700 md:text-5xl
                      "
                  >
                      You choose your car
                      online. We inspect it
                      and deliver it.
                  </div>

                  <form
                      className="
                      mb-7 grid gap-2
                      sm:grid-cols-2 sd:grid-cols-3
                      "
                  >
                      <CAutocomplete
                          itemsList={marks ?? []}
                          onChange={setSelectedMark}
                          openByClick
                          placeholder="Make"
                          value={selectedMark}
                      />

                      <CAutocomplete
                          disabled={selectedMark.name.length === 0}
                          itemsList={models ?? []}
                          onChange={setSelectedModel}
                          openByClick
                          placeholder="Model"
                          value={selectedModel}
                      />

                      <CAutocomplete
                          itemsList={mileage}
                          onChange={setSelectedMileage}
                          openByClick
                          placeholder="Mileage"
                          value={selectedMileage}
                      />

                      <CAutocomplete
                          itemsList={registerDate}
                          onChange={setSelectedRegisterDate}
                          openByClick
                          placeholder="Registration from"
                          value={selectedRegisterDate}
                      />

                      <CAutocomplete
                          itemsList={price}
                          onChange={setSelectedPrice}
                          openByClick
                          placeholder="Price"
                          value={selectedPrice}
                      />

                      <CCheckbox
                          checked={vat}
                          onChange={e => setVat(e.target.checked)}
                      >
                          VAT deduction
                      </CCheckbox>
                  </form>

                  <div
                      className="
                      mb-7 flex flex-col-reverse items-center justify-between
                      gap-4 sd:flex-row sd:gap-0
                      "
                  >
                      <CButton
                          classes="
                          text-base font-bold flex
                          items-center underline-offset-4
                          "
                          variant="underline"
                      >
                          Advanced search
                          <ChevronRightIcon className="h-5 w-5" />

                      </CButton>

                      <Link href="/cars">
                          <button
                              className="
                              w-full rounded bg-blue-700
                              px-20 py-3 text-center font-bold
                              text-white transition-all
                              duration-200 hover:shadow-lg
                              hover:shadow-blue-700/30 sd:w-auto
                              sd:px-40 md:px-24
                              "
                          >
                              Go to offers
                          </button>
                      </Link>
                  </div>
              </div>

          </div>

          <div className="flex items-center justify-center gap-3">
              <div
                  className="
                  text-2xl
                  font-extrabold text-white
                  "
              >
                  4.8
              </div>

              <Stars />

              <CButton
                  classes="
                  text-sm text-slate-50 font-bold
                  text-white underline-offset-4
                  "
                  variant="underline"
              >
                  805 reviews
                  <ChevronRightIcon className="h-4 w-4" />
              </CButton>

          </div>
      </div>
  )
}
