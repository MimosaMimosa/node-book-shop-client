import { useContext } from "react";
import DataContext from "../../store/Context/DataContext";


const OrderCard = ({ book }) => {
	const { state, dispatch } = useContext(DataContext);

    const handleMinus = (orders,book)=> {
        let newOrder = [...orders];
        let index = newOrder.findIndex(order => order._id  === book._id);
        if(index !== -1){
            if(newOrder[index].qty === 1) {
				newOrder.splice(index,1);
			}else{
				newOrder[index].qty  -= 1;
			}
        }
        dispatch({ type: "MINUS_ORDERS", data: newOrder });
    }

	const handlePlus = (orders,book) => {
		let newOrder = [...orders];
        let found = newOrder.find(order => order._id  === book._id);
		if(found){
			found.qty += 1;
		}
        dispatch({ type: "PLUS_ORDERS", data: newOrder });
	}
	return (
		<div className='flex items-center mt-5'>
			<div className='w-[60%] flex items-center'>
				<img
					className='object-contain w-[200px]'
					alt={book.name}
					src={`${process.env.REACT_APP_API_URL}/${book.image[0].url}`}
				/>
				<span className='ml-10 text-xl font-[200]'>
					Minimalistic shop for multipurpose use
				</span>
			</div>
			<div className='w-[15%]'>
				$<span>{book.price.toFixed(2)}</span>
			</div>
			<div className='w-[10%]'>
				<div className='flex'>
					<div className='border self-stretch px-4 flex items-center'>
						{book.qty}
					</div>
					<div className='flex flex-col'>
						<button
							className='block border text-xl px-3'
							onClick={() => {
								handlePlus(state.orders,book);
							}}
						>
							+
						</button>
						<button
							className='block border text-xl px-3'
							onClick={() => {
								handleMinus(state.orders,book)
							}}
						>
							-
						</button>
					</div>
				</div>
			</div>
			<div className='w-[15%] text-end'>
				$<span>{(book.price * book.qty).toFixed(2)}</span>
			</div>
		</div>
	);
};

export default OrderCard;
