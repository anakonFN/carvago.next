/* eslint-disable react/no-multi-comp */
import type { Meta } from '@storybook/react'

import { CakeIcon } from '@heroicons/react/24/solid'

import { ButtonSize, ButtonVariant } from './types'

import { CButton, type CButtonProps } from '.'

const meta: Meta<CButtonProps> = {
  title: 'Shared/UI/CButton',
  component: CButton,
  argTypes: {
    variant: {
      control: { type: 'select', options: ButtonVariant },
      defaultValue: 'primary',
    },
    size: {
      control: { type: 'select', options: ButtonSize },
      defaultValue: 'sm',
    },
    disabled: { control: { type: 'boolean' } },
  },
  args: {
    variant: 'primary',
    size: 'sm',
    disabled: false,

  },
}

export default meta

export function Default({ ...props }) {
  return (
      <CButton {...props} >
          Default
      </CButton>
  )
}
export function WithIcon({ ...props }) {
  return (
      <CButton {...props} >
          <CakeIcon className='h-6 w-6' />
      </CButton>
  )
}
export function WithIconAndText({ ...props }) {
  return (
      <CButton {...props} >
          <CakeIcon className='mr-3 h-6 w-6' />

          <span>
              text
          </span>
      </CButton>
  )
}
