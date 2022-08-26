import React, { useEffect, useState } from 'react'
import { InitialFormState, ProductFormProps } from '../../models/ProductForm'

import Button from '../../sharedComponents/Button'
import Form from '../../sharedComponents/Form'
import Input from '../../sharedComponents/Input'
import withPermission from '../../utils/HOC/withPermission'

function ProductForm({ onSubmit, formProps, onUpdate }: ProductFormProps) {
  const initialFormState: InitialFormState = formProps
    ? {
        _id: formProps._id,
        name: formProps.name,
        price: String(formProps.price),
        stock: String(formProps.stock)
      }
    : {
        name: '',
        price: '',
        stock: ''
      }

  const [form, setForm] = useState(initialFormState)
  const labelButton = form._id ? 'Update' : 'Submit'

  useEffect(() => {
    setForm(initialFormState)
  }, [formProps])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target

    setForm({
      ...form,
      [name]: value
    })
  }

  const updateProduct = (product: InitialFormState) => {
    const productDTO = {
      _id: String(product._id),
      name: String(product.name),
      price: parseFloat(product.price),
      stock: Number(product.stock)
    }

    onUpdate && onUpdate(productDTO)
  }

  const createProduct = (product: InitialFormState) => {
    const productDTO = {
      name: String(product.name),
      price: parseFloat(product.price),
      stock: Number(product.stock)
    }

    onSubmit && onSubmit(productDTO)
  }

  const handleFormSubmit = () => {
    form._id ? updateProduct(form) : createProduct(form)

    setForm(initialFormState)
  }

  const disabledButtonControl = (labelButton: string, formProps.name) => {
    if (
      (labelButton === 'Submit' && form.name === '',
      form.price === '',
      form.stock === '')
    ) {
      return true
    } else if (labelButton === 'Update' && form.name === formProps.name,  ) {
      return true
    } else {
      return false
    }

    // if (
    //   (labelButton === 'Update' && form.name === '',
    //   form.price === '',
    //   form.stock === '')
    // ) {
    //   return false
    // }
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
        label={labelButton}
        size={'small'}
        color={'primary'}
        variant={'solid'}
        disabled={disabledButtonControl(labelButton)}
      />
    </Form>
  )
}

export default withPermission(['customer', 'admin'])(ProductForm)
