/* eslint-disable max-len */
import Head from 'next/head'

import { HomeSearchForm } from '@/widget/HomeSeachForm'

import { CAdvantages } from '@/shared/ui/CAdvantages'
import { CLayout } from '@/shared/ui/CLayout'

export function HomePage() {
  return (
      <>
          <Head>
              <title>
                  Carvago
              </title>
          </Head>

          <CLayout>
              <div className="pb-16 sd:pb-0 md:pb-16">
                  <div
                      className="
                      relative z-10 block h-[50rem]
                      bg-[url('https://carvago.com/images/B2C-homepage/hero.webp')]
                      bg-cover
                      bg-center bg-no-repeat
                      p-0 sm:h-[40rem]
                      "
                  >
                      <div className="relative h-full">
                          <div className="relative top-11 z-10 mx-auto flex max-w-[1230px] flex-col px-4">
                              <div className='pb-4'>
                                  <HomeSearchForm />
                              </div>

                              <CAdvantages />
                          </div>

                          <div
                              className="
                          absolute
                          inset-x-0 bottom-0
                          h-80 w-full
                          bg-[linear-gradient(0deg,_rgb(31,_43,_89)_28%,_rgba(31,_43,_89,_0)_100%)]
                          after:absolute
                          after:bottom-0
                          after:z-[8]
                          after:block after:h-[50px] after:w-full after:bg-white
                          after:content-[''] after:[clip-path:polygon(100%_0,_0%_100%,_100%_100%)]
                          "
                          />
                      </div>

                  </div>
              </div>
          </CLayout>
      </>
  )
}
