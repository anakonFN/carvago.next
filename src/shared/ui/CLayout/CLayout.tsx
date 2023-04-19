import type React from 'react'
import { CHeader } from '../CHeader'
import { CFooter } from '../CFooter'

export function CLayout({ children }: { children: React.ReactNode }) {
  return (
      <>
          <CHeader />

          <div className='pt-[70px]'>
              {children}
          </div>

          <CFooter />
      </>
  )
}
