import React, { useState, useEffect } from "react";
import AllParks from "./components/AllParks";
import { createNewPark, getParkPosts } from "./services/parkPostServices";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { GlobalStyle } from "./styled-components/globalStyles";
import { APark } from "./components/APark";
import { NewPark } from "./components/NewPark";

const App = () => {
  // THIS useState initial state value is an empty array to begin with
  const [parkPosts, setParkPosts] = useState([]);

  // WE will also set up loading state
  // Sometimes can be useful to make loading state restricted to local
  // This is initialise to true; this true is needed to load info
  // eg. loading a webpage
  const [loading, setLoading] = useState(true);

  // WE will also use the useEffect hook
  // When we first open up application, we want to load in our parkPosts
  useEffect(() => {
    getParkPosts()
      .then((parks) => {
        console.log(parks);
        setParkPosts(parks);
      })
      // Will catch error
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
    // Empty dependendcy array. only needs to run once
  }, []);

  // 
  function addNewPark(parkObject){
    createNewPark(parkObject)
    // This sets new park onto the current park0
    .then(newPark => setParkPosts([...parkPosts, newPark]))
    .catch(error => console.log(error))
  }

  return (
    //Can only use ternary operator when using it inside JSX. Styling varies between devs
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          {/* Home page goes and redirects to this */}
          <Route path="/" element={<Navigate to="/parks" />} />
          <Route path="/parks" element={<AllParks loading={loading} parks={parkPosts} />}/>
          <Route path="/parks/:id" element={<APark />} />
          <Route path="/parks/new" element={<NewPark addNewPark={addNewPark} />}/>
        </Routes>
      </BrowserRouter>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
    </>
  );
};

export default App;
