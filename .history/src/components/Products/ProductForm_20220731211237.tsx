import React, { useState } from 'react'

import Button from '../../sharedComponents/Button'
import Form from '../../sharedComponents/Form'
import Input from '../../sharedComponents/Input'
import { Product } from '../../sharedComponents/Table/Table.mockData'

declare interface InitialFormState {
  id?: number
  name: string
  price: number
  stock: number
}
export interface ProductCreator {
  name: string
  price: number
  stock: number
}

declare interface ProductFormProps {
  form?: Product
  onSubmit?: (product: ProductCreator) => void
  onUpdate?: (product: Product) => void
}

function ProductForm({ onSubmit }: ProductFormProps) {
  const initialFormState: InitialFormState = props.form
    ? {
        id: props.form.id,
        name: props.form.name,
        price: String(props.form.price),
        stock: String(props.form.stock)
      }
    : {
        name: '',
        price: '',
        stock: ''
      }

  const [form, setForm] = useState(initialFormState)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target

    setForm({
      ...form,
      [name]: value
    })
  }

  const handleFormSubmit = () => {
    const productDTO = {
      name: String(form.name),
      price: parseFloat(form.price),
      stock: Number(form.stock)
    }
    onSubmit(productDTO)
    setForm(initialFormState)
  }

  return (
    <Form title="Product Form" onSubmit={handleFormSubmit}>
      <Input
        onChange={handleInputChange}
        value={form.name}
        name="name"
        label="Name"
        placeholder="E.g.: Cookie"
        required
      />
      <Input
        onChange={handleInputChange}
        value={form.price}
        name="price"
        label="Price"
        type="number"
        step={0.01}
        min="0"
        placeholder="E.g.: 1.25"
        required
      />
      <Input
        onChange={handleInputChange}
        value={form.stock}
        name="stock"
        label="Stock"
        type="number"
        min="0"
        placeholder="E.g.: 12"
        required
      />
      <Button
        label="Submit"
        size={'small'}
        color={'primary'}
        variant={'solid'}
      />
    </Form>
  )
}

export default ProductForm
