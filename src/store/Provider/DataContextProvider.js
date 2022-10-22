import { useReducer } from "react";
import DataContext from "../Context/DataContext";

const reducer = (state, action) => {
	switch (action.type) {
		case "STORE_BOOKS":
			const data = { ...state };
			state.books = action.data;
			return data;
		case "STORE_AUTHORS":
			return { ...state, authors: [...action.data] };
		case "STORE_ORDERS":
			return { ...state, orders: [...action.data] };
		case "PLUS_ORDERS":
			return { ...state, orders: [...action.data] };
		case "MINUS_ORDERS":
			return { ...state, orders: [...action.data] };
		default:
			return state;
	}
};

const DataContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, {
		books: [],
		orders: [],
		authors: [],
	});
	const data = {
		state,
		dispatch,
	};

	return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataContextProvider;
