import { PhotoIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Navigation, Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'

import { NavigateButtons } from './ui/NavigateButtons'

export interface Props {
  images: {
    id: number | string
    path: string
  }[]
  variant: 'small' | 'big'
}

export function CCarousel({ images, variant }: Props) {
  return (
      <div
          className={clsx(
            'relative  h-full overflow-hidden',
          )}
          onClick={(e) => { e.preventDefault() }}
      >
          <Swiper
              className={clsx(
                variant === 'small' && ['h-44'],
                'h-full overflow-hidden bg-gray-200',
              )}
              loop
              modules={[Navigation, Pagination, A11y]}
              navigation
              pagination={{
                dynamicBullets: true,
              }}
              slidesPerView='auto'
          >
              {images.map(i => (
                  <SwiperSlide
                      className="m-auto max-h-80 sd:max-h-96 md:max-h-[480px]"
                      key={i.id}
                  >

                      <Image
                          alt={i.path}
                          className="block h-full w-full object-cover"
                          height={0}
                          priority
                          sizes='100%'
                          src={i.path}
                          width={0}
                      />

                  </SwiperSlide>
              ))}

              <NavigateButtons variant={variant} />

          </Swiper>

          <div className={clsx(
            variant === 'big' && 'bottom-3 right-3',
            'absolute bottom-0 right-0 z-10 flex h-auto justify-end',
            'items-center gap-1 bg-slate-500/50',
            'rounded-md px-2 py-1 font-semibold text-white',
          )}
          >
              <PhotoIcon className="h-5 w-5" />

              {images.length}
          </div>
      </div>
  )
}
