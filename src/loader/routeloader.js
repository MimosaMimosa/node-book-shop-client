import Cookies from "js-cookie";
import { redirect } from "react-router-dom";

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
