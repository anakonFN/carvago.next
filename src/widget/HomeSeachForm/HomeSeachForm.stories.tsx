import type { Meta } from '@storybook/react'

import { HomeSearchForm } from '.'

const meta: Meta = {
  title: 'Widget/HomePageForm',
  component: HomeSearchForm,
}

export default meta

export function Default() {
  return (
      <HomeSearchForm />
  )
}
