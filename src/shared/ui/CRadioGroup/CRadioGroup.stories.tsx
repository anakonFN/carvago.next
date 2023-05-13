import type { Meta } from '@storybook/react'

import { CRadioGroup, type CRadioGroupProps } from '.'

const meta: Meta<CRadioGroupProps> = {
  title: 'Shared/UI/CRadioGroup',
  component: CRadioGroup,
}

export default meta

const options = [
  {
    sortName: 'Recommended',
    sortValue: 'recommended',
    direction: 'asc',
  },
  {
    sortName: 'Lowest Price',
    sortValue: 'price',
    direction: 'asc',
  },
  {
    sortName: 'Highest Price',
    sortValue: 'price',
    direction: 'desc',
  },
  {
    sortName: 'Newest ad',
    sortValue: 'publish-date',
    direction: 'desc',
  },
  {
    sortName: 'Lowest mileage',
    sortValue: 'mileage',
    direction: 'asc',
  },
]

export function Default() {
  const [value, setValue] = useState(options[0])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const correctOption = options.find(option => option.sortName === value)
    setValue(correctOption)
  }

  return (
      <CRadioGroup
          currentValue={value}
          onChange={onChange}
          options={options}
      />
  )
}
