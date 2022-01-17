import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useGlobalState } from "../config/store";
import { createNewPark } from "../services/parkPostServices";
import {
  Block,
  Label,
  Input,
  InputButton,
  Select,
  Option,
} from "../styled-components/index";
import { capitalize } from "../utils/stringUtils";
import { parseError } from "../config/api";

export const NewPark = (props) => {
  const navigate = useNavigate();
  const { store, dispatch } = useGlobalState();
  const { parkPosts, categories, features, addresses } = store;
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const initialState = {
    name: "",
    category_id: "",
    feature_id: "",
    address_id: "",
    latitude: "",
    longitude: "",
    cheese_pair: "",
    wine_pair: ""
    
  };

  const [formState, setFormState] = useState(initialState);

  function addNewPark(postObject) {
    setLoading(true);
    createNewPark(postObject)
      .then((newPost) => {
        console.log(newPost);
        dispatch({
          type: "setParkPosts", 
          data: [...parkPosts, newPost],
        });
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        const message = parseError(error);
        setErrorMessage(message);
      });
  }

  function handleChange(event) {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    addNewPark(formState);
  }

  return (
    <div>
      <h1>Admin - Add a new park</h1>
      <div className="log-container">
        <form id="newParkForm" onSubmit={handleSubmit}>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          <Block>
            <Label>Park name</Label>
            <Input
              type="text"
              name="name"
              placeholder="Enter Title.."
              value={formState.name}
              onChange={handleChange}
            />
          </Block>
          <Block>
            <Label>Select park category</Label>
            <Select name="category_id" defaultValue="" onChange={handleChange}>
              <Option disabled hidden value="">
                Select Category:
              </Option>
              {categories.map((category) => (
                <Option key={category.id} value={category.id}>
                  {capitalize(category.name)}
                </Option>
              ))}
            </Select>
          </Block>
          <Block>
            <Label>Select park feature</Label>
            <Select name="feature_id" defaultValue="" onChange={handleChange}>
              <Option disabled hidden value="">
                Select Category:
              </Option>
              {features.map((feature) => (
                <Option key={feature.id} value={feature.id}>
                  {capitalize(feature.name)}
                </Option>
              ))}
            </Select>
            <Block>
              <Label>Select park address</Label>
              <Select name="address_id" defaultValue="" onChange={handleChange}>
                <Option disabled hidden value="">
                  Select address:
                </Option>
                {addresses.map((add) => (
                  <Option key={add.id} value={add.id}>
                    {add.number} {add.street}
                  </Option>
                ))}
              </Select>
            </Block>
          </Block>
          <Block>
            <Label>Coordinates</Label>
            <Input
              type="number"
              name="latitude"
              placeholder="Enter park latitude"
              onChange={handleChange}
              value={formState.latitude}
            ></Input>
            <Input
              type="number"
              name="longitude"
              placeholder="Enter park longitude"
              onChange={handleChange}
              value={formState.longitude}
            ></Input>
          </Block>
          {/* <Block>
            <Label>Content</Label>
            <TextArea
              from="newParkForm"
              type="text"
              name="content"
              placeholder="Enter Text"
              value={formState.content}
              onChange={handleChange}
            ></TextArea>
          </Block> */}
          <br></br>
          <Block>
            <InputButton disabled={loading} type="submit" value="Add Post" />
          </Block>
        </form>
      </div>
    </div>
  );
};
