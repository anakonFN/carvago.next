import type { Meta } from '@storybook/react'

import { ChevronDownIcon } from '@heroicons/react/24/outline'

import { CButton } from '../CButton'

import { CHoverMenu } from '.'

const meta: Meta = {
  title: 'Shared/ui/CHoverMenu',
  component: CHoverMenu,
}

export default meta

export function Default() {
  return (
      <CHoverMenu button={({ open, delayClose }) => (
          <CButton
              className='hover:no-underline relative'
              onMouseEnter={open}
              onMouseLeave={delayClose}
              variant='underline'
          >
              Services
              <ChevronDownIcon className='h-4 w-4' />
          </CButton>
      )}
      >
          {({ close, open, delayClose }) => (
              <div
                  className="w-48 rounded-md border
                  border-gray-200 bg-white shadow-lg"
                  onMouseEnter={open}
                  onMouseLeave={delayClose}
              >
                  <ul className="relative overflow-hidden rounded-md bg-white">
                      <li>
                          <button
                              className="block w-full px-4
                              py-2 text-left text-sm
                              hover:bg-indigo-500 hover:text-white"
                              onClick={close}
                              type="button"
                          >
                              Profile
                          </button>
                      </li>

                      <li>
                          <button
                              className="block w-full px-4 py-2 text-left
                              text-sm hover:bg-indigo-500 hover:text-white"
                              onClick={close}
                              type="button"
                          >
                              Account settings
                          </button>
                      </li>
                  </ul>
              </div>
          )}
      </CHoverMenu>
  )
}
