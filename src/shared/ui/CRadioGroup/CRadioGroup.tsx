export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  options: string[]
  currentValue?: string
}

export const CRadioGroup = ({ options, currentValue, ...props }: Props) => {
  return (
    <div className="grid grid-cols-2 gap-2 sm:flex">
      {options.map((option) => {
        return (
          <div
            key={option}
          >
            <input
              className="peer hidden"
              id={option}
              name="sort"
              type="radio"
              value={option}
              {...props}
            />

            <label
              className={clsx(
                'border-b py-2 text-center text-xs',
                'sd:text-base cursor-pointer px-4',
                option === currentValue
                  ? [
                    'border-b-[3px] border-indigo-600',
                    'font-bold text-indigo-600',
                  ]
                  : 'text-slate-500',
              )}
              htmlFor={option}
            >
              {option}
            </label>
          </div>
        )
      })}
    </div>
  )
}