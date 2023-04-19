import type { Meta } from '@storybook/react'

import { CAdvantages, type CAdvantagesProps } from '.'

const meta: Meta<CAdvantagesProps> = {
  title: 'Shared/UI/CAdvantages',
  component: CAdvantages,
}

export default meta

export function Default({ ...props }) {
  return (
      <CAdvantages
          {...props}
      />
  )
}
