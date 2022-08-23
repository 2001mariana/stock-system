import React, { useState } from 'react'
import Button from '../../sharedComponents/Button'
import Form from '../../sharedComponents/Form'
import Input from '../../sharedComponents/Input'

const initialFormState = {
  name: '',
  price: '',
  stock: ''
}

export interface ProductCreator {
  name: string
  price: number
  stock: number
}

declare interface Product

function ProductForm() {
  const [form, setForm] = useState(initialFormState)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target

    setForm({
      ...form,
      [name]: value
    })
  }

  return (
    <Form title="Product Form" onSubmit={() => console.log(form)}>
      <Input
        onChange={handleInputChange}
        name="name"
        label="Name"
        placeholder="E.g.: Cookie"
        required
      />
      <Input
        onChange={handleInputChange}
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
