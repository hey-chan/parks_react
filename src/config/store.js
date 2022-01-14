// abstraction
import { createContext, useContext } from "react";

// Done here to keep App.js clean as possible
// Context object
export const StateContext = createContext()

// A hook that wraps useContext automatically
// Returns store and dispatch0
export const useGlobalState = () => useContext(StateContext)

// Allows for us to bring out prop drilling

