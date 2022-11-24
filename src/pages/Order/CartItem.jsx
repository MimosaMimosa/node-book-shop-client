import { useRef } from "react";
import { useDispatch } from "react-redux";
import { postCarts } from "../../redux/reducer/cartSlice";

const CartItem = ({ product }) => {
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
					url: `${process.env.REACT_APP_API_URL}/api/v1/carts`,
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
					url: `${process.env.REACT_APP_API_URL}/api/v1/carts`,
					data: {
						book: id,
						quantity: 1,
					},
				})
			);
		}, 300);
	};
	return (
		<>
			<div className='flex items-center mt-5'>
				<div className='w-[60%] flex items-center'>
					<img
						className='object-contain w-[200px]'
						alt={product.book.name}
						src={product.book.image[0].url}
					/>
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
			</div>
		</>
	);
};

export default CartItem;
