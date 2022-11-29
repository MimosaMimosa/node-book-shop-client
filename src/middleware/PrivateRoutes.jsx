import Cookies from "js-cookie";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoutes = () => {
	const location = useLocation();
	const token = Cookies.get("abc_token");
	return token ? (
		<Outlet context={token} />
	) : (
		<Navigate
			to='/login?reset=true'
			state={{ from: location }}
		/>
	);
};

export default PrivateRoutes;
