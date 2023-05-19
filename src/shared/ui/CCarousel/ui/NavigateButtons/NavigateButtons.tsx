import { useSwiper } from 'swiper/react'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

import { CButton } from '@/shared/ui/CButton'

interface Props {
  variant: string
}

export function NavigateButtons({ variant }: Props) {
  const swiper = useSwiper()
  return (
      <>
          <CButton
              className={twMerge(
                variant === 'big' ? 'top-1/3 py-20' : 'top-12 py-8',
                [
                  'absolute left-0 z-20 transition-all duration-300',
                  'rounded-r-lg bg-blue-900/30 px-1 opacity-0',
                  'hover:bg-blue-900/60 group-hover:opacity-100',
                  'hidden md:block',
                ],
              )}
              onClick={() => swiper.slidePrev()}
          >
              <ChevronLeftIcon className="h-5 w-5 text-white" />
          </CButton>

          <CButton
              className={twMerge(
                variant === 'big' ? 'top-1/3 py-20' : 'top-12 py-8',
                [
                  'absolute right-0 z-20 transition-all duration-300',
                  'rounded-l-lg bg-blue-900/30 px-1 opacity-0',
                  'hover:bg-blue-900/60 group-hover:opacity-100',
                  'hidden md:block',
                ],
              )}
              onClick={() => swiper.slideNext()}
          >
              <ChevronRightIcon className="h-5 w-5 text-white" />
          </CButton>
      </>
  )
}
