import { Cookie } from "@mui/icons-material";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import NewLetter from "../components/NewLetter/NewLetter";
import { fetchCarts } from "../redux/reducer/cartSlice";

const Root = () => {
	const dispatch = useDispatch();
	const carts = useSelector((state) => state.carts.data);
	useEffect(() => {
		if (Cookies.get("abc_token") && !carts.length) {
			dispatch(
				fetchCarts(`${process.env.REACT_APP_API_URL}/api/v1/carts`)
			);
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
