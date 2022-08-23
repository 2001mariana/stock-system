import { Action } from '..'
import Products from '../../sharedComponents/Table/Table.mockData'

export default function (state = Products, action: Action) {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return [...action.payload]
    case 'INSERT_NEW_PRODUCT':
      return [...state, action.payload]
    default:
      return state
  }
}
