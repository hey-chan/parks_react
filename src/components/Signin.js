import React, { useState } from 'react'
import { Block, InputButton, Label, Input } from '../styled-components'

export const Signin = (props) => {
  const initialValues=  {email: "", password: ""}
  const [formValues, setFormValues] = useState()

  function handleChange(event){
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event){
    event.preventDefault()
    console.log(formValues)
  }


  return (
    <form>
      <Block>
        <Label>Email</Label>
        <Input onChange={handleChange} type="email" name="email" placeholder="Enter email" value={formValues.email}></Input>
      </Block>
      <Block>
        <Label>Password</Label>
        <Input onChange={handleChange} type="password" name="password" placeholder="Enter password" value={formValues.password}></Input>
      </Block>
      <Block>
        <InputButton type="submit" value="Sign in"></InputButton>
      </Block>
    </form>
  )
}
