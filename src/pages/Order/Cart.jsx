import PageBanner from "../../components/Banner/PageBanner";
import CartList from "./CartList";

const Cart = () => {
	return (
		<>
			<PageBanner title='Add To Cart' />
			<CartList />
		</>
	);
};

export default Cart;
