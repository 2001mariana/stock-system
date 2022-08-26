import { Product } from '../sharedComponents/Table/Table.mockData'
import http from '../utils/http'

export const getAllProducts = () =>
  http.get<Product[]>('/products').then((res) => res.data)

export const createSingleProduct = (product: ProductCreator) =>
  http.post('/products', product)

export const updateSingleProduct = ({ _id, name, price, stock }: Product) =>
  http.patch(`/products/${_id}`, {
    ...(name && { name }),
    ...(price && { price }),
    ...(stock && { stock })
  })

export const deleteSingleProduct = (id: string) =>
  http.delete(`/products/${id}`)
