import { ProductCreator } from '../../components/Products/ProductForm'
import { Action } from './Products.reducer'

export const insertNewProduct = (
  ppyload: ProductCreator
): Action<ProductCreator> => {
  return {
    type: 'INSERT_NEW_PRODUCT',
    payload
  }
}
