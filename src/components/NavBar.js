import React from 'react'
import { useGlobalState } from '../config/store'
import { Nav, StyledLink } from '../styled-components'


export const NavBar = (props) => {
    const {store, dispatch} = useGlobalState()
    const {signedInUser} = store

    function handleLogOut() {
        dispatch({type:"removeLoggedInUser"})
        dispatch({type:"removeJWT"})
  }

  return(
    <Nav>
         <span style={{
          fontSize: "1.2em",
          margin: "1em",
          padding: ".2em .5em", 
          fontWeight: "bold",
          fontStyle: "italic"
        }}>Hello {signedInUser || "guest"}</span>
        {signedInUser ? 
        (<StyledLink onClick={handleLogOut} to="/">Log Out</StyledLink>)
        : 
        (<StyledLink to="auth/signin">Log In</StyledLink>)
        }
        <StyledLink to="/">Home</StyledLink>
        {signedInUser === "admin" &&   <StyledLink to="/parks/new">Add a park</StyledLink> }
        {!signedInUser && <StyledLink to="/auth/signup">Sign up</StyledLink>}
    </Nav>
   )

 }