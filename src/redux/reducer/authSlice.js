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

export const fetchCarts = createAsyncThunk(
	"get/fetchCarts",
	async (url, { rejectWithValue }) => {
		try {
			const res = await axios.get(
				`${process.env.REACT_APP_API_URL}/api/v1/carts`,
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

export const postLogin = createAsyncThunk(
	"post/login",
	async (data, { rejectWithValue }) => {
		try {
			const res = await axios.post(
				`${process.env.REACT_APP_API_URL}/api/v1/auth/login`,
				data
			);
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
	async ({ data }, { rejectWithValue }) => {
		try {
			const res = await axios.post(
				`${process.env.REACT_APP_API_URL}/api/v1/carts`,
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

const authSlice = createSlice({
	name: "auth",
	initialState: {
		user: {},
		pending: null,
		error: null,
		orders: [],
		carts: {},
	},
	reducers: {
		logout: (state) => {
			Cookies.remove("abc_token");
			state.user = {};
			state.carts = {};
			state.orders = [];
		},
		setAuthUser: (state, { payload: { user, token, carts } }) => {
			state.user = { ...user, token };
			if (carts) {
				state.carts = carts;
			}
		},
		selectAll: (state) => {
			const totalCart = state.carts?.products;
			if (state.orders.length === totalCart.length) {
				state.orders = [];
			} else {
				state.orders = totalCart;
			}
		},
		select: (state, { payload: item }) => {
			const index = state.orders.findIndex(
				(selectItem) => selectItem._id === item._id
			);
			if (index !== -1) {
				state.orders.splice(index, 1);
			} else {
				state.orders.push(item);
			}
		},
	},
	extraReducers(builder) {
		builder.addCase(
			postLogin.fulfilled,
			(state, { payload: { user, token, carts } }) => {
				Cookies.set("abc_token", token, {
					expires: 24,
				});
				state.user = { ...user, token };
				if (carts) state.carts = carts;
			}
		);

		builder.addCase(
			fetchCarts.fulfilled,
			(state, { payload: { carts } }) => {
				state.pending = null;
				if (carts) {
					state.carts = carts;
				}
			}
		);

		builder.addCase(fetchCarts.pending, (state) => {
			state.pending = true;
		});

		builder.addCase(fetchCarts.rejected, (state) => {
			state.pending = null;
		});

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
				state.carts = carts;
			}
		);

		builder.addCase(postCarts.rejected, (state) => {
			state.pending = null;
		});

		builder.addCase(
			deleteCartsProduct.fulfilled,
			(
				state,
				{
					payload: { carts },
					meta: {
						arg: { id },
					},
				}
			) => {
				state.pending = null;
				state.carts = carts;
				state.orders = state.orders.filter((order) => order._id !== id);
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

export const { logout, setAuthUser, selectAll, select } = authSlice.actions;

export default authSlice.reducer;
