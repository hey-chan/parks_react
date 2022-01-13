import picnicAPI from "../config/api"

export const signInUser = async (signInDetails) => {
  try {
    const response = await picnicAPI.post('/auth/signin', signInDetails)
    return response.data
  } catch(err) {
    console.log("Sign In User " + err)
    throw err
  }
}
// export const signInUser = (signInDetails) => {
//   return new Promise((resolve, reject) => {
//     resolve(signInDetails.username)
//   })
// }

// export const retrieveUserFromJWT = async () => {
//   try {
//     const jwt = sessionStorage.getItem('jwt')
//     const response = await picnicAPI.post('/auth/signed_in_user', {jwt: jwt})
//     return response.data
//   } catch(err) {
//     console.log("Retrieve user from JWT " + err)
//     throw err
//   }
// }