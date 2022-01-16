import parkApi from "../config/api"

export const signInUser = async (signInDetails) => {
  try{
    const response = await parkApi.post("/auth/signin", signInDetails)
    return response.data
  }catch(err){
    throw err
  }
}