import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducer/cartSlice";
import authReducer from "../reducer/authSlice";
import orderReducer from "../reducer/orderSlice";

export default configureStore({
	reducer: {
		carts: cartReducer,
		auth: authReducer,
		order: orderReducer,
	},
});
