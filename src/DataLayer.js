import React, { createContext, useContext, useReducer} from 'react';

//preparing the data layer
export const DataLayerContext = createContext();

export const DataLayer = ({reducer, initialState, children}) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
);

//hooks which allow us to pull and push information
export const useDataLayerValue = () => useContext(DataLayerContext);
