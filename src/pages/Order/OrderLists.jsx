import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import OrderCard from "./OrderCard";

const OrderLists = () => {
	const [address, setAddress] = useState("");
	const [phone, setPhone] = useState("");
	const carts = useSelector((state) => state.carts.data);

	const handleOrder = (e) => {
		// e.preventDefault();
		// const data = {
		// 	products: state.orders.map((order) => ({
		// 		book: order._id,
		// 		quantity: order.qty,
		// 	})),
		// 	phone,
		// 	address,
		// };
		// axios
		// 	.post(`${process.env.REACT_APP_API_URL}/api/v1/orders`, data)
		// 	.then((res) => {
		// 		console.log(res.data);
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	});
	};

	return Object.keys(carts).length ? (
		<div className='container mt-10'>
			<div className='flex text-neutral-500 text-md'>
				<h4 className='w-[60%]'>Product</h4>
				<h4 className='w-[15%]'>Price</h4>
				<h4 className='w-[10%]'>Quantity</h4>
				<h4 className='w-[15%] text-end'>Total</h4>
			</div>
			{carts.products?.map((product, index) => (
				<Fragment key={product._id}>
					<OrderCard product={product} />
					<hr className='mt-7' />
				</Fragment>
			))}
			<div className='flex justify-end mt-7'>
				<h4 className='w-[10%]'>Subtotal</h4>
				<h4 className='w-[15%] text-end'>${carts.subtotal}</h4>
			</div>
			<div className='flex justify-end items-end gap-4 flex-col my-5'>
				<input
					type='text'
					placeholder='Address'
					value={address}
					onChange={(e) => {
						setAddress(e.target.value);
					}}
					className='w-[350px] py-2 shadow-sm rounded-3xl focus:border-0 bg-[#f4f4f4] ring-0 border-0 focus:ring-0 outline-none'
				/>
				<input
					value={phone}
					onChange={(e) => {
						setPhone(e.target.value);
					}}
					type='text'
					placeholder='Phone'
					className='w-[350px] py-2 shadow-sm rounded-3xl focus:border-0 bg-[#f4f4f4] ring-0 border-0 focus:ring-0 outline-none'
				/>
				<button
					className='rounded-3xl bg-red-600 py-3 px-10 mt-4 text-white'
					onClick={handleOrder}
				>
					Confirm Order
				</button>
			</div>
		</div>
	) : null;
};

export default OrderLists;
