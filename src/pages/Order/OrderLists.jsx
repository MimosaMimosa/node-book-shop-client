import { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataContext from "../../store/Context/DataContext";
import OrderCard from "./OrderCard";

const OrderLists = () => {
	const { state } = useContext(DataContext);
	const [subtotal, setSubtotal] = useState(0);

	useEffect(() => {
		const subTotal = state.orders
			.map((od) => od.price * od.qty)
			.reduce((a, b) => a + b, 0);
		setSubtotal(subTotal);
	}, [state.orders]);

	return state.orders.length ? (
		<div className='container mt-10'>
			<div className='flex text-neutral-500 text-md'>
				<h4 className='w-[60%]'>Product</h4>
				<h4 className='w-[15%]'>Price</h4>
				<h4 className='w-[10%]'>Quantity</h4>
				<h4 className='w-[15%] text-end'>Total</h4>
			</div>
			{state.orders.map((book, index) => (
				<Fragment key={book._id}>
					<OrderCard book={book} />
					<hr className='mt-7' />
				</Fragment>
			))}
			{state.orders.length ? (
				<>
					<div className='flex justify-end mt-7'>
						<h4 className='w-[10%]'>Subtotal</h4>
						<h4 className='w-[15%] text-end'>
							${subtotal.toFixed(2)}
						</h4>
					</div>
					<hr className='mt-7' />
					<div className='flex justify-end mt-7'>
						<h4 className='w-[10%]'>Shipping</h4>
						<div className='w-[15%] text-end'>
							<div className='flex items-center justify-end'>
								<span>Flat Rate: $5.00</span>
								<span className='ml-2'>
									<input
										type='radio'
										className='text-red-500 focus:ring-0'
										defaultChecked
									/>
								</span>
							</div>
							<div className='flex items-center justify-end mt-3'>
								<span>Free Shipping</span>
								<span className='ml-2'>
									<input
										type='radio'
										className='text-red-500 focus:ring-0'
									/>
								</span>
							</div>
							<div className='flex items-center justify-end mt-3'>
								<span>Flat Rate: $10.00</span>
								<span className='ml-2'>
									<input
										type='radio'
										className='text-red-500 focus:ring-0'
									/>
								</span>
							</div>
							<div className='flex items-center justify-end mt-3'>
								<span>Local Delivery: $2.00</span>
								<span className='ml-2'>
									<input
										type='radio'
										className='text-red-500 focus:ring-0'
									/>
								</span>
							</div>
						</div>
					</div>
					<div className='flex justify-end text-md cursor-pointer'>
						<div className='mt-4'>
							<div className='rounded-3xl border bg-gray-100 w-[300px] pl-4 py-2'>
								Yangon
							</div>
						</div>
					</div>
					<div className='flex justify-end text-md cursor-pointer'>
						<div className='mt-4'>
							<div className='rounded-3xl border bg-gray-100 w-[300px] pl-4 py-2'>
								Select State
							</div>
						</div>
					</div>
					<div className='flex justify-end text-md cursor-pointer'>
						<div className='mt-4'>
							<div className='bg-gray-100 w-[300px] pl-4 py-2'>
								Select State
							</div>
						</div>
					</div>
					<div className='text-end'>
						<button className='rounded-3xl bg-red-600 py-3 px-10 mt-4 text-white'>
							Update Detail
						</button>
					</div>
					<hr className='mt-7' />
					<div className="mt-4">
						<Link to="/categories" className='rounded-3xl bg-red-600 py-3 px-10 text-white'>
							Continue Shopping
						</Link>
					</div>
				</>
			) : null}
		</div>
	) : null;
};

export default OrderLists;
