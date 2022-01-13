import parks from "../data/parkPosts";


// THIS BASICALLY FAKES A FETCH REQUEST
export const getParkPosts = () => {
  return new Promise((resolve, reject) => {
    // We will be faking a HTTP request via setTimeout
    setTimeout(() => {
      // After set number of time of 500ms, we will resolve with our parkPosts
      resolve(parks)
    }, 1000)
  })
}


// FOR A SPECIFIC PARK via id
export const getAPark = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(parks.find(park => park.id === parseInt(id)))  // Where park.id = id of route params
    }, 1000)
  })
}

