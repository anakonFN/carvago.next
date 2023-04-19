/* eslint-disable max-len */
import moneyBack from './assets/moneyBack.svg'
import safePurchase from './assets/safePurchase.svg'
import check from './assets/check.svg'

interface advantage {
  icon: string
  title: string
  description: string
  position: 'left' | 'center' | 'right'
}

export const advantages: advantage[] = [
  {
    icon: moneyBack,
    title: 'Money back guarantee  ',
    description: 'And if you simply don\'t like the car, you can return it to us within 14 days of receiving it.',
    position: 'left',
  },
  {
    icon: safePurchase,
    title: 'Safe purchase',
    description: 'We carefully inspect each car and guarantee it is in good condition before the purchase.',
    position: 'center',
  },
  {
    icon: check,
    title: '6-month warranty',
    description: 'In addition, with every car you receive an extended warranty.',
    position: 'right',
  },
]
