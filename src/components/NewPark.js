import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { useGlobalState } from '../config/store';
import { createNewPark } from '../services/parkPostServices';
import { Block, Input, InputButton, Label, Select, Option } from '../styled-components'
import categories from '../data/categories'
import features from '../data/features';
import addresses from '../data/addresses';
import { capitalize } from '../utils/stringUtils';


export const NewPark = (props) => {
  // Initial state; what our form will look like when loading this page
  const navigate = useNavigate();
  const {store, dispatch} = useGlobalState()
  const {parkPosts} = store;
  const [loading, setLoading] = useState(true)

  const initialState = {
    park_name: "",
    category_id: "",
    feature_id: "",
    address_id: "",
    latitude: "",
    longitude: ""
  }
  // const {addNewPark} = props
  const [parkFormState, setParkFormState] = useState(initialState);

  function addNewPark(parkObject){
    createNewPark(parkObject)
    .then(newPark => {
      console.log(newPark)
      dispatch({
        type: "setParkPosts",
        data: [...parkPosts, newPark]
      })
      navigate("/")
  })
  .catch(error => console.log(error))
}

  // When form state changes, we will call this function below, and 
  function handleChange(event){
    setParkFormState({
      ...parkFormState,
      [event.target.name]: event.target.value
    })
  }
  
  function handleSumbit(event){
    event.preventDefault();
    addNewPark(parkFormState)
    // This navigates back home
    navigate("/");
  }


  return (
    <div>
      <h1>Admin: add a new park</h1>
      <form id="newParkForm" onSubmit={handleSumbit} >
        <Block>
          <Label>Park name</Label>
          <Input type="text" name="park_name" placeholder="Enter park name" onChange={handleChange} value={parkFormState.park_name}></Input>
        </Block>
        <Block>
          <Label>Category</Label>

          <Select name="category_id" onChange={handleChange} defaultValue="">
            <Option disabled hidden value="">Select a category</Option>
            {categories.map((cat => (<Option key={cat.id} value={cat.name}>{capitalize(cat.name)}</Option>)))}
          </Select>
        </Block>
        <Block>
          <Label>Features</Label>
          <Select name="feature_id" onChange={handleChange} defaultValue="">
            <Option disabled hidden value="">Select a feature</Option>
            {features.map((feat => (<Option key={feat.id} value={feat.name}>{capitalize(feat.name)}</Option>)))}
          </Select>
        </Block>
        <Block>
          <Label>Address</Label>
          <Select name="address_id" onChange={handleChange} defaultValue="">
            <Option disabled hidden value="">Select a feature</Option>
            {addresses.map((add => (<Option key={add.id} value={`${add.number} ${add.street}`}>{add.number} {add.street}</Option>)))}
          </Select>
        </Block>
        <Block>
          <Label>Coordinates</Label>
          <Input type="number"  name="latitude" placeholder="Enter park latitude" onChange={handleChange} value={parkFormState.latitude}></Input>
          <Input type="number"  name="longitude" placeholder="Enter park longitude" onChange={handleChange} value={parkFormState.longitude}></Input>
        </Block>
        <Block>
          <Label>Cheese and Wine Pair</Label>
          <Input type="text" name="cheese_pair" placeholder="Add a cheese" onChange={handleChange} value={parkFormState.cheese_pair}></Input>
          <Input type="text" name="wine_pair" placeholder="Add a wine" onChange={handleChange} value={parkFormState.wine_pair}></Input>
        </Block>
        <Block>
          <InputButton type="submit" value="Add a park"></InputButton>
        </Block>
       
      </form>
    </div>
  )
}
