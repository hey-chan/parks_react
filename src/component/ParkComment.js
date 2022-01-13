import React, {useEffect, useState} from 'react';
// import React, {useEffect} from 'react';
import { useParams } from 'react-router';
import Moment from 'react-moment';
// import {useGlobalState} from '../utils/stateContext'
import { getPosts } from '../services/parkPostServices';

export default function ParkComment() {
  // const { store } = useGlobalState();
  // const { store, dispatch } = useGlobalState();
  // const { posts, loading } = store;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

  useEffect(() => {
    getPosts(id)
      .then(post => setPost(post))
      .catch(error => {
        console.log(error.response)
      })
      .finally(() => setLoading(false))
  }, [id])


  if(!post ) {
    return loading ? (<p>Loading...</p>): (<p>Oops, couldn't find any comments for this park</p>) 
  }


  // const averageRating = post.map(rate => rate.rating).reduce((a,b) => a + b) / post.length 

  return (
    <>
      
      <h2 style={{fontWeight: "bold", fontSize: "20px"}}>Comments</h2>
      {/* {post !== 'undefined' ? 
        <p>Overall rating: {"⭐️".repeat(averageRating.toFixed(0))} ({averageRating.toFixed(2)})</p> 
        :
        <p>No comments are available to show overall rating</p>
      } */}
      {/* <p>Overall rating: {"⭐️".repeat(averageRating.toFixed(0))} ({averageRating.toFixed(2)})</p> */}
      <hr></hr>
      {post.map(comment => (
        <>
          <h4>{comment.user.username} thinks:</h4>
          <p>{comment.comment}</p>
          <p>Rating: {"⭐️".repeat(comment.rating)} out of ⭐️⭐️⭐️⭐️⭐️</p>
          <p style={{fontSize: "11px"}}>Updated: <Moment fromNow>{comment.updated_at}</Moment> - Posted on: <Moment style={{fontSize: "11px"}} format="DD/MM/YYYY">{comment.updated_at}</Moment></p>
          <br></br>
          <hr></hr>
        </>
      ))}    
    </>
  )
}


