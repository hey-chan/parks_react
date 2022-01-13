import React from 'react'
import Moment from 'react-moment'
import { capitalize } from '../utils/stringUtils'

// FOCUSES ON THE RENDERING OF A PARK
export const APark = (props) => {
  const {park} = props
  return (
    <>
      <h1>{park.park_name} {park.park_icon}</h1>
      <h3>Category: {capitalize(park.category_id)}</h3>
      <h3>Feature: {park.feature_id}</h3>
      <p>Added: <Moment fromNow>{park.updated_at}</Moment></p>
      {/* <Moment>{park.updated_at}</Moment> */}
      {/* <p>Updated at: {park.updated_at.toLocaleString()}</p> */}
      <h4>Cheese and wine pair:</h4>
      <p>{park.cheese_pair} and {park.wine_pair}</p>

      <h4>Park location</h4>
      <p>Location: {park.latitude}, {park.longitude}</p>
      <hr></hr>
    </>
  )
}
