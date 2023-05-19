import type React from 'react'

import { Listbox } from '@headlessui/react'

import { ChevronDownIcon } from '@heroicons/react/20/solid'

import type { roundedVariant } from './types'

type Option = number | string

type ExtractProps<T> = T extends React.ComponentType<infer P> ? P : T

type ListboxProps = ExtractProps<typeof Listbox>

export type Props<T extends Option> = ListboxProps & {
  rounededSide?: roundedVariant
  itemsList: T[]
  value: T
}

export function CSelect<T extends Option>({
  rounededSide,
  itemsList,
  value,
  ...props
}: Props<T>) {
  return (
      <Listbox
          {...props}
          value={itemsList}
      >
          <Listbox.Button className={twMerge(
            'flex w-52 items-center justify-between',
            'border border-blue-800 p-2 text-sm',
            [
              rounededSide === 'left' && 'rounded-l-md',
              rounededSide === 'right' && 'rounded-r-md',
            ],
          )}
          >
              <p className="text-blue-600">
                  {/* @ts-expect-error */}
                  {value <= 0 ? 'To' : value}
              </p>

              <ChevronDownIcon className="h-6 w-6 text-blue-600" />
          </Listbox.Button>

          <Listbox.Options
              className="
              absolute mt-1 max-h-40 w-52 cursor-pointer
              overflow-auto rounded-md bg-white py-1 text-base
              shadow-lg ring-1 ring-black/5 focus:outline-none
              sm:text-sm
              "
          >
              {itemsList.map(item => (
                  <Listbox.Option
                      className="
                      relative cursor-pointer select-none
                      py-1 pl-2 text-sm text-blue-600
                      "
                      key={item}
                      value={item}
                  >
                      <span className={twMerge(
                        'block truncate',
                        [item === value ? 'font-bold' : 'font-normal'],
                      )}
                      >
                          {item}
                      </span>
                  </Listbox.Option>
              ))}
          </Listbox.Options>
      </Listbox>
  )
}
