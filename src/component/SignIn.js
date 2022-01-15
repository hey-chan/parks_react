import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { signInUser } from '../services/userServices';
import { parseError } from '../config/api';

export default function SignIn(props) {
  const initialValues = {
    username: "",
    password: ""
  }

  const navigate = useNavigate();

  const [formUserValues, setUserFormValues] = useState(initialValues)
  const [errorMessage, setErrorMessage] = useState("")

  function handleChange(event) {
    setUserFormValues({
      ...formUserValues,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    signInUser(formUserValues)
      .then(response => {
        dispatchEvent({
          type: "setSignedInUser",
          data: response.username
        })
        dispatchEvent({
          type: "setJWT",
          data: response.jwt
        })
        navigate("/")
      })
      .catch(error => {
        const message = parseError(error);
        setErrorMessage(message);
      })
  }

  return (
    <>
      <section>
        <h2>Sign In</h2>
        <div>
          <img src={process.env.PUBLIC_URL + '/park_image1.jpg'} alt="melbourne google map" style={{ width: '100%' }} />
          {/* <form onSubmit={handleSubmit}> */}
          <form onSubmit={handleSubmit}>
            {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
            <div>
              <label>
                Username
                <input
                  id="username"
                  type="username"
                  name="username"
                  placeholder="Enter Username"
                  // value={username}
                  onChange={handleChange}
                />
              </label>
              <label>
                Password
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  // value={password}
                  onChange={handleChange}
                />
              </label>
              {/* <label>
                Password Confirmation
                <input
                  id="password_confirmation"
                  // value={password_confirmation}
                  // onChange={(e) => setPasswordConfirmation(e.currentTarget.value)}
                />
              </label> */}
              <button type="submit" className="primary">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </section>
      <h2><Link to="/signup">Create an account</Link></h2>
    </>
  )
}