import axios from "axios";
import {  useEffect, useMemo, useState } from "react";
import PageBanner from "../../components/Banner/PageBanner";
import FilterBook from "../../components/Filter/FilterBook";
import FilterRadioGroup from "../../components/Filter/FilterRadioGroup";



const Category = () => {
	const pageBanner = useMemo(() => <PageBanner title='Book Category' />, []);
	const [categories, setCategories] = useState([]);
	const [authors, setAuthors] = useState([]);
	const [search, setSearch] = useState({ category: "", author: "" });

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
			axios.get(`${process.env.REACT_APP_API_URL}/api/v1/categories`),
			axios.get(
				`${process.env.REACT_APP_API_URL}/api/v1/authors/samples`
			),
		]).then((res) => {
			const [categories, authors] = res;
			setAuthors(authors.data.authors);
			setCategories(categories.data.categories);
		});
	}, []);

	return (
		<>
			{pageBanner}
			<div className='flex container mt-10 justify-between'>
				<div className='w-[30.3333333333%] self-stretch'>
					<div className='border-2 border-gray-100 p-10'>
						<div className='mb-5'>
							<FilterRadioGroup
								handleChange={handleCategoryChange}
								lists={categories}
								title='Filter by Genres'
							/>
						</div>
						<div className='mb-5'>
							<FilterRadioGroup
								handleChange={handleAuthorChange}
								lists={authors}
								title='Filter by Author Name'
							/>
						</div>
					</div>
				</div>
				<div className='w-[67.6667%]'>
					<div className='flex justify-end mb-3'>
						<div className='rounded-3xl border-2 border-gray-200 py-2 px-10 cursor-pointer'>
							Browse by popularity
						</div>
					</div>
					<FilterBook search={search}/>
				</div>
			</div>
		</>
	);
};

export default Category;
