import React from 'react'
import { APark } from './APark'

// DEALS WITH RENDERING ALL DATA BY MAPPING OVER IT
const AllParks = (props) => {
  const {loading, parks} = props 
  return (
    // If we are loading, we will render <p> tag with "Loading"
    // Else we are generating AllParks
    <>
      {
      loading 
      ? 
      (<p>Loading</p>) 
      : 
      (<div>
        {/* For each post, we will return APark element */}
        {/* AS we are mapping over an array, each APark will need a key */}
        {parks.sort((a,b)=> b.updated_at - a.updated_at).map(park => (<APark key={park.id} park={park}/>) )}
      </div>)
      }

    </>
  )
}

export default AllParks;