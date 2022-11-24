import axios from "axios";
import { useContext } from "react";
import { useOutletContext } from "react-router-dom";
import DataContext from "../../store/Context/DataContext";

const OrderCard = ({ product }) => {
	const { dispatch } = useContext(DataContext);
	const token = useOutletContext();
	let handlePlusTimeOut;
	let handleMinusTimeOut;

	const handleMinus = (quantity, id) => {
		console.log(quantity);
		if (quantity - 1 === 0) {
			return false;
		}
		if (handlePlusTimeOut) {
			clearTimeout(handleMinusTimeOut);
		}
		handleMinusTimeOut = axios
			.post(
				`${process.env.REACT_APP_API_URL}/api/v1/carts`,
				{
					book: id,
					quantity: -1,
				},
				{
					headers: {
						authorization: `$1|${token}`,
					},
				}
			)
			.then((res) => {
				dispatch({
					type: "STORE_CARTS",
					data: res.data.cart,
				});
			})
			.catch((res) => {
				console.error(res);
			});
	};
	const handlePlus = (id) => {
		if (handlePlusTimeOut) {
			clearTimeout(handlePlusTimeOut);
		}
		handlePlusTimeOut = setTimeout(() => {
			axios
				.post(
					`${process.env.REACT_APP_API_URL}/api/v1/carts`,
					{
						book: id,
						quantity: 1,
					},
					{
						headers: {
							authorization: `$1|${token}`,
						},
					}
				)
				.then((res) => {
					dispatch({
						type: "STORE_CARTS",
						data: res.data.cart,
					});
				})
				.catch((res) => {
					console.error(res);
				});
		}, 500);
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
									handleMinus(
										product.quantity,
										product.book
									);
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

export default OrderCard;
