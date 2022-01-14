import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Block, Input, InputButton, Label } from '../styled-components'


export const NewPark = (props) => {
  // Initial state; what our form will look like when loading this page
  const navigate = useNavigate();
  const initialState = {
    park_name: "",
    category: "",
    features: "",
    address: "",
    latitude: "",
    longitude: ""
  }
  const {addNewPark} = props
  const [parkFormState, setParkFormState] = useState(initialState);

  
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
          <Input type="text" name="category" placeholder="Select park category" onChange={handleChange} value={parkFormState.category}></Input>
        </Block>
        <Block>
          <Label>Features</Label>
          <Input type="text" name="features" placeholder="Select park features" onChange={handleChange} value={parkFormState.feature}></Input>
        </Block>
        <Block>
          <Label>Address</Label>
          <Input type="text" name="address" placeholder="Select park address" onChange={handleChange} value={parkFormState.address}></Input>
        </Block>
        <Block>
          <Label>Coordinates</Label>
          <Input type="text" name="latitude" placeholder="Enter park latitude" onChange={handleChange} value={parkFormState.parseFloat}></Input>
          <Input type="text" name="longitude" placeholder="Enter park longitude" onChange={handleChange} value={parkFormState.longitude}></Input>
        </Block>
        <Block>
          <InputButton type="submit" value="Add a park"></InputButton>
        </Block>
       
      </form>
    </div>
  )
}
