/* eslint-disable react/no-multi-comp */
import type { Meta } from '@storybook/react'

import { CAutocomplete, type CAutocompleteProps } from '.'

const meta: Meta<CAutocompleteProps<any>> = {
  title: 'Shared/UI/CAutocomplete',
  component: CAutocomplete,
}

export default meta

const kmsDriven: {
  key: number
  label: string
}[] = [
  { key: 1, label: 'Any' },
  { key: 2, label: '2500' },
  { key: 3, label: '5000' },
  { key: 4, label: '10000' },

]

export function Default({ ...props }) {
  const [selected, setSelected] = useState({ key: 0, label: '' })

  return (
      <CAutocomplete
          {...props}
          itemsList={kmsDriven}
          onChange={setSelected}
          placeholder='kmsDriven'
          value={selected}
      />
  )
}

export function AutocompleteGroup({ ...props }) {
  const [selected1, setSelected1] = useState({ key: 0, label: '' })
  const [selected2, setSelected2] = useState({ key: 0, label: '' })

  return (
      <div className='flex'>
          <CAutocomplete
              {...props}
              itemsList={kmsDriven}
              onChange={setSelected1}
              placeholder='kmsDriven'
              rounededSide='left'
              value={selected1}
          />

          <CAutocomplete
              {...props}
              itemsList={kmsDriven}
              onChange={setSelected2}
              placeholder='kmsDriven'
              rounededSide='right'
              value={selected2}
          />
      </div>
  )
}
