interface option {
  sortName: string
  sortValue: string
  direction?: string
}

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  options: option[]
  currentValue?: option
}

export function CRadioGroup({ options, currentValue, ...props }: Props) {
  return (
      <div className="grid grid-cols-2 gap-2 sm:flex">
          {options.map((option) => {
            return (
                <div
                    key={option.sortName}
                >
                    <input
                        className="peer hidden"
                        id={option.sortName}
                        name="sort"
                        type="radio"
                        value={option.sortName}
                        {...props}
                    />

                    <label
                        className={clsx(
                          'border-b py-2 text-center text-xs',
                          'cursor-pointer px-4 sd:text-base',
                          option.sortName === currentValue?.sortName
                            ? [
                                'border-b-[3px] border-indigo-600',
                                'font-bold text-indigo-600',
                              ]
                            : 'text-slate-500',
                        )}
                        htmlFor={option.sortName}
                    >
                        {option.sortName}
                    </label>
                </div>
            )
          })}
      </div>
  )
}
