import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import SuccessModal from "../../components/Modal/SuccessModal";
import { selectAll, postOrders } from "../../redux/reducer/authSlice";
import CartItem from "./CartItem";

const OrderLists = () => {
	const [address, setAddress] = useState("");
	const [phone, setPhone] = useState("");
	const carts = useSelector((state) => state.auth.carts);
	const orders = useSelector((state) => state.auth.orders);
	const dispatch = useDispatch();
	const [error, setError] = useState({});
	const [open, setOpen] = useState(false);

	const handleOrder = () => {
		const products = orders.map((item) => ({
			book: item.book._id,
			quantity: item.quantity,
		}));

		dispatch(postOrders({ products, address, phone }))
			.unwrap()
			.then(() => {
				setOpen(true);
			})
			.catch((error) => {
				const getError = error.response.data;
				if (getError.products) {
					toast.error("Item is not allowed to be empty.");
				}
				setError(getError);
			});
	};

	return (
		<>
			<SuccessModal open={open} setOpen={setOpen} />
			{carts?.products?.length ? (
				<div className='container mt-10'>
					<div className='flex text-neutral-500 text-md'>
						<h4 className='w-[5%]'>
							<input
								checked={
									carts?.products?.length === orders?.length
								}
								onChange={(e) => {
									dispatch(selectAll());
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
						<div>
							<input
								type='text'
								placeholder='Address'
								value={address}
								onChange={(e) => {
									setAddress(e.target.value);
								}}
								className='w-[350px] py-2 shadow-sm rounded-3xl focus:border-0 bg-[#f4f4f4] ring-0 border-0 focus:ring-0 outline-none'
							/>
							{error.address ? (
								<div className='text-red-600 ml-2 my-1 text-xs'>
									{error.address}
								</div>
							) : null}
						</div>
						<div>
							<input
								value={phone}
								onChange={(e) => {
									setPhone(e.target.value);
								}}
								type='text'
								placeholder='Phone'
								className='w-[350px] py-2 shadow-sm rounded-3xl focus:border-0 bg-[#f4f4f4] ring-0 border-0 focus:ring-0 outline-none'
							/>
							{error.phone ? (
								<div className='text-red-600 my-1 ml-2 text-xs'>
									{error.phone}
								</div>
							) : null}
						</div>

						<button
							className='rounded-3xl bg-red-600 py-3 px-10 mt-4 text-white'
							onClick={handleOrder}
						>
							Confirm Order
						</button>
					</div>
				</div>
			) : null}
		</>
	);
};

export default OrderLists;
