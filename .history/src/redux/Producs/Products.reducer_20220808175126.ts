import Products from '../../sharedComponents/Table/Table.mockData'

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Action<T = any> {
  type: string
  payload?: T
}

export default function (state = Products, action: Action) {
  switch (action.type) {
    case 'INSERT_NEW_PRODUCT':
      return [...state, action.payload]
    default:
      return state
  }
}
