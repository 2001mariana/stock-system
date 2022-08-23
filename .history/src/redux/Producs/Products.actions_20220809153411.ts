import { Action, Thunk } from '..'
import { ProductCreator } from '../../components/Products/ProductForm'
import { updateSingleProduct } from '../../services/Products.services'
import { createSingleProduct } from '../../services/Products.services'
import { getAllProducts } from '../../services/Products.services'
import { deleteSingleProduct } from '../../services/Products.services'
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

export const insertNewProduct =
  (product: ProductCreator): Thunk =>
  async (dispatch) => {
    await createSingleProduct(product)
    dispatch(getProducts())
  }

export const deleteProduct =
  (productId: string): Thunk =>
  async (dispatch) => {
    await deleteSingleProduct(productId)
    dispatch(getProducts())
  }
