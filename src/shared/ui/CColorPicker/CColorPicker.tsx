/* eslint-disable react/jsx-closing-tag-location */

interface Option {
  label: string
  key: number
}

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  colors: Option[]
  values: number[]
}

export function CColorPicker({ colors, values, ...props }: Props) {
  const [showColorName, setShowColorName] = useState(false)

  const show = () => {
    setTimeout(() => {
      setShowColorName(true)
    }, 300)
  }
  const hide = () => setShowColorName(false)

  return (
      <div className="grid max-w-[14rem] grid-cols-7 grid-rows-2 gap-1">
          {colors.map((color) => {
            return (
                <div
                    className="group relative"
                    key={color.label}
                >
                    <input
                        checked={values.includes(color.key)}
                        className={clsx(
                          'cursor-pointer rounded-full',
                          'border border-white/0',
                          'p-2 ring-offset-2 focus:ring-2',
                          color.label.includes('White')
                           && 'border border-gray-400',
                          values.includes(color.key) && 'ring-1',
                          values.includes(color.key) && 'ring-blue-700',
                        )}
                        id={color.label}
                        name="color-picker"
                        onMouseEnter={show}
                        onMouseLeave={hide}
                        style={{ background: color.label }}
                        type="checkbox"
                        value={color.key}
                        {...props}
                    />

                    { showColorName
                      ? <label
                              className="
                              absolute z-10 ml-5 mt-1 hidden
                              bg-slate-700 p-1 text-xs text-white
                              transition-[display] delay-300 group-hover:block
                              "
                              htmlFor={color.label}
                        >
                          {color.label}

                      </label>
                      : null}
                </div>
            )
          })}
      </div>
  )
}
