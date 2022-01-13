import React, { useState } from "react";
import Moment from "react-moment";
import { useParams } from "react-router";
import { useEffect } from "react/cjs/react.development";
import { getAPark } from "../services/parkPostServices";
import { capitalize } from "../utils/stringUtils";

// FOCUSES ON THE RENDERING OF A PARK
export const APark = (props) => {
  const [park, setPark] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  console.log(useParams());
  // When first loading up useEffect, we want to call to parkPostServices
  // When we first boot up, it will load
  useEffect(() => {
    getAPark(id)
      .then((park) => setPark(park))
      .catch((error) => console.log(error))
      .finally(setLoading(false));
  }, []);

  // if no parks are available
  if (!park) {
    return loading ? (
      <p>Loading park</p>
    ) : (
      <p>This park is not on our database</p>
    )
  }

  return (
    <div>
      <h1>
        {park.park_name} {park.park_icon}
      </h1>
      <h3>Category: {capitalize(park.category_id)}</h3>
      <h3>Feature: {park.feature_id}</h3>
      <p>
        Added: <Moment fromNow>{park.updated_at}</Moment>
      </p>
      {/* <Moment>{park.updated_at}</Moment> */}
      {/* <p>Updated at: {park.updated_at.toLocaleString()}</p> */}
      <h4>Cheese and wine pair:</h4>
      <p>
        {park.cheese_pair} and {park.wine_pair}
      </p>
      <h4>Park location</h4>
      <p>
        Location: {park.latitude}, {park.longitude}
      </p>
      <hr></hr>
    </div>
  );
};
