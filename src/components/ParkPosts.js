import React from "react";
import { useGlobalState } from "../config/store";
import { CardDeck } from "../styled-components";
import { ParkList } from "./ParkList";

const ParkPosts = (props) => {
  const loading = false;
  const { store } = useGlobalState();
  const { parkPosts } = store;

  return (
    <>
      {loading ? (
        <p>Loading</p>
      ) : (
        <CardDeck>
          {parkPosts
            .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
            .map((park) => (
              <ParkList key={park.id} post={park} />
            ))}
        </CardDeck>
      )}
    </>
  );
};

export default ParkPosts;
