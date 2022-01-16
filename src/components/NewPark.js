import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useGlobalState } from "../config/store";
import { createNewPark } from "../services/parkPostServices";
import {
  Block,
  Input,
  InputButton,
  Label,
  Select,
  Option,
} from "../styled-components";
import { capitalize } from "../utils/stringUtils";
import { parseError } from "../config/api";

export const NewPark = (props) => {
  // Initial state; what our form will look like when loading this page
  const navigate = useNavigate();
  const { store, dispatch } = useGlobalState();
  const { parkPosts, features, categories, addresses } = store;
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("")

  const initialState = {
    park_name: "",
    category_id: "",
    feature_id: "",
    address_id: "",
    latitude: "",
    longitude: "",
    cheese_pair: "",
    wine_pair: "",
  };
  // const {addNewPark} = props
  const [parkFormState, setParkFormState] = useState(initialState);
  // const [file, setFile] = useState(null)

  function addNewPark(parkObject) {
    setLoading(true);
    createNewPark(parkObject)
      .then((newPark) => {
        console.log(newPark);
        dispatch({
          type: "setParkPosts",
          data: [...parkPosts, newPark],
        });
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        const message = parseError(error);
        setErrorMessage(message);
      });
  }

  // When form state changes, we will call this function below, and
  function handleChange(event) {
    setParkFormState({
      ...parkFormState,
      [event.target.name]: event.target.value,
    });
  }

  // IMAGE UPLOAD
  // function handleFileChange(event){
  //   setFile({
  //     ...file,
  //     [event.target.files[0]]: event.target.value
  //   })
  // }
  // const [errorMessage, setErrorMessage] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    addNewPark(parkFormState);
    // This navigates back home
    navigate("/");
  }

  return (
    <>
      <h1>Admin: add a new park</h1>
      <form id="newParkForm" onSubmit={handleSubmit}>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <Block>
          <Label>Park name</Label>
          <Input
            type="text"
            name="park_name"
            placeholder="Enter park name"
            onChange={handleChange}
            value={parkFormState.park_name}
            // required
          ></Input>
        </Block>
        <Block>
          <Label>Category</Label>

          <Select name="category_id" onChange={handleChange} defaultValue="">
            <Option disabled hidden value="">
              Select a category
            </Option>
            {categories.map((cat) => (
              <Option key={cat.id} value={cat.id}>
                {capitalize(cat.name)}
              </Option>
            ))}
          </Select>
        </Block>
        <Block>
          <Label>Features</Label>
          <Select name="feature_id" onChange={handleChange} defaultValue="">
            <Option disabled hidden value="">
              Select a feature
            </Option>
            {features.map((feat) => (
              <Option key={feat.id} value={feat.id}>
                {capitalize(feat.name)}
              </Option>
            ))}
          </Select>
        </Block>
        <Block>
          <Label>Address</Label>
          <Select name="address_id" onChange={handleChange} defaultValue="">
            <Option disabled hidden value="">
              Select a feature
            </Option>
            {addresses.map((add) => (
              <Option key={add.id} value={add.id}>
                {add.number} {add.street}
              </Option>
            ))}
          </Select>
        </Block>
        <Block>
          <Label>Coordinates</Label>
          <Input
            type="number"
            name="latitude"
            placeholder="Enter park latitude"
            onChange={handleChange}
            value={parkFormState.latitude}
          ></Input>
          <Input
            type="number"
            name="longitude"
            placeholder="Enter park longitude"
            onChange={handleChange}
            value={parkFormState.longitude}
          ></Input>
        </Block>
        <Block>
          <Label>Cheese and Wine Pair</Label>
          <Input
            type="text"
            name="cheese_pair"
            placeholder="Add a cheese"
            onChange={handleChange}
            value={parkFormState.cheese_pair}
          ></Input>
          <Input
            type="text"
            name="wine_pair"
            placeholder="Add a wine"
            onChange={handleChange}
            value={parkFormState.wine_pair}
          ></Input>
        </Block>
        {/* <Block>
          <Label>Add an image</Label>
          <input type="file" onChange={handleFileChange}/>
        </Block> */}
        <br></br>
        <Block>
          <InputButton
            disabled={loading}
            type="submit"
            value="Add a park"
          ></InputButton>
        </Block>
      </form>
    </>
  );
};
