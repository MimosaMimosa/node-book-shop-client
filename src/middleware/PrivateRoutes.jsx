import Cookies from "js-cookie";
import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoutes = () => {
	const location = useLocation();
	const { user } = JSON.parse(Cookies.get("node_book_shop") || "{}");
	return user.token ? (
		<Outlet />
	) : (
		<Navigate to='/login' replace={true} state={{ from: location }} />
	);
};

export default PrivateRoutes;
