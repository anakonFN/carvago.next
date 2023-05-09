import { PlusCircleIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

import { advantages } from './config'

export interface Props extends React.BaseHTMLAttributes<HTMLUListElement> {}

export function CAdvantages({ ...props }: Props) {
  return (
      <ul
          className="
          relative z-[100] flex w-full
          flex-col md:w-auto md:flex-row
          "
          {...props}
      >

          {advantages.map((advantage) => {
            return (
                <li
                    className={clsx(
                      advantage.position === 'left'
                      && 'rounded-t-lg md:rounded-l-xl md:rounded-r-none',
                      advantage.position === 'center'
                      && 'border-y-2 md:border-x-2 md:border-y-0',
                      advantage.position === 'right'
                      && 'rounded-b-xl md:rounded-l-none md:rounded-r-xl',
                      'group relative z-50 px-8 py-4',
                      'flex justify-between bg-slate-100',
                      'transition-colors md:block md:hover:bg-slate-50',
                      'min-w-[33%] duration-300 md:pb-10 md:pt-8',
                    )}
                    key={advantage.title}
                >
                    <div className="flex items-center gap-6">
                        <Image
                            alt={`${advantage.icon}Icon`}
                            className="h-5 w-5"
                            src={advantage.icon}
                        />

                        <div
                            className="
                            text-sm font-bold text-slate-700
                            md:text-xl md:font-semibold
                            "
                        >
                            {advantage.title}
                        </div>
                    </div>

                    <PlusCircleIcon
                        className="
                        block h-6 w-6 text-slate-400 md:hidden
                        "
                    />

                    <div
                        className="
                        hidden pl-[44px] pt-3 text-sm text-slate-600 md:block
                        "
                    >
                        {advantage.description}
                    </div>

                    <div
                        className="
                        absolute bottom-3 right-3 flex
                        items-center gap-4 text-2xl opacity-0 transition-opacity
                        duration-300 md:group-hover:opacity-100
                        "
                    >
                        <div className="text-sm font-semibold text-blue-800">
                            More
                        </div>

                        <PlusCircleIcon className="h-6 w-6 text-blue-800" />
                    </div>
                </li>
            )
          })}
      </ul>
  )
}
