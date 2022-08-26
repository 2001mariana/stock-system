import { Product } from "../sharedComponents/Table/Table.mockData"

export interface InitialFormState {
  _id?: string
  name: string
  price: string
  stock: string
}
export interface ProductCreator {
  name: string
  price: number
  stock: number
}

export interface ProductFormProps {
  formProps?: Product
  onSubmit?: (product: ProductCreator) => void
  onUpdate?: (product: Product) => void
}
