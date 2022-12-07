import axios from "axios";
import Cookies from "js-cookie";
import { json, redirect } from "react-router-dom";
import store from "../redux/store/store";

export const login = ({ request }) => {
	const url = new URL(request.url);
	if (url.searchParams.get("reset")) {
		Cookies.remove("abc_token");
	}
	if (Cookies.get("abc_token")) {
		return redirect("/");
	}
	return true;
};

export const isLogin = async () => {
	const user = store.getState().auth.user;
	const token = Cookies.get("abc_token");
	if (token && !Object.keys(user).length) {
		try {
			const res = await axios.post(
				`${process.env.REACT_APP_API_URL}/api/v1/auth/is-login`,
				{},
				{
					headers: {
						authorization: `$1|${token}`,
					},
				}
			);
			return json(
				{ user: res.data.user, carts: res.data.carts, token },
				{ status: res.data.status }
			);
		} catch (error) {
			throw json(error.response, {
				status: error.response.status,
			});
		}
	}

	return true;
};

export const userOrders = async () => {
	const token = Cookies.get("abc_token");
	if (token) {
		try {
			const res = await axios.get(
				`${process.env.REACT_APP_API_URL}/api/v1/orders`,
				{
					headers: {
						authorization: `$1|${token}`,
					},
				}
			);
			return json(
				{ orders: res.data.orders },
				{ status: res.data.status }
			);
		} catch (error) {
			throw json(error.response, {
				status: error.response.status,
			});
		}
	}

	return true;
};
