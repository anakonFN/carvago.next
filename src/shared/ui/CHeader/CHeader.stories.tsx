import type { Meta } from '@storybook/react'

import { CHeader } from '.'

const meta: Meta = {
  title: 'Shared/ui/CHeader',
  component: CHeader,
}

export default meta

export function Default() {
  return (
      <CHeader />
  )
}
