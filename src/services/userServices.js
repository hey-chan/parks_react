export const signInUser = (signInDetails) => {
  return new Promise((resolve, reject) => {
    resolve(signInDetails.email)
  })
}