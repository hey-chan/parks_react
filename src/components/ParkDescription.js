// SHOWS ONLY SMALL BITS OF INFO WE WANT
import React from "react";
import { Card } from "../styled-components";

// Will behave to APark.js

export const ParkDescription = (props) => {
  const {park} = props;


  return (
    <Card>
      <h4>Park: {park.park_name}{park.park_icon}</h4>
      <p>address: {park.address_id }</p>
      <p>category: {park.category_id}</p>
      <p>coordinates: {park.latitude} {park.longitude}</p>
    </Card>
  )
};
