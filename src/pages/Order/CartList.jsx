import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { postOrders, selectAll } from "../../redux/reducer/orderSlice";
import CartItem from "./CartItem";

const OrderLists = () => {
	const [address, setAddress] = useState("");
	const [phone, setPhone] = useState("");
	const carts = useSelector((state) => state.carts.data);
	const items = useSelector((state) =>
		state.carts?.data?.products?.map((product) => product)
	);
	const orderItem = useSelector((state) => state.order.items);
	const dispatch = useDispatch();

	const handleOrder = () => {
		const products = orderItem.map((item) => ({
			book: item.book._id,
			quantity: item.quantity,
		}));

		dispatch(postOrders({ products, address, phone }))
			.unwrap()
			.then((res) => {
				toast.success(res.data.message)
			})
			.catch((res) => {
				console.log(res);
			});
	};

	return carts.products?.length ? (
		<div className='container mt-10'>
			<div className='flex text-neutral-500 text-md'>
				<h4 className='w-[5%]'>
					<input
						checked={items?.length === orderItem.length}
						onChange={(e) => {
							dispatch(
								selectAll({ checked: e.target.checked, items })
							);
						}}
						id='red-checkbox'
						type='checkbox'
						className='w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
					/>
				</h4>
				<h4 className='w-[45%]'>Product</h4>
				<h4 className='w-[15%]'>Price</h4>
				<h4 className='w-[10%]'>Quantity</h4>
				<h4 className='w-[15%] text-end'>Total</h4>
				<h4 className='w-[10%] text-end'>Action</h4>
			</div>
			{carts.products?.map((product, index) => (
				<Fragment key={product._id}>
					<CartItem product={product} />
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
