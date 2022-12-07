import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooks = createAsyncThunk(
	"fetch/books",
	async ({ url, params }, { rejectWithValue }) => {
		let fullUrl = url
			? url
			: process.env.REACT_APP_API_URL + "/api/v1/books/advanced/search";
		try {
			const res = await axios.get(fullUrl, { params });
			return res.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

const bookSlice = createSlice({
	name: "books",
	initialState: {
		value: {},
		pending: false,
	},
	reducers: {},
	extraReducers(builder) {
		builder.addCase(
			fetchBooks.fulfilled,
			(state, { payload: { books } }) => {
				state.pending = false;
				state.value = books;
			}
		);

		builder.addCase(fetchBooks.pending, (state) => {
			state.pending = true;
		});

		builder.addCase(fetchBooks.rejected, (state) => {
			state.pending = false;
		});
	},
});

export default bookSlice.reducer;
