import React, { useReducer, useState, useEffect } from "react";
import AllParks from "./components/AllParks";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { GlobalStyle } from "./styled-components/globalStyles";
import { APark } from "./components/APark";
import { NewPark } from "./components/NewPark";
import { NavBar } from "./components/NavBar";
import stateReducer from "./config/stateReducer";
import initialState from "./config/initialState"
import { StateContext } from "./config/store";
import { getParkPosts } from "./services/parkPostServices";


const App = () => {
  const [store, dispatch] = useReducer(stateReducer, initialState)
  // THIS is store of all state
  // store: new initialState, which is empty array
  // useReducer takes stateReducer: which in turn takes state and action
  // dispatch: checks store as state value

  // THIS useState initial state value is an empty array to begin with. Not needed now
  // const [parkPosts, setParkPosts] = useState([]);

  // WE will also set up loading state. Not needed
  // Sometimes can be useful to make loading state restricted to local
  // This is initialise to true; this true is needed to load info
  // eg. loading a webpage
  // const [loading, setLoading] = useState(true);

  // const {parkPosts} = store

  // // WE will also use the useEffect hook
  // // When we first open up application, we want to load in our parkPosts

  // const [loading, setLoading] = useState(true)
  useEffect(() => {
    getParkPosts()
    // Dispatch all action. parkPosts will be in store, instead of state
    .then(parks => dispatch({type: "setParkPosts", data:parks}))
    // Will catch error
    .catch(error => console.log(error))
      // .finally(() => setLoading(false));
    // Empty dependendcy array. only needs to run once
  }, []);

  // // 
  // function addNewPark(parkObject){
  //   createNewPark(parkObject)
  //   // This sets new park onto the current park0
  //   .then(newPark => dispatch({type: "setParkPosts", data: [...parkPosts, newPark]}))
  //   .catch(error => console.log(error))
  //   .finally(() => setLoading(false))
  // }

  return (
    //Can only use ternary operator when using it inside JSX. Styling varies between devs
    <>
      <GlobalStyle />
      <StateContext.Provider value={{store, dispatch}}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            {/* Home page goes and redirects to this */}
            <Route path="/" element={<Navigate to="/parks" />} />
            <Route path="/parks" element={<AllParks />}/>
            <Route path="/parks/new" element={<NewPark />}/>
            <Route path="/parks/:id" element={<APark />} />
          </Routes>
        </BrowserRouter>
      </StateContext.Provider>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
    </>
  );
};

export default App;
