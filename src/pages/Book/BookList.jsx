import {  useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchBooks } from "../../redux/reducer/bookSlice";
import BookCard from "../../components/Book/BookCard";

const BookList = () => {
	const [searchParams] = useSearchParams();
	const q = searchParams.get("q");
	const dispatch = useDispatch();
	const searchTimeOut = useRef();
	// const pending = useSelector((state) => state.books.pending);
	const books = useSelector((sate) => sate.books.value.data);

	useEffect(() => {
		/* eslint-disable */
		searchTimeOut.current = setTimeout(() => {
			dispatch(fetchBooks({ params: { q } }));
		}, 500);
		return () => {
			clearTimeout(searchTimeOut.current);
		};
	}, [q]);
	return (
		<div className="container">
			<div className='grid grid-cols-5 gap-4'>
				{books?.map((book) => (
					<BookCard
						key={book._id}
						id={book._id}
						author={book.author.name}
						src={book.image[0].url}
						name={book.name}
						price={book.price}
					/>
				))}
			</div>
		</div>
	);
};

export default BookList;
