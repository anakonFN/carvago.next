import { useRouter } from 'next/router'

import { VehiclePage } from '@/screens/VehiclePage'

export default function VehicleDetailsPage() {
  const { query } = useRouter()

  return (
      <div>
          {
          typeof query.id === 'string'
            ? <VehiclePage
                    carId={query.id}
              />
            : null
           }
      </div>
  )
}
