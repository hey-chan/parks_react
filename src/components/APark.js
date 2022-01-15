import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import { useParams } from "react-router";
import { useGlobalState } from "../config/store";
import { getAPark } from "../services/parkPostServices";
import { capitalize } from "../utils/stringUtils";
import { ParkComment } from "./ParkComment";

// FOCUSES ON THE RENDERING OF A PARK
export const APark = (props) => {
  const {store} = useGlobalState();
  const {parkPosts} = store;
  const [park, setPark] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams(); 
  
  // console.log(useParams());
  // When first loading up useEffect, we want to call to parkPostServices
  // When we first boot up, it will load
  useEffect(() => {
    getAPark(id)
      .then((park) => setPark(park))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

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
        {park.name} {park.park_icon}
      </h1>
      <h3>Category: {capitalize(park.category.name)}</h3>
      <h3>Feature: {park.feature.name}</h3>
      <p>Address: {park.address.number ? park.address.number : null} {park.address.street}, {park.address.suburb}, {park.address.postcode}</p>
      <p>
        Added: <Moment fromNow>{park.updated_at}</Moment>
      </p>
      {/* <Moment>{park.updated_at}</Moment> */}
      {/* <p>Updated at: {park.updated_at.toLocaleString()}</p> */}
      <h4>Cheese and wine pair:</h4>
      <p>
        {park.cheese} and {park.wine}
      </p>
      <h4>Park location</h4>
      <p>
        Location: {park.latitude}, {park.longitude}
      </p>
      <hr></hr>
      <h2>All comments</h2>
      <ParkComment />
    </div>
  );
};