import { Action } from '..'
import Products, { Product } from '../../sharedComponents/Table/Table.mockData'

export default function (state = Products, action: Action): Product[] {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return [...action.payload]
    default:
      return state
  }
}
