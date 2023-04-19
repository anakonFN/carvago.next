import { CButton } from '@/shared/ui/CButton'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFoundPage() {
  return (
      <div className='flex flex-col items-center pt-12'>
          <Image
              alt='404'
              className='rounded-lg'
              height={300}
              src="/404.webp"
              width={400}
          />

          <div className='py-8 text-center text-4xl font-bold'>
              You have reached a non-existent page
          </div>

          <CButton
              size='sm'
              variant='primary'
          >
              <Link href="/cars">
                  Go back
              </Link>
          </CButton>
      </div>
  )
}
