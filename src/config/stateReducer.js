const stateReducer = (state, action) => {
  switch(action.type){
    case "setParkPosts": {
      // Returns everything in globalState
      return{
        ...state,
        parkPosts: action.data
      }
    }

    default: 
      return state;
  }
}

export default stateReducer