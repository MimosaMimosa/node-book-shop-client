import { Fragment, useEffect, useState } from "react";
import BookCard from "./BookCard";
import axios from "axios";

const BestSeller = () => {
	const [books, setBooks] = useState([]);
	const API_URL = process.env.REACT_APP_API_URL;
	useEffect(() => {
		axios.get(`${API_URL}/api/v1/books`).then((res) => {
			setBooks(res.data);
		});
	}, [API_URL]);

	return (
		<div className='bg-pink-soft'>
			<div className='container'>
				<h2 className='text-3xl text-center font-bold p-5'>
					Best Selling Book Ever
				</h2>
				<div className='mt-3'>
					<div className='grid grid-cols-5 gap-5'>
						{books.map((book) => (
							<Fragment key={book._id}>
								<BookCard
									src={book.photo[0].url}
									name={book.name}
									author={book.author.name}
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
