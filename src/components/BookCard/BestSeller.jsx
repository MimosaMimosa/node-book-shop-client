import { useEffect, useState } from "react";
import BookCard from "./BookCard";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

const BestSeller = () => {
	const [books, setBooks] = useState([]);
	useEffect(() => {
		const API_URL = process.env.REACT_APP_API_URL;
		axios
			.get(`${API_URL}/api/v1/books`)
			.then((res) => {
				setBooks(res.data.books);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div className='bg-pink-soft'>
			<div className='container py-10'>
				<h2 className='text-3xl	font-bold pb-4'>
					Best Selling Book Ever
				</h2>
				<div className='mt-3'>
					<Swiper
						spaceBetween={20}
						slidesPerView={5}
						modules={[Autoplay]}
						autoplay={{
							delay: 3000,
							disableOnInteraction: false,
						}}
						loop={true}
					>
						{books.map((book) => (
							<SwiperSlide key={book._id}>
								<BookCard
									id={book._id}
									src={book.image[0].url}
									name={book.name}
									author={book.author.name}
									price={book.price}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default BestSeller;
