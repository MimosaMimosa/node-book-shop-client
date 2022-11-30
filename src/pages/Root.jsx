import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	Outlet,
	ScrollRestoration,
	useRouteLoaderData,
} from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import NewLetter from "../components/NewLetter/NewLetter";
import { setAuthUser } from "../redux/reducer/authSlice";

const Root = () => {
	const { user, carts, token } = useRouteLoaderData("root");
	const dispatch = useDispatch();
	const authUser = useSelector(state => state.auth.user.name)

	useEffect(() => {
		/* eslint-disable */
		if(!authUser && user){
			dispatch(setAuthUser({ user, carts, token }));
		}
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
