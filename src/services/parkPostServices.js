import parks from "../data/parkPosts";
import parkReviews from "../data/parkReviews";

import parkApi from "../config/api";

// AXIOS WILL THROW ERROR CODE FOR RESPONSE

// WILL DISPLAY ALL PARKS
export const getParkPosts = async () => {
  try{
    const response = await parkApi.get("/parks")
    return response.data
  } catch(err){
    console.log(err)
    throw err
  }
}


// FOR A SPECIFIC PARK via id. 
// THIS Saves trip to server by using state, but no useful when it comes to pagination, as
// export const getAPark = (parkPosts, id) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(parkPosts.find(park => park.id === parseInt(id)))  // Where park.id = id of route params
//     }, 500)
//   })
// }

export const getAPark = async (id) => {
  try{
    const response = await parkApi.get("/parks/" + id);
    return response.data
  } catch(err){
    console.log(err)
    throw err
  }
}

// FOR COMMENTS THAT CORRESPOND TO A PARK

export const getParkComments = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(parkReviews.find(review => review.park_id === parseInt(id)))
    }, 500)
  })
}

// FAKING WHAT A DATABASE DOES

export const createNewPark = async (parkObject) => {
  try{
    const response = await parkApi.post("/parks/new", parkObject);
    return response.data
  } catch(err){
    // console.log("Created new post" + err)
    throw err
  }
}
