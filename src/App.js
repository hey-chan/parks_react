import React, { useState, useEffect } from "react";
import AllParks from "./components/AllParks";
import { getParkPosts } from "./services/parkPostServices";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styled-components/globalStyles";

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

  return (
    //Can only use ternary operator when using it inside JSX. Styling varies between devs
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllParks loading={loading} parks={parkPosts}/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
