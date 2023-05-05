import type { Meta } from '@storybook/react'

import { VehicleCard, type VehicleCardProps } from '.'
import { useVehicle } from '@/shared/api/vehicle'

const meta: Meta<VehicleCardProps> = {
  title: 'Widget/VehicleCard',
  component: VehicleCard,
}

export default meta

export function Default() {
  const { data: car, isLoading } = useVehicle('52849457')

  if (isLoading) {
    return (

        <div className='my-48 text-center font-bold'>
            LOADING...
        </div>

    )
  }

  return (
      <VehicleCard
          // @ts-expect-error
          car={car}
      />
  )
}
