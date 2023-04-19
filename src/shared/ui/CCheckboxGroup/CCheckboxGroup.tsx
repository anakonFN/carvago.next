import { Menu } from '@headlessui/react'

import { Float } from '@headlessui-float/react'

import { ChevronDownIcon } from '@heroicons/react/24/outline'

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  values: string[]
  options: string[]
  mainOptions: string[]
}

export function CCheckboxGroup({
  values, options, mainOptions, ...props
}: Props) {
  return (
      <div className="flex">
          {mainOptions.map((option) => {
            return (
                <div
                    className="max-w-[12rem]"
                    key={option}
                >
                    <input
                        checked={values.includes(option)}
                        className="peer hidden"
                        id={option}
                        name="checkbox-group"
                        type="checkbox"
                        value={option}
                        {...props}
                    />

                    <label
                        className={clsx(
                          [
                            'inline-block min-w-[6.4rem]',
                            'cursor-pointer',
                            'border border-slate-400 py-2',
                            'transition-all',
                            'hover:border-blue-400',
                          ],
                          values.includes(option)
                          && 'border-blue-300 bg-blue-100/75',
                          option === mainOptions[0]
                          && ['rounded-l-md border-r-0'],
                        )}
                        htmlFor={option}
                    >
                        <div
                            className={
                              clsx(
                                [
                                  'w-full select-none font-semibold',
                                  'text-center text-sm text-indigo-900/50',
                                ],
                                values.includes(option)
                                && 'text-indigo-900/100',
                              )
                            }

                        >
                            {option}
                        </div>
                    </label>
                </div>
            )
          })}

          <Menu>
              <Float
                  flip
                  offset={4}
                  placement="bottom-end"
                  tailwindcssOriginClass
              >
                  <Menu.Button
                      className="
                      flex items-center justify-center rounded-r-md
                      border border-slate-400
                      p-2 transition-all hover:border-blue-400
                      "
                  >
                      <ChevronDownIcon className="h-5 w-4 text-slate-600" />
                  </Menu.Button>

                  <Menu.Items
                      className="
                      max-h-64 w-[12rem] overflow-auto
                      rounded-md border border-gray-200 bg-white py-1
                      shadow-lg focus:outline-none
                      "
                  >
                      {options.map((option) => {
                        return (
                            <div
                                className="
                                flex flex-auto items-center px-3
                                py-2 hover:bg-slate-100
                                "
                                key={option}
                            >
                                <input
                                    checked={values.includes(option)}
                                    className="border border-indigo-600
                                    p-2 focus:[box-shadow:none]"
                                    id={option}
                                    name="checkbox-group"
                                    type="checkbox"
                                    value={option}
                                    {...props}
                                />

                                <label
                                    className="
                                    ml-5 w-full select-none font-light
                                    "
                                    htmlFor={option}
                                >
                                    {option}
                                </label>
                            </div>
                        )
                      })}
                  </Menu.Items>
              </Float>
          </Menu>
      </div>
  )
}
