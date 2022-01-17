import React, {useState} from 'react'
import { useNavigate } from 'react-router'
import { parseError } from '../config/api'
import { useGlobalState } from '../config/store'
import { createNewUser } from '../services/userServices'
import {Block, Label, Input, InputButton} from '../styled-components/index'

export const Register = (props) => {
  const navigate = useNavigate()
  const {store, dispatch} = useGlobalState();
  const {users} = store
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const initialState = {
    username: "",
    email: "",
    password: "",
    password_confirmation: ""
  }

  const [userState, setUserState] = useState(initialState)

  function addNewUser(userObject){
    setLoading(true)
    createNewUser(userObject)
      .then(newUser => {
        console.log(newUser)
        dispatch(newUser)
        dispatch({type:"setSignedInUser", data: newUser.username});
        dispatch({type:"setJWT", data: newUser.jwt});
        setLoading(false)
        navigate("/")
      })
      .catch(error => {
        const message = parseError(error)
        setErrorMessage(message)
      })
  }

  function handleChange(event){
    setUserState({
      ...userState,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    addNewUser(userState);
}


  return (
    <div>
        <h1>Add a new user</h1>
        <div className='log-container'>
          <img className='park-img' src={process.env.PUBLIC_URL + '/park_image1.jpg'} alt="melbourne google map" />
          <form className='log-form' id="newUser" onSubmit={handleSubmit}>
            {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
            <Block>
                  <Label>Add username</Label>
                  <Input type="text" name="username" placeholder="Enter a username.." value={userState.username} onChange={handleChange} style={{ width:"300px" }} />
            </Block>
            <Block>
                  <Label>Add email</Label>
                  <Input type="email" name="email" placeholder="Enter an email.." value={userState.email} onChange={handleChange} style={{ width:"300px" }} />
            </Block>
            <Block>
                  <Label>Add a password</Label>
                  <Input type="password" name="password" placeholder="Enter a password.." value={userState.password} onChange={handleChange} style={{ width:"300px" }} />
            </Block>
            <Block>
                  <Label>Confirm password</Label>
                  <Input type="password" name="password_confirmation" placeholder="Confirm your password.." value={userState.password_confirmation} onChange={handleChange} style={{ width:"300px" }} />
            </Block>
            <Block>
                  <InputButton disabled={loading} type="submit" value="Create a user" />  
            </Block>
          </form>
        </div>
    </div>
  )
}
