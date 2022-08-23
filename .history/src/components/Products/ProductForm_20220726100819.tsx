import React, { useState } from 'react'
import Button from '../../sharedComponents/Button'
import Form from '../../sharedComponents/Form'
import Input from '../../sharedComponents/Input'

const initialFormState = {
  name: '',
  price: '',
  stock: ''
}

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
    <Form title="Product Form" onSubmit={console.log}>
      <Input onChange={} name="name" label="Name" placeholder="E.g.: Cookie" />
      <Input onChange={}
        name="price"
        label="Price"
        type="number"
        step={0.01}
        min="0"
        placeholder="E.g.: 1.25"
      />
      <Input onChange={}
        name="stock"
        label="Stock"
        type="number"
        min="0"
        placeholder="E.g.: 12"
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
