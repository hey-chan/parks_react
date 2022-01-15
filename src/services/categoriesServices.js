import categories from "../data/categories";
import features from "../data/features";
// import addresses from "../data/addresses";


export const getCategories = () => {
  return new Promise((resolve, reject) => {
    resolve(categories)
  })
}

export const getFeatures = () => {
  return new Promise((resolve, reject) => {
    resolve(features)
  })
}

// export const getAddresses = () => {
//   return new Promise((resolve, reject) => {
//     resolve(addresses)
//   })
// }