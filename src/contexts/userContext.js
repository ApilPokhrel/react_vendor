import React, { createContext, useReducer } from "react";

const initialState = {
  user_info: {
    name: "John Doe",
    email: "john@mailinator.com",
  },
};

export const UserContext = createContext(initialState);
export const UserContextProvider = ({ children }) => {
  const [state] = useReducer({}, initialState);

  return (
    <UserContext.Provider
      value={{
        user_info: state.user_info,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
