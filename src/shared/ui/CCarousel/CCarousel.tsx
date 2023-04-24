import { PhotoIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Navigation, Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'

import { NavigateButtons } from './ui/NavigateButtons'

export interface Props {
  images: string[]
  variant: 'small' | 'big'
}

export function CCarousel({ images, variant }: Props) {
  return (
      <div
          className={clsx(
            'relative overflow-hidden',
          )}
          onClick={(e) => { e.preventDefault() }}
      >
          <Swiper
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
                      className=""
                      key={i}
                  >

                      <Image
                          alt={i}
                          className="block h-full w-full object-cover"
                          height={0}
                          priority
                          sizes="100%"
                          src={i}
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
