/* eslint-disable react/no-multi-comp */
import type { Meta } from '@storybook/react'

import { CAutocomplete, type CAutocompleteProps } from '.'

const meta: Meta<CAutocompleteProps<any>> = {
  title: 'Shared/UI/CAutocomplete',
  component: CAutocomplete,
}

export default meta

const kmsDriven: {
  value: number
  label: string
}[] = [
  { value: 0, label: 'Any' },
  { value: 1, label: '2500' },
  { value: 2, label: '5000' },
  { value: 3, label: '10000' },

]

export function Default({ ...props }) {
  const [selected, setSelected] = useState()

  return (
      <CAutocomplete
          {...props}
          itemsList={kmsDriven}
          // @ts-expect-error
          label={selected}
          onChange={setSelected}
      />
  )
}

export function AutocompleteGroup({ ...props }) {
  const [selected1, setSelected1] = useState()
  const [selected2, setSelected2] = useState()

  return (
      <div className='flex'>
          <CAutocomplete
              {...props}
              itemsList={kmsDriven}
              // @ts-expect-error
              label={selected1}
              onChange={setSelected1}
              rounededSide='left'
          />

          <CAutocomplete
              {...props}
              itemsList={kmsDriven}
              // @ts-expect-error
              label={selected2}
              onChange={setSelected2}
              rounededSide='right'
          />
      </div>
  )
}
