import parks from "../data/parkPosts";


// THIS BASICALL FAKES A FETCH REQUEST
export const getParkPosts = () => {
  return new Promise((resolve, reject) => {
    // We will be faking a HTTP request via setTimeout
    setTimeout(() => {
      // After set number of time of 500ms, we will resolve with our parkPosts
      resolve(parks)
    }, 1000)
  })
}


//-------------------FOR PARKREVIEWS-------------------

// import parkReviews from "../data/parkReviews"

// export const getParkPosts = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(parkReviews)
//     }, 500)
//   })
// }