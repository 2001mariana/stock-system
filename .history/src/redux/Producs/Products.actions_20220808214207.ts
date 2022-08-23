/* eslint-disable @typescript-eslint/no-explicit-any */
import { Action } from '..'
import { getAllProducts } from '../../services/Products.services'
import { Product } from '../../sharedComponents/Table/Table.mockData'

export const getProducts = () => async (dispatch: any) => {
  const products = await getAllProducts()
  dispatch({
    type: 'FETCH_PRODUCTS',
    payload: products
  })
}

export const insertNewProduct = (): Action<Product> => {
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
