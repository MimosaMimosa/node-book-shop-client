import { Fragment, useEffect, useState } from "react";
import BookCard from "./BookCard";
import axios from "axios";

const BestSeller = () => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:4000/api/v1/books").then((res) => {
			setBooks(res.data);
		});
	}, []);

	return (
		<div className='bg-pink-soft'>
			<div className='p-5 container'>
				<h2 className='text-3xl text-center  fw-bold'>
					Best Selling Book Ever
				</h2>
				<div className='mt-3'>
					<div className='grid grid-cols-5 gap-4'>
						{books.map((book) => (
							<Fragment key={book._id}>
								<BookCard
									src={book.photo[0].url}
									name={book.name}
									author={book.author}
								/>
							</Fragment>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default BestSeller;
