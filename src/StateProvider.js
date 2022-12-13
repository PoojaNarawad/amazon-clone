// Set Data Layer
//We Need This To Track The basket

import React, {createContext, useContext, useReducer} from 'react';

//This Is The Data Layer
export const StateContext = createContext();

//Build A Provide To Wrap a app
export const StateProvider = ({reducer, initialState, children}) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
);

//This is how we use it inside of components
export const useStateValue = () => useContext(StateContext);
