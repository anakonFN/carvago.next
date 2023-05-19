import { VehiclePage } from '@/screens/VehiclePage'
import { useRouter } from 'next/router'

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
