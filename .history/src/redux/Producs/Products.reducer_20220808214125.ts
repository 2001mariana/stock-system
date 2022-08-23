import Products from '../../sharedComponents/Table/Table.mockData'

/* eslint-disable @typescript-eslint/no-explicit-any */

export default function (state = Products, action: Action) {
  switch (action.type) {
    case 'INSERT_NEW_PRODUCT':
      return [...state, action.payload]
    default:
      return state
  }
}
