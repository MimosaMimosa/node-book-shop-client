import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AlertModal from "../../components/Modal/AlertModal";
import {
	deleteCartsProduct,
	postCarts,
	select,
} from "../../redux/reducer/authSlice";

const CartItem = ({ product }) => {
	const [open, setOpen] = useState(false);

	const orders = useSelector((state) => state.auth.orders);
	const loader = useSelector((state) => state.auth.pending);

	const deleteId = useRef();
	const cancelPlusPromise = useRef();
	const cancelMinusPromise = useRef();

	const dispatch = useDispatch();

	const handleMinus = (quantity, id) => {
		if (quantity === 1) {
			return;
		}
		if (cancelMinusPromise.current) {
			clearTimeout(cancelMinusPromise.current);
		}
		cancelMinusPromise.current = setTimeout(() => {
			dispatch(
				postCarts({
					data: {
						book: id,
						quantity: -1,
					},
				})
			);
		}, 300);
	};

	const handlePlus = async (id) => {
		if (cancelPlusPromise.current) {
			clearTimeout(cancelPlusPromise.current);
		}
		cancelPlusPromise.current = setTimeout(() => {
			dispatch(
				postCarts({
					data: {
						book: id,
						quantity: 1,
					},
				})
			);
		}, 300);
	};

	const handleDelete = (e) => {
		setOpen(true);
		deleteId.current = e.target.id;
	};

	const handleAction = () => {
		dispatch(deleteCartsProduct({ id: deleteId.current }));
	};

	return (
		<>
			{open ? (
				<AlertModal
					open={open}
					setOpen={setOpen}
					loader={loader}
					handleAction={handleAction}
				/>
			) : null}
			<div className='flex items-center mt-5'>
				<div className='w-[5%]'>
					<input
						onChange={() => {
							dispatch(select(product));
						}}
						checked={
							orders?.find((order) => order._id === product._id)
								? true
								: false
						}
						id='red-checkbox'
						type='checkbox'
						className='w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
					/>
				</div>
				<div className='w-[45%] flex items-center'>
					<Link to={`/books/${product.book._id}`}>
						<img
							className='object-contain w-[200px]'
							alt={product.book.name}
							src={product.book.image[0].url}
						/>
					</Link>
					<span className='ml-10 text-xl font-[200]'>
						{product.book.name}
					</span>
				</div>
				<div className='w-[15%]'>
					$<span>{product.book.price.toFixed(2)}</span>
				</div>
				<div className='w-[10%]'>
					<div className='flex'>
						<div className='border self-stretch px-4 flex items-center'>
							{product.quantity}
						</div>
						<div className='flex flex-col'>
							<button
								className='block border text-xl px-3'
								onClick={() => {
									handlePlus(product.book._id);
								}}
							>
								+
							</button>
							<button
								className='block border text-xl px-3'
								onClick={() => {
									handleMinus(product.quantity, product.book);
								}}
							>
								-
							</button>
						</div>
					</div>
				</div>
				<div className='w-[15%] text-end'>
					$
					<span>
						{(product.book.price * product.quantity).toFixed(2)}
					</span>
				</div>
				<div className='w-[10%] text-end'>
					<button
						id={product._id}
						onClick={handleDelete}
						className='bg-red-600 rounded-3xl hover:font-bold text-white px-5 py-1 text-md hover:bg-white hover:text-red-600 border-2 border-red-600'
					>
						Delete
					</button>
				</div>
			</div>
		</>
	);
};

export default CartItem;
