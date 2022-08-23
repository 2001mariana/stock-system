import { Action, Thunk } from '..'
import { getAllProducts } from '../../services/Products.services'
import { Product } from '../../sharedComponents/Table/Table.mockData'

export const updateProduct =
  (newProduct: Product): Thunk =>
  async (dispatch) => {
    await updateSingleProduct(newProduct)
    dispatch(getProducts())
  }

export const getProducts = (): Thunk<Product[]> => async (dispatch) => {
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
