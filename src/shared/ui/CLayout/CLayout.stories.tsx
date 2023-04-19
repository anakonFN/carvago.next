import type { Meta } from '@storybook/react'

import { CLayout } from '.'

const meta: Meta = {
  title: 'Shared/ui/CLayout',
  component: CLayout,
}

export default meta

export function Default() {
  return (
      <CLayout>
          123
      </CLayout>
  )
}
