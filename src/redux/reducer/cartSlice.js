import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

export const fetchCarts = createAsyncThunk(
	"get/fetchCarts",
	async (url, { rejectWithValue }) => {
		try {
			const res = await axios.get(url, {
				headers: {
					authorization: `$1|${Cookies.get("abc_token")}`,
				},
			});
			return res.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const deleteCartsProduct = createAsyncThunk(
	"delete/deleteCartsProduct",
	async (data, { rejectWithValue }) => {
		try {
			const res = await axios.delete(
				`${process.env.REACT_APP_API_URL}/api/v1/carts/product/${data.id}`,
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

export const postCarts = createAsyncThunk(
	"post/postCarts",
	async ({ url, data }, { rejectWithValue }) => {
		try {
			const res = await axios.post(url, data, {
				headers: {
					authorization: `$1|${Cookies.get("abc_token")}`,
				},
			});
			return res.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const cartSlice = createSlice({
	name: "cart",
	initialState: {
		data: [],
		pending: null,
		errors: null,
	},
	reducers: {},
	extraReducers(builder) {
		builder.addCase(
			fetchCarts.fulfilled,
			(state, { payload: { carts } }) => {
				state.pending = null;
				if (carts) {
					state.data = carts;
				}
			}
		);

		builder.addCase(fetchCarts.pending, (state) => {
			state.pending = true;
		});

		builder.addCase(
			fetchCarts.rejected,
			(
				state,
				{
					payload: {
						response: { status },
					},
				}
			) => {
				state.pending = null;
			}
		);

		/**
		 * post carts
		 */

		builder.addCase(postCarts.pending, (state) => {
			state.pending = true;
		});

		builder.addCase(
			postCarts.fulfilled,
			(state, { payload: { carts } }) => {
				state.pending = null;
				state.data = carts;
			}
		);

		builder.addCase(postCarts.rejected, (state) => {
			state.pending = null;
		});

		builder.addCase(
			deleteCartsProduct.fulfilled,
			(state, { payload: { carts } }) => {
				state.pending = null;
				state.data = carts;
			}
		);

		builder.addCase(deleteCartsProduct.pending, (state) => {
			state.pending = true;
		});

		builder.addCase(deleteCartsProduct.rejected, (state) => {
			state.pending = null;
		});
	},
});

export default cartSlice.reducer;
