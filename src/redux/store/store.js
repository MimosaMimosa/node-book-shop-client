import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducer/authSlice";
import orderReducer from "../reducer/orderSlice";

export default configureStore({
	reducer: {
		auth: authReducer,
		orders: orderReducer,
	},
});
