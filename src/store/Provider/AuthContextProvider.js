import React, { useReducer } from "react";
import AuthContext from "../Context/AuthContext";

const reducer = (state, action) => {
	switch (action.type) {
		case "STORE":
			return { ...action.data };
		case "ERROR":
			return { ...action.data };
		default:
			return state;
	}
};

const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, {});

	const data = {
		data: state,
		dispatch: (action) => {
			dispatch(action);
		},
	};

	return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
