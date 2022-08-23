import { Product } from '../../sharedComponents/Table/Table.mockData'
import { Action } from './Products.reducer'

export const insertNewProduct = (produc: Product): Action<Product> => {
  return {
    type: 'INSERT_NEW_PRODUCT',
    payload: {
      _id: '123ldjksa',
      name: 'Cookie',
      price: 0.35,
      stock: 700
    }
  }
}
