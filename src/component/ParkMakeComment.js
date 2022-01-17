import React, {useState} from 'react';
import { useNavigate } from 'react-router';
import { useGlobalState } from '../config/store';
import { createAComment } from '../services/parkPostServices';
import {
  Block,
  Label,
  Input,
  InputButton,
} from "../styled-components/index";
import { parseError } from '../config/api';


export const ParkMakeComment = (props) => {
  const navigate = useNavigate();
  const {store, dispatch} = useGlobalState();
  const {posts} = store;
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const {signedInUser} = store;

  const initialState = {
    comment: "",
    user_id: signedInUser,
    rating: ""

  }
  
  const [postFormState, setPostFormState] = useState(initialState);

  function addNewComment(parkComment) {
    setLoading(true)
    createAComment(parkComment)
      .then(newComment => {
        console.log(newComment);
        dispatch({
          type: "setPosts",
          data: [...posts, newComment]
        })
        setLoading(false)
        navigate("/parks/:id")
      })
      .catch(error => {
        const message = parseError(error);
        setErrorMessage(message);
      })
  }

  function handleChange(event) {
    event.preventDefault();
    setPostFormState({
      ...postFormState,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    addNewComment(postFormState);
  }

  return (
    <>
      <form id="addParkPost" onSubmit={handleSubmit}>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          <Block>
            <Label>Add a comment</Label>
            <Input
              type="text"
              name="comment"
              placeholder="Enter Title.."
              onChange={handleChange}
              value={postFormState.comment}
            />
          </Block>
          <Block>
            <Label>Rating</Label>
            <Input
              type="number"
              name="rating"
              placeholder="Rating"
              onChange={handleChange}
              value={postFormState.rating}
            ></Input>
          </Block>
          <br></br>
          <Block>
            <InputButton disabled={loading} type="submit" value="Add a comment" />
          </Block>
      </form>
    </>
  )
}
