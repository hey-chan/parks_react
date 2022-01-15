import React from 'react'
import { useGlobalState } from '../config/store'
// import { getParkPosts } from '../services/parkPostServices'
import { CardDeck } from '../styled-components' // Uncomment this and change <CardDeck> to <div> for list like view
import { ParkDescription } from './ParkDescription'

// DEALS WITH RENDERING ALL DATA BY MAPPING OVER IT
const AllParks = (props) => {
  const loading = false
  // We can get our store from useGlobalState that we set up
  const {store} = useGlobalState()
  // From here, we can get our parkPosts
  const {parkPosts} = store


  // useEffect(() => {
  //   getParkPosts()
  //     .then((parks) => {
  //       console.log(parks);
  //       // Dispatch all action. parkPosts will be in store, instead of state
  //       dispatch({type: "setParkPosts", data: parks});
  //     })
  //     // Will catch error
  //     .catch(error => console.log(error))
  //     .finally(() => setLoading(false));
  //   // Empty dependendcy array. only needs to run once
  // }, []);
  
  return (
    // If we are loading, we will render <p> tag with "Loading"
    // Else we are generating AllParks
    <>
      {
      loading 
      ? 
      (<p>Loading</p>) 
      : 
      (<CardDeck>
        {/* For each post, we will return APark element */}
        {/* AS we are mapping over an array, each APark will need a key */}
        {parkPosts.sort((a,b)=> b.updated_at - a.updated_at).map(park => (<ParkDescription key={park.id} park={park}/>) )}
      </CardDeck>)
      }

    </>
  )
}

export default AllParks;