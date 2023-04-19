import type { Meta } from '@storybook/react'

import { CCheckbox, type CCheckboxProps } from '.'

const meta: Meta<CCheckboxProps> = {
  title: 'Shared/ui/CCheckbox',
  component: CCheckbox,
  argTypes: {
    withOutline: {
      control: { type: 'boolean' },
    },
    checked: {
      control: { type: 'boolean' },
    },
  },
  args: {
    withOutline: false,
  },
}

export default meta

export function Default({ ...props }) {
  return (
      <CCheckbox
          {...props}
      />
  )
}
