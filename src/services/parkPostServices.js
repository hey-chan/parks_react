import picnicAPI from "../config/api";

export const getParks = async () => {
  try {
    const response = await picnicAPI.get("/parks");
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getBlogPost = async (id) => {
  try {
    const response = await picnicAPI.get("/parks/" + id);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const createNewPark = async (postObject) => {
  try {
    const response = await picnicAPI.post("/parks/new", postObject);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
