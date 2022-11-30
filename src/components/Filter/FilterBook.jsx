import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import BookCard from "../Book/BookCard";
import BookCardSkeleton from "../Skeleton/BookCardSkeleton";

const FilterBook = ({ search }) => {
	const [books, setBooks] = useState([]);
	const [loader, setLoader] = useState(true);

	useEffect(() => {
		const source = axios.CancelToken.source();
		axios
			.get(
				`${process.env.REACT_APP_API_URL}/api/v1/books?author=${search.author}&category=${search.category}&limit=6`,
				{
					cancelToken: source.token,
				}
			)
			.then((res) => {
				setBooks(res.data.books);
				setLoader(false);
			})
			.catch((error) => {
				if (!error.code === "ERR_CANCELED") {
					setLoader(false);
				}
			});

		return () => {
			source.cancel();
		};
	}, [search.category, search.author]);
	return (
		<>
			{!loader ? (
				<Fragment>
					<div className='grid grid-cols-3 gap-4'>
						{books.map((book) => (
							<Fragment key={book._id}>
								<BookCard
									id={book._id}
									src={book.image[0].url}
									name={book.name}
									author={book.author.name}
									price={book.price}
								/>
							</Fragment>
						))}
					</div>
					{(books.length || null) && (
						<div className='flex justify-center'>
							<button className='mt-10 rounded-[100px] font-bold text-md hover:bg-red-600 hover:text-white border py-4 border-2 border-red-600 text-red-600 px-[50px]'>
								Browse More
							</button>
						</div>
					)}
				</Fragment>
			) : (
				<div className='grid grid-cols-3 gap-4'>
					<BookCardSkeleton value={6} />
				</div>
			)}
		</>
	);
};

export default FilterBook;
