import type { Meta } from '@storybook/react'

import { VehiclePage } from '.'

const meta: Meta = {
  title: 'Pages/VehiclePage',
  component: VehiclePage,
}

export default meta

export function Default() {
  return (
      <VehiclePage />
  )
}
