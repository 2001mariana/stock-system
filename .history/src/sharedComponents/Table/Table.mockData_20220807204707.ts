export interface Product {
  _id: string
  name: string
  price: number
  stock: number
  createdAt
}

const Products: Product[] = [
  {
    id: 1,
    name: 'Cookie',
    price: 1.25,
    stock: 20
  },
  {
    id: 2,
    name: 'Milk 1l',
    price: 0.99,
    stock: 10
  },
  {
    id: 3,
    name: 'Detergent',
    price: 0.75,
    stock: 65
  },
  {
    id: 4,
    name: 'Water 1l',
    price: 0.3,
    stock: 150
  }
]

export default Products
