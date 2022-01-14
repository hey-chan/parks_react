import React from 'react'
// import { Link } from 'react-router-dom'
import { Nav, StyledLink } from '../styled-components'

export const NavBar = (props) => {
  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/parks/new">Add a post</StyledLink>
      <StyledLink to="/"></StyledLink>
    </Nav>
  )
}
