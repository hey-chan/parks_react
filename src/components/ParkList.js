import React from "react";
import { Card } from "../styled-components";
import { capitialize } from "../utils/stringUtils";
import { Link } from "react-router-dom";
import Moment from "react-moment";

export const ParkList = (props) => {
  const { post } = props;

  return (
    <Card>
      <Link to={`/parks/${post.id}`}>
        <h3>{post.name}</h3>
      </Link>
      <p>Address: {post.address.number ? post.address.number : null} {post.address.street}, {post.address.suburb}, {post.address.postcode}</p>
      <h4>Category: {capitialize(post.category.name)}</h4>
      <h4>Feature: {capitialize(post.feature.name)}</h4>
      
      <Moment fromNow>{post.updated_at}</Moment>
      
    </Card>
  );
};
