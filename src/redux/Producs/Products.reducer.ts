import { Action } from '..'
import { Product } from '../../sharedComponents/Table/Table.mockData'

export default function (state: Product[] = [], action: Action): Product[] {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return [...action.payload]
    default:
      return state
  }
}
