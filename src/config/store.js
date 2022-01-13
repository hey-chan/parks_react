import { createContext, useContext } from "react";

//our context object
export const StateContext = createContext()
// a hook that wraps useContext
export const useGlobalState = () => useContext(StateContext)