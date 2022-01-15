// import categories from "../data/categories";

const stateReducer = (state, action) => {
  switch(action.type){
    case "setParkPosts": {
      // Returns everything in globalState
      return{
        ...state,
        parkPosts: action.data
      }
    }

    case "setCategories": {
      return{
        ...state,
        categories: action.data
      }
    }

    case "setFeatures": {
      return{
        ...state,
        features: action.data
      }
    }

    
    case "setAddresses": {
      return{
        ...state,
        addresses: action.data
      }
    }

    case "setSignedInUser": {
      return{
        ...state,
        signedInUser: action.data
      }
    }

    case "removeSignedInUser": {
      return{
        ...state,
        signedInUser: null
      }
    }

    
    default: 
      return state;
  }
}

export default stateReducer