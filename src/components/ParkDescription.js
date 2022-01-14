// SHOWS ONLY SMALL BITS OF INFO WE WANT
import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../styled-components";
import addresses from "../data/addresses";
import features from "../data/features";
import categories from "../data/categories";
// Will behave to APark.js

export const ParkDescription = (props) => {
  const {park} = props;


  return (
    <Card>
      <Link to={`/parks/${park.id}`}><h4>{park.park_name}{park.park_icon}</h4></Link>
      <p>address: {park.address_id }</p>
      <p>category: {park.category_id}</p>
      <p>coordinates: {park.latitude} {park.longitude}</p>
    </Card>
  )
};
