import axios from "axios";

const parkApi = axios.create({
  // Local
  baseURL: "http://localhost:3000"

  // Deployment
  // baseURL: process.env.REACT_APP_PARK_API
})

export default parkApi;