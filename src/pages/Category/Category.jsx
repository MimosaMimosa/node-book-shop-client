import axios from "axios";
import { Fragment, useEffect, useMemo, useState } from "react";
import PageBanner from "../../components/Bannder/PageBanner";
import BookCard from "../../components/BookCard/BookCard";
import FilterRadioGroup from "../../components/Filter/FilterRadioGroup";

const Category = () => {
	const API_URL = process.env.REACT_APP_API_URL;
	const pageBanner = useMemo(() => <PageBanner title="Book Category" />, []);
	const [lists, setLists] = useState([]);
	const [books, setBooks] = useState([]);
	const booksRoute = `${API_URL}/api/v1/books`;
	const [search, setSearch] = useState({
		route: booksRoute,
		category: "",
		author: "",
	});

	const handleCategoryChange = (value) => {
		setSearch((prev) => {
			return { ...prev, category: value };
		});
	};

	const handleAuthorChange = (value) => {
		setSearch((prev) => {
			return { ...prev, author: value };
		});
	};

	useEffect(() => {
		Promise.all([
			axios.get(`${API_URL}/api/v1/categories`),
			axios.get(`${API_URL}/api/v1/authors`),
		]).then((res) => {
			setLists(() => {
				return res.map((result) => result.data);
			});
		});
	}, [API_URL]);

	useEffect(() => {
		const source = axios.CancelToken.source();
		axios
			.get(
				`${search.route}?category=${search.category}&author=${search.author}`,
				{
					cancelToken: source.token,
				}
			)
			.then((res) => {
				setBooks(res.data);
			})
			.catch((error) => {
				console.log(error);
			});

		return () => {
			source.cancel();
		};
	}, [search.route, search.category, search.author]);

	return (
		<>
			{pageBanner}
			<div className='flex container mt-10 justify-between'>
				<div className='w-[33.3333333333%] self-stretch'>
					<div className='border-2 border-gray-100 p-10'>
						<div className='mb-5'>
							<FilterRadioGroup
								handleChange={handleCategoryChange}
								lists={lists}
								index={0}
								title='Filter by Genres'
							/>
						</div>
						<div className='mb-5'>
							<FilterRadioGroup
								handleChange={handleAuthorChange}
								lists={lists}
								index={1}
								title='Filter by Author Name'
							/>
						</div>
					</div>
				</div>
				<div className='w-[64.6667%]'>
					<div className='flex justify-end mb-3'>
						<div className='rounded-3xl border-2 border-gray-200 py-2 px-10 cursor-pointer'>
							Browse by popularity
						</div>
					</div>
					<div className='grid grid-cols-3 gap-4'>
						{books.map((book) => (
							<Fragment key={book._id}>
								<BookCard
									id={book._id}
									src={book.photo[0].url}
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
				</div>
			</div>
		</>
	);
};

export default Category;
