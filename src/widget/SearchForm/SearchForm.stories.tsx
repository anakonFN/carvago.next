import type { Meta } from '@storybook/react'

import { SearchForm } from '.'

const meta: Meta = {
  title: 'Widget/SearchForm',
  component: SearchForm,
}

export default meta

export function Default() {
  return (
      <SearchForm />
  )
}
