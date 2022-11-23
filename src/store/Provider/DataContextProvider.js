import { useReducer } from "react";
import DataContext from "../Context/DataContext";

const reducer = (state, action) => {
	switch (action.type) {
		case "STORE_BOOKS":
			return { ...state, books: [...action.data] };
		case "STORE_AUTHORS":
			return { ...state, authors: [...action.data] };
		case "STORE_ORDERS":
			return { ...state, orders: [...action.data] };
		case "PLUS_ORDERS":
			return { ...state, orders: [...action.data] };
		case "MINUS_ORDERS":
			return { ...state, orders: [...action.data] };
		case "STORE_CARTS":
			return { ...state, carts: action.data };
		default:
			return state;
	}
};

const DataContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, {
		books: [],
		orders: [],
		authors: [],
		carts: {},
	});
	const data = {
		state,
		dispatch,
	};

	return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataContextProvider;
