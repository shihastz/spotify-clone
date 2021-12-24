import React, { createContext, useContext, useReducer} from 'react';

//preparing the data layer
export const StateContext = createContext();

export const StateProvider = ({ initialState, reducer, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//hooks which allow us to pull information
export const useStatevalue = () => useContext(StateContext);
