import parks from "../data/parkPosts";
import parkReviews from "../data/parkReviews";


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

// FOR COMMENTS THAT CORRESPOND TO A PARK

export const getParkComments = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(parkReviews.find(review => review.park_id === parseInt(id)))
    }, 1000)
  })
}

// FAKING WHAT A DATABASE DOES
const getNextId = () => {
  const maxId = Math.max(...parks.map(park => park.id));
  return maxId + 1
}

export const createNewPark = (parkObject) => {
  const newPark = {
    ...parkObject,
    updated_at: Date.now(),
    id: getNextId()
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(newPark);
    }, 500)
  })
}
