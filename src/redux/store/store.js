import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducer/cartSlice";

export default configureStore({
	reducer: {
		carts: cartReducer,
	},
});
