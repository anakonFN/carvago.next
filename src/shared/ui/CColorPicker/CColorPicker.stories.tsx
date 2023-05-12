import type { Meta } from '@storybook/react'

import { CColorPicker, type CColorPickerProps } from '.'

const meta: Meta<CColorPickerProps> = {
  title: 'Shared/ui/CColorPicker',
  component: CColorPicker,
}

export default meta

export function Default({ ...props }) {
  const colors = [
    {
      key: 10,
      const_key: 'COLOR_GREY',
      label: 'Grey',
      count: 181782,
      params: null,
      sub_filters: null,
    },
    {
      key: 3,
      const_key: 'COLOR_BLACK',
      label: 'Black',
      count: 181430,
      params: null,
      sub_filters: null,
    },
    {
      key: 2,
      const_key: 'COLOR_WHITE',
      label: 'White',
      count: 146205,
      params: null,
      sub_filters: null,
    },
  ]

  const [selectedColors, setSelecetedColors] = useState<number[]>([])
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    if (selectedColors.includes(value)) {
      const filteredValues = selectedColors.filter((item) => {
        return item !== value
      })
      setSelecetedColors([...filteredValues])
    }
    else { setSelecetedColors([...selectedColors, value]) }
  }

  return (
      <CColorPicker
          colors={colors}
          onChange={onChange}
          values={selectedColors}
          {...props}
      />
  )
}
