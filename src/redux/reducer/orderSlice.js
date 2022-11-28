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
		items: [],
	},
	reducers: {
		selectAll: (state, { payload: { checked, items } }) => {
			state.items = [];
			if (checked) {
				state.items = items;
			}
		},
		select: (state, { payload: item }) => {
			const index = state.items.findIndex(
				(selectItem) => selectItem._id === item._id
			);
			if (index !== -1) {
				state.items.splice(index, 1);
			} else {
				state.items.push(item);
			}
		},
	},
});

export const { selectAll, select } = orderSlice.actions;

export default orderSlice.reducer;
