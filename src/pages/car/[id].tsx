import { VehiclePage } from '@/screens/VehiclePage'
import { useRouter } from 'next/router'

export default function VehicleDetailsPage() {
  const { query } = useRouter()

  const id = query.id

  return (
      <div>
          <VehiclePage
              // @ts-expect-error
              id={id}
          />
      </div>
  )
}
