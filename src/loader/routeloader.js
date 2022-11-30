import axios from "axios";
import Cookies from "js-cookie";
import { json, redirect } from "react-router-dom";

export const login = ({ request }) => {
	const url = new URL(request.url);
	if (url.searchParams.get("reset")) {
		return true;
	}
	try {
		const user = JSON.parse(Cookies.get("abc_user"));
		if (user && Cookies.get("abc_token")) {
			return redirect("/");
		}
		throw Error("Token Error");
	} catch (error) {
		return true;
	}
};

export const isLogin = async () => {
	const token = Cookies.get("abc_token");
	if (token) {
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
