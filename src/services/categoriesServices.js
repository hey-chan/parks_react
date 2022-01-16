import picnicAPI from "../config/api";

export const getCategories = async () => {
  try {
    const response = await picnicAPI.get("/categories");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getFeatures = async () => {
  try {
    const response = await picnicAPI.get("/features");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAddresses = async () => {
  try {
    const response = await picnicAPI.get("/addresses");
    return response.data;
  } catch (error) {
    throw error;
  }
};
