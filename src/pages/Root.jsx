import axios from "axios";
import Cookies from "js-cookie";
import { useContext, useEffect } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import NewLetter from "../components/NewLetter/NewLetter";
import DataContext from "../store/Context/DataContext";

const Root = () => {
	const { state, dispatch } = useContext(DataContext);

	useEffect(() => {
		const token = Cookies.get("abc_token");
		if (!Object.keys(state.carts).length && token) {
			axios
				.get(`${process.env.REACT_APP_API_URL}/api/v1/carts`, {
					headers: {
						authorization: `$1|${token}`,
					},
				})
				.then((res) => {
					dispatch({
						type: "STORE_CARTS",
						data: res.data.cart,
					});
				})
				.catch((res) => {
					console.error(res);
				});
		}
		/* eslint-disable */
	}, []);

	return (
		<>
			<ScrollRestoration
				getKey={(location) => {
					const path = "/categories";
					return path === location.pathname
						? location.pathname
						: location.key;
				}}
			/>
			<Navbar />
			<Outlet />
			<NewLetter />
			<Footer />
		</>
	);
};

export default Root;
