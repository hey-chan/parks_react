import React from 'react'
import { useGlobalState } from '../config/store'

import { Nav, StyledLink } from '../styled-components'

export const NavBar = (props) => {
  const {store, dispatch} = useGlobalState()
  const {signedInUser} = store


  function handleSignout(){
    dispatch({type: "removeSignedInUser"})
  }

  return (
    <Nav>
        <span style={{
          fontSize: "1.2em",
          margin: "1em",
          padding: ".2em .5em", 
          fontWeight: "bold",
          fontStyle: "italic"
        }}>Hello {signedInUser || "guest"}</span>
        {signedInUser ? 
        <StyledLink onClick={handleSignout}to="/">Sign out</StyledLink>
        :
        <StyledLink to="/auth/signin">Sign in</StyledLink>
        }
 
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/parks/new">Add a post</StyledLink>
        <StyledLink to="/"></StyledLink>
    </Nav>
  )
}
