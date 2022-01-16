import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import { useParams } from "react-router";
import { getBlogPost } from "../services/parkPostServices";
import { capitialize } from "../utils/stringUtils";

export const BlogPost = (props) => {
  const [park, setPark] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getBlogPost(id)
      .then((park) => setPark(park))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  if (!park) {
    return loading ? <p>Loading</p> : <p>Ooops, couldn't find your park</p>;
  }

  return (
    <>
      <h2>{park.name}</h2>
      <Moment fromNow>{park.updated_at}</Moment>
      <h3>Address: {park.address.number ? park.address.number : null} {park.address.street}, {park.address.suburb}, {park.address.parkcode}</h3>
      <h3>Category:{capitialize(park.category.name)}</h3>
      <h3>Category:{capitialize(park.feature.name)}</h3>
      <p>Coordinates: {park.latitude} {park.longitude}</p>
      <h4>Cheese and wine pair:</h4>
      <p>
        {park.cheese} and {park.wine}
      </p>
      
    </>
  );
};
