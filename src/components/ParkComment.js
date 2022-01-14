import React, {useEffect, useState} from 'react'
import { useParams } from "react-router";
import { getParkComments } from '../services/parkPostServices';

export const ParkComment = (props) => {

  const [comment, setComment] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  console.log(useParams());


  // When first loading up useEffect, we want to call to parkPostServices
  // When we first boot up, it will load
  useEffect(() => {
    getParkComments(id)
      .then((comment) => setComment(comment))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (!comment){
    return loading ? (
      <p>Loading comments for this park</p>
    ) : (
      <p>There are no comments for this park. Feel free to add your review</p>
    )
  }


  return (
    <>
    
      {/* {comment.forEach(comments => (
        <>
          <h4>{comments.user_id} thinks:</h4>
          <p>{comments.park_comment}</p>
          <br></br>
          <hr></hr>
        </>
      ))} */}
    </>
  )
}
