import { Product } from '../../sharedComponents/]'

import { Action } from '..'

export default function (state: Product[] = [], action: Action): Product[] {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return [...action.payload]
    default:
      return state
  }
}
