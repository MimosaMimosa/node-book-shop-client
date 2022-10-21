import { useContext, useEffect, useState } from "react";
import DataContext from "../../store/Context/DataContext";
import OrderCard from "./OrderCard";

const OrderLists = () => {
	const [orders, setOrders] = useState([]);
	const { state } = useContext(DataContext);

	useEffect(() => {
		const formatOrders = [];
		state.orders.forEach((order) => {
			let found = formatOrders.find((fOrder) => fOrder._id === order._id);
			if (found) {
				found.qty += 1;
			} else {
				formatOrders.push({ ...order, qty: 1});
			}
		});
		setOrders(formatOrders);
	}, [state.orders]);

	return orders.length ? (
		<div className='container mt-10'>
			<div className='flex text-neutral-500 text-md'>
				<h4 className='w-[60%]'>Product</h4>
				<h4 className='w-[15%]'>Price</h4>
				<h4 className='w-[15%]'>Quantity</h4>
				<h4 className='w-[10%]'>Total</h4>
			</div>
			{orders.map((book) => (
				<OrderCard
					key={book._id}
                    book={book}
				/>
			))}
		</div>
	) : null;
};

export default OrderLists;
