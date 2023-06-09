import type { Meta, Story } from '@storybook/react'

import { CCheckboxGroup, type CCheckboxGroupProps } from '.'

const meta: Meta<CCheckboxGroupProps> = {
  title: 'Shared/ui/CCheckboxGroup',
  component: CCheckboxGroup,
}

export default meta

export const Default: Story = () => {
  const options = [
    {
      label: 'Передній',
      key: 1,
    },
    {
      label: 'Задній',
      key: 2,
    },
    {
      label: 'Повний',
      key: 3,
    },
  ]

  const [values, setValues] = useState<number[]>([])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    if (values.includes(value)) {
      const filteredValues = values.filter((item) => {
        return item !== value
      })
      setValues([...filteredValues])
    }
    else { setValues([...values, value]) }
  }

  return (
      <>
          <div className="flex items-end">
              <div
                  className="
                  mb-1 mt-5 text-sm font-semibold text-slate-700
                  "
              >
                  TRANSMISSION
              </div>

              { values.length >= 1
                  && (
                  <div
                      className="
                      mb-1 h-6 w-6 rounded-full
                      bg-blue-600 text-center font-semibold text-white
                      "
                  >
                      {values.length}
                  </div>
                  )}
          </div>

          <CCheckboxGroup
              mainOptions={options.slice(0, 2) ?? []}
              onChange={onChange}
              options={options}
              values={values}
          />
      </>
  )
}
