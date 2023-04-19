import type { Meta } from '@storybook/react'

import { CRadioGroup, type CRadioGroupProps } from '.'

const meta: Meta<CRadioGroupProps> = {
  title: 'Shared/UI/CRadioGroup',
  component: CRadioGroup,
}

export default meta

const options = [
  'Recommended',
  'Lowest mileage',
  'Highest price',
  'Lowest price',
]

export const Default = () => {
  const [value, setValue] = useState(options[0])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <CRadioGroup
      currentValue={value}
      onChange={onChange}
      options={options}
    />
  )
}