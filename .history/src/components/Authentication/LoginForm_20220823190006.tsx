/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/Authentication/Authentication.actions'
import Form from '../../sharedComponents/Form'
import Input from '../../sharedComponents/Input'
import Button from '../../sharedComponents/Button'
import { Navigate } from 'react-router-dom'

const LoginForm = () => {
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    user: '',
    pass: ''
  })

  const handleLogin = async () => {
    try {
      // @ts-ignore
      await dispatch(login({ user: form.user, pass: form.pass })),
        
    } catch (error) {
      Swal.fire('Error', 'It is not possible to log in.', 'error')
    }
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target

    setForm({
      ...form,
      [name]: value
    })
  }

  return (
    <Form title="Login - AlgaStock" onSubmit={handleLogin}>
      <Input
        label="User"
        name="user"
        value={form.user}
        onChange={handleInputChange}
        placeholder="E.g.: your_user_name321"
      />
      <Input
        type="password"
        name="pass"
        value={form.pass}
        onChange={handleInputChange}
        label="Passowrd"
      />
      <Button type="submit" label="Login" />
    </Form>
  )
}

export default LoginForm
