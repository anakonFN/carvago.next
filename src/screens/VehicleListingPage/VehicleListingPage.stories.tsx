import type { Meta } from '@storybook/react'

import { VehicleListingPage } from './VehicleListingPage'

const meta: Meta = {
  title: 'Pages/VehicleListingPage',
  component: VehicleListingPage,
}

export default meta

export function Default() {
  return (
      <VehicleListingPage />
  )
}
