import React, {useEffect, useReducer} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyle } from './styled-components/globalStyles';
import { BlogPost } from './components/Park';
import ParkPosts from './components/ParkPosts';
import { NewPark } from './components/NewPark';
import { NavBar } from './components/NavBar';
import stateReducer from './config/stateReducer';
import intialState from './config/initialState';
import { StateContext } from './config/store';
import { getParks } from './services/parkPostServices';
import { getAddresses, getCategories, getFeatures } from './services/categoriesServices';
import { SignIn } from './components/Signin';
import { retrieveUserFromJWT } from './services/userServices';
import { Register } from './components/Signup';




const App = () => {
  
  const [store, dispatch] = useReducer(stateReducer, intialState);
  const token = sessionStorage.getItem('jwt');

  const {signedInUser} = store

  
  useEffect(() => {
    getCategories()
      .then(categories => dispatch({type: "setCategories", data: categories}))
      .catch(error => console.log(error))
    
    getFeatures()
    .then(features => dispatch({type: "setFeatures", data: features}))
    .catch(error => console.log(error))

    getAddresses()
    .then(addresses => dispatch({type: "setAddresses", data: addresses}))
    .catch(error => console.log(error))
      
    getParks()
      .then(parks => dispatch({type: "setParkPosts", data: parks}) )
      .catch(error => console.log(error))
    }, [])



    useEffect(() => {
        retrieveUserFromJWT()
          .then(response => dispatch({type:"setSignedInUser", data: response.username}))
    }, [token])

  return (
    <>
    <GlobalStyle />
    <StateContext.Provider value={{store, dispatch}}>
    <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path="/" element={<Navigate to="/parks" />} />
          <Route path="/parks" element={<ParkPosts  />} />
          {signedInUser === "admin" && <Route path="/parks/new" element={<NewPark  />} />}
          <Route path="/parks/:id" element={<BlogPost/>} />
          <Route path="/auth/signin" element={<SignIn />} />
          {!signedInUser &&  <Route path="/auth/signup" element={<Register />} />}
      
      </Routes>
    
    </BrowserRouter>
    </StateContext.Provider>
    </>
  )
}

export default App
