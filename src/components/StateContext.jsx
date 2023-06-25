import  { createContext, useReducer } from "react";

const initialState = {
  formData: []
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_FORM_DATA":
      return { ...state, formData: [...state.formData, action.payload] };
    default:
      return state;
  }
}

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};