import {  useLayoutEffect } from "react";
import {  Outlet, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";


const AuthMiddleWare = () => {
    const navigate = useNavigate();
    const location = useLocation();
	const auth = Cookies.get("node_book_shop");
	useLayoutEffect(() => {
		const authUser = () => {
			const { user } = JSON.parse(auth || "{}");
			if (!user) {
                navigate('/login')
                window.wantedUrl = location.pathname;
			}
		};
		authUser();
         // eslint-disable-next-line
	}, []);
	return (
		<>
			<Outlet />
		</>
	);
};

export default AuthMiddleWare;
