import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { parseError } from '../config/api';
import { useGlobalState } from '../config/store';
import { signInUser } from '../services/userServices';
import { Block, InputButton, Label, Input } from '../styled-components'


export const SignIn = (props) => {
    const initialValues = {signin: "", password: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [errorMessage, setErrorMessage] = useState("")
    const {dispatch} = useGlobalState()
    const navigate = useNavigate()
    
    function handleChange(event) {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        signInUser(formValues)
            .then(response  => {
                console.log(response);
                dispatch({type:"setSignedInUser", data: response.username});
                dispatch({type:"setJWT", data: response.jwt});
                navigate("/")
            })
            .catch(error =>  {
                const message = parseError(error);
                setErrorMessage(message);
            })
    }

    return(
    <div>
      <h1>Welcome back!</h1>
      <div className='log-container'>
            <img className='park-img' src={process.env.PUBLIC_URL + '/park_image1.jpg'} alt="melbourne google map" />
            <form className='log-form' onSubmit={handleSubmit}>
                {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
                <Block>
                    <Label>Login</Label>
                    <Input  onChange={handleChange} type="text" name="signin" placeholder="Enter username or email" value={formValues.signin} style={{ width:"300px" }} />
                </Block>
                <Block>
                    <Label>Password</Label>
                    <Input onChange={handleChange} type="password" name="password" placeholder="Enter password" value={formValues.password} style={{ width:"300px" }} />
                </Block>
                <Block>
                    <InputButton className='' type="submit" value="Log In"  />
                </Block>
            </form>
      </div>
    </div>
   )

 }