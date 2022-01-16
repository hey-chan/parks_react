import axios from "axios";


const parkApi = axios.create({
  // Local
  // baseURL: "http://localhost:3000"

  // Deployment
  baseURL: process.env.REACT_APP_PARK_API
})

parkApi.interceptors.request.use(req => {
  const jwt = sessionStorage.getItem('jwt');
  if (jwt) {
      req.headers["Authorization"] = `Bearer ${jwt}`
  }
  return req; 

})



export default parkApi;

export function parseError(error){
  const {response} = error;
  if(!response) return "Something has gone wrong";
  if(response.data.error) return response.data.error
  if(response.data.errors) return response.data.errors.join(", ")
}