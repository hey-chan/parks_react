import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { parseError } from '../config/api'
import { useGlobalState } from '../config/store'
import { signInUser } from '../services/userServices'
import { Block, InputButton, Label, Input } from '../styled-components'

export const Signin = (props) => {
  const initialValues=  {signin: "", password: ""}
  const [formValues, setFormValues] = useState(initialValues)
  const [errorMessage, setErrorMessage] = useState("")
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
    .then(response => {
      console.log(response)
      dispatch({type: "setSignedInUser", data: response.username})
      dispatch({type: "setJWT", data: response.jwt})
      navigate("/")
    })
    .catch(error => {
      const message = parseError(error)
      setErrorMessage(message)
    })
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        {errorMessage && <p style={{color: "red"}}>{errorMessage}</p>}
        <Block>
          <Label>Login</Label>
          <Input onChange={handleChange} type="text" name="signin" placeholder="Enter email" value={formValues.signin} />
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
