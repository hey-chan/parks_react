import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useGlobalState } from '../config/store'
import { signInUser } from '../services/userServices'
import { Block, InputButton, Label, Input } from '../styled-components'

export const Signin = (props) => {
  const initialValues=  {email: "", password: ""}
  const [formValues, setFormValues] = useState(initialValues)
  const {dispatch} = useGlobalState()
  const navigate = useNavigate()



  function handleChange(event){
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event){
    event.preventDefault()
    signInUser(formValues)
    .then(email => {
      dispatch({type: "setSignedInUser", data: email})
      navigate("/")
    })
    .catch(error => console.log(error))
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <Block>
          <Label>Email</Label>
          <Input onChange={handleChange} type="email" name="email" placeholder="Enter email" value={formValues.email} />
        </Block>
        <Block>
          <Label>Password</Label>
          <Input onChange={handleChange} type="password" name="password" placeholder="Enter password" value={formValues.password} />
        </Block>
        <Block>
          <InputButton type="submit" value="Sign in"></InputButton>
        </Block>
      </form>
      <br></br>
      <button style={{
            backgroundColor: "#346dc9",
            padding: "0.2em",
            border: "none",
            fontSize: "1.2em",
            width: "200px",
            cursor: "pointer"
          }}>
          <Link style={{textDecoration: "none", color: "white"}}to="/auth/signup">Create an account</Link>
      </button>
    </>
  )
}
