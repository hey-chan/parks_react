import parkApi from "../config/api";


export const getCategories = async () => {
  try {
    const response = await parkApi.get("/categories")
    return response.data
  }catch(err){
    console.log(err)
  }
}

export const getFeatures = async () => {
  try {
    const response = await parkApi.get("/features")
    return response.data
  }catch(err){
    console.log(err)
  }
}

export const getAddresses = async () => {
  try {
    const response = await parkApi.get("/addresses")
    return response.data
  }catch(err){
    console.log(err)
  }
}