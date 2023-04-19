import type { Meta } from '@storybook/react'

import { CFooter } from '.'

const meta: Meta = {
  title: 'Shared/ui/CFooter',
  component: CFooter,
}

export default meta

export function Default({ ...props }) {
  return (
      <CFooter {...props} />
  )
}
