import React, { useState } from 'react'
import { Block, InputButton, Label, Input } from '../styled-components'

export const Signup = (props) => {
  const initialValues=  {user: "", email: "", password: "", password_confirmation: ""}
  const [formValues, setFormValues] = useState(initialValues)


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
    <>
      <form onSubmit={handleSubmit}>
        <Block>
          <Label>Enter a username</Label>
          <Input onChange={handleChange} type="text" name="user" placeholder="Enter username" value={formValues.user} />
        </Block>
        <Block>
          <Label>Enter an email</Label>
          <Input onChange={handleChange} type="email" name="email" placeholder="Enter email" value={formValues.email} />
        </Block>
        <Block>
          <Label>Password</Label>
          <Input onChange={handleChange} type="password" name="password" placeholder="Enter password" value={formValues.password} />
        </Block>
        <Block>
          <Label>Password confirmation</Label>
          <Input onChange={handleChange} type="password" name="password_confirmation" placeholder="Enter password" value={formValues.password_confirmation} />
        </Block>
        <Block>
          <InputButton type="submit" value="Sign up"></InputButton>
        </Block>
      </form>
    </>
    
  )
}
