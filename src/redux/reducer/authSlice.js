import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

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

const authSlice = createSlice({
	name: "auth",
	initialState: {
		user: {},
	},
	reducers: {},
	extraReducers(builder) {
		builder.addCase(
			postLogin.fulfilled,
			(state, { payload: { user, token } }) => {
				Cookies.set("abc_user", JSON.stringify(user));
				Cookies.set("abc_token", token);
				state.user = { ...user, token };
			}
		);
	},
});

export default authSlice.reducer;
