// import posts from '../data/posts';
// import parks from '../data/parks';

import picnicAPI from '../config/api';

// ALL PARKS
export const getParks = async() => {
  try {
    const response = await picnicAPI.get('/parks')
    // console.log("response: " + response);
    console.log(response);
    return response.data;
  } catch (err) {
    console.log("Get Park Posts " + err)
    throw err
  }
}


// TO DISPLAY ONE PARK
export const getAPark = async (id) => {
  try {
    const response = await picnicAPI.get('/parks/' + id)
    console.log(response);
    return response.data;
  } catch (err) {
    console.log("Get Park: " + err)
    throw err
  }
}

/////// PARK COMMENTS; DISPLAY
export const getPosts = async (park_id) => {
  try {
    // const response = await picnicAPI.get('/posts')
    const response = await picnicAPI.get('/parks/' + park_id + '/comments')
    // const response = await picnicAPI.get('/parks/' + park_id + '/comments')
    console.log(response);
    return response.data;
  } catch (err) {
    console.log("Get Posts " + err)
    
  }
}

// FAKE DUMMY DATA
// export const getPost = (posts, id) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(posts.sort(post => post.id === parseInt(id)))
//     }, 500)
//   })
// }


// FOR DELETION OF EACH COMMENT
export const getPost = async (id) => {
  try {
    // const response = await picnicAPI.get('/posts/' + id)
    // const response = await picnicAPI.get('/parks/' + id + '/comments/' + id)
    const response = await picnicAPI.get('/parks/comments/' + id) // ?
    // const response = await picnicAPI.get('/review')
    console.log(response);
    return response.data;
  } catch (err) {
    console.log("Get Post " + err)
    throw err
  }
}


// CREATE A NEW COMMENT
export const createAComment = async (park_id) => {
  try {
    const response = await picnicAPI.post('/parks/' + park_id + '/comments')
    console.log(response);
    return response.data;
  } catch (err) {
    console.log("Get Comment: " + err)
    throw err
  }
}

// CREATE A NEW PARK(ONLY ACCESSIBLE BY ADMIN)
export const createNewPark = async (parkPostObject) => {
  try {
    const response = await picnicAPI.post('/parks/new', parkPostObject)
    return response.data;
  } catch (err) {
    console.log("Create New Park Post " + err)
    throw err
  }
}

// PARK ADDRESS
export const createParkAddress = async (id) => {
  try {
    const response = await picnicAPI.post('/parks/' + id + '/address' )
    console.log(response);
    return response.data
  } catch(err){
    throw err
  }
}



// UPDATE PARK (ONLY ACCESSIBLE BY ADMIN)
// WORK IN PROGRESS
export const updateAPark = async(parkObject) => {
  try {
    const response = await picnicAPI.put('/parks/:id', parkObject)
    return response.data;
  } catch (err) {
    console.log("Updated park:  " + err)
    throw err
  }
}

// DELETE A PARK
// WORK IN PROGRESS
export const deleteAPark = async(id) => {
  try {
    const response = await picnicAPI.delete('/parks/' + id + '/address')
    return response.data;
  } catch (err) {
    console.log("Deleted park:  " + err)
    throw err
  }
}