import Cookies from "js-cookie";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageBanner from "../../components/Bannder/PageBanner";
import { fetchCarts, logout } from "../../redux/reducer/authSlice";
import CartList from "./CartList";

const Cart = () => {
	const carts = useSelector((state) => state.auth.carts);
	const dispatch = useDispatch();
	useEffect(() => {
		const token = Cookies.get("abc_token");
		const user = Cookies.get("abc_user");
		if (!Object.keys(carts).length && token && user) {
			dispatch(fetchCarts())
				.unwrap()
				.catch((error) => {
					if (error.response.status === 401) {
						dispatch(logout);
					}
				});
		}
	});
	return (
		<>
			<PageBanner title='Add To Cart' />
			<CartList />
		</>
	);
};

export default Cart;
