import { Fragment } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { Combobox, Transition } from '@headlessui/react'

interface Option {
  label: string
  key: number
}

type ExtractProps<T> = T extends React.ComponentType<infer P> ? P : T

type ComboboxProps = ExtractProps<typeof Combobox>

export type Props<T extends Option> = ComboboxProps & {
  itemsList: T[]
  value: T
  placeholder: string
  rounededSide?: 'left' | 'right'
  openByClick?: boolean
}

export function CAutocomplete<T extends Option>({
  itemsList,
  placeholder,
  rounededSide,
  openByClick,
  ...props
}: Props<T>) {
  const [query, setQuery] = useState('')
  const filteredItems
  = query === ''
    ? itemsList
    : itemsList.filter(item =>
      item.label
        .toLowerCase()
        .replace(/\s+/g, '')
        .includes(query.toLowerCase().replace(/\s+/g, '')),
    )

  return (
      <Combobox
          {...props}
      >
          <div className="relative mt-1">
              <Combobox.Input
                  className={clsx(
                    [
                      'w-full rounded-[4px] border border-slate-400',
                      'py-2.5 pl-3 pr-0 text-sm',
                      'leading-5 text-gray-900',
                      'placeholder:font-semibold placeholder:text-slate-400',
                      'focus:ring-0',
                      'disabled:border-gray-300',
                      'disabled:placeholder:text-gray-300',
                    ],
                    rounededSide === 'left' && 'rounded-r-none',
                    rounededSide === 'right' && 'rounded-l-none',
                  )}
                  displayValue={(person: T) => person.label}
                  onChange={event => setQuery(event.target.value)}
                  placeholder={placeholder}
              />

              <Combobox.Button
                  className={clsx(
                    'absolute inset-y-0 right-0 flex items-center pr-2',
                    openByClick && 'w-full justify-end',

                  )}

              >
                  <ChevronDownIcon
                      className="
                      h-4 w-4 text-gray-600
                      group-hover:text-indigo-700
                      "
                  />
              </Combobox.Button>

              <Transition
                  afterLeave={() => setQuery('')}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
              >
                  <Combobox.Options
                      className="
                      absolute z-[101] mt-1 max-h-60
                      w-full overflow-auto rounded-md bg-white py-1
                      text-base shadow-lg ring-1
                      ring-black/5 focus:outline-none sm:text-sm
                      "
                  >
                      {(filteredItems.length === 0 && query !== '')
                        ? (
                            <div
                                className="
                                relative cursor-default
                                select-none px-4 py-2 text-gray-700
                                "
                            >
                                Nothing found.
                            </div>
                          )
                        : (
                            filteredItems.map(item => (
                                <Combobox.Option
                                    className={
                                        ({ active }) =>
                                        `relative cursor-default select-none 
                                        py-2 pl-4 pr-4 ${
                                        active
                                        ? 'bg-teal-600 text-white'
                                        : 'text-gray-900'
                                        }`
                                        }
                                    key={item.label}
                                    value={item}
                                >
                                    {({ selected }) => (
                                        <span
                                            className={
                                            `block truncate 
                                            ${
                                            selected
                                            ? 'font-medium'
                                            : 'font-normal'
                                            }`
                                            }
                                        >
                                            {item.label}
                                        </span>
                                    )}
                                </Combobox.Option>
                            ),
                            )
                          )}

                  </Combobox.Options>
              </Transition>
          </div>
      </Combobox>
  )
}
