import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducer/authSlice";
import orderReducer from "../reducer/orderSlice";
import bookReducer from "../reducer/bookSlice";

export default configureStore({
	reducer: {
		auth: authReducer,
		orders: orderReducer,
		books:bookReducer,
	},
});
