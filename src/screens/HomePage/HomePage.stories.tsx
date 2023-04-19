import type { Meta } from '@storybook/react'

import { HomePage } from '.'

const meta: Meta = {
  title: 'Pages/HomePage',
  component: HomePage,
}

export default meta

export function Default() {
  return (
      <HomePage />
  )
}
