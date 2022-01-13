// SHOWS ONLY SMALL BITS OF INFO WE WANT
import React from "react";
import { Card } from "../styled-components";

// Will behave to APark.js

export const ParkDescription = () => {
  const {park} = props;


  return (
    <Card>
      <h4 style={{fontWeight: "bold"}}>{park.name}</h4>
      <p>address: {park.address.number ? park.address.number : null} {park.address.street}, {park.address.suburb}, {park.address.postcode}</p>
      <p>category: {park.category.name}</p>
      <p>coordinates: {park.latitude} {park.longitude}</p>
    </Card>
  )
};
