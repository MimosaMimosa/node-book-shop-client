import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

export const postOrders = createAsyncThunk(
	"post/Orders",
	async (data, { rejectWithValue }) => {
		try {
			const res = await axios.post(
				`${process.env.REACT_APP_API_URL}/api/v1/orders`,
				data,
				{
					headers: {
						authorization: `$1|${Cookies.get("abc_token")}`,
					},
				}
			);
			return res.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

const orderSlice = createSlice({
	name: "orders",
	initialState: {
		data: [],
	},
	reducers: {
		store: (state, { payload: { orders } }) => {
			state.data = orders;
		},
		remove: (state) => {
			state.data = [];
		},
	},
});

export const { store, remove } = orderSlice.actions;

export default orderSlice.reducer;
