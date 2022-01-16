const stateReducer = (state, action) => {
    switch(action.type){
        case "setParkPosts": {
            return {
                ...state,
                parkPosts: action.data
            }
        }

        case "setUsers": {
            return{
                ...state,
                users: action.data
            }
        }
        
        case "setCategories": {
            return {
                ...state,
                categories: action.data
            }
        }

        case "setFeatures": {
            return {
                ...state,
                features: action.data
            }
        }

        case "setAddresses": {
            return {
                ...state,
                addresses: action.data
            }
        }

        case "setSignedInUser" : {
            return {
                ...state,
                signedInUser: action.data
            }
        }
        case "removeLoggedInUser" : {
            return {
                ...state,
                signedInUser: null
            }
        }

        case "setJWT" : {
            sessionStorage.setItem('jwt', action.data);
            return {
                ...state,
                jwt: action.data
            }
        }

        case "removeJWT" : {
            sessionStorage.removeItem('jwt');
            return {
                ...state,
                jwt: null
            }
        }
        default:
            return state;
    }

}

export default stateReducer