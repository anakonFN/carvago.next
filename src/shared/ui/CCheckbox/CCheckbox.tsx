export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  withOutline?: boolean
  children?: React.ReactNode
}

export function CCheckbox({ withOutline, children, ...props }: Props) {
  return (
      <div className="flex items-center gap-4">
          <input
              className={twMerge(
                'h-5 w-5 cursor-pointer rounded-md border-blue-800',
                'checked:ring-2 checked:ring-blue-300 checked:ring-offset-0',
                'focus:ring-blue-300 focus:ring-offset-0',
                [withOutline && 'hover:ring-4 hover:ring-blue-300'],
              )}
              type="checkbox"
              {...props}
          />

          <label className="text-slate-900">
              {children}
          </label>
      </div>
  )
}
