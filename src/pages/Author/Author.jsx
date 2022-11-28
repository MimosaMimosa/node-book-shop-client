import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Author = () => {
	const [data, setData] = useState({});
	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_URL}/api/v1/authors`)
			.then((res) => {
				setData(res.data);
			})
			.catch((res) => {
				console.log(res);
			});
	}, []);
	return (
		<div>
			<div className='container bg-red-600 border border-white p-5  rounded-lg'>
				<h2 className='text-3xl text-white font-bold text-left'>
					Authors
				</h2>

				<div className='grid grid-cols-5 gap-10 mt-5'>
					{data.authors?.map((author) => {
						return (
							<Fragment key={author._id}>
								<div className='w-full'>
									<a
										href='#'
										className='text-center flex justify-center'
									>
										<div
											style={{
												backgroundImage: `url(${author.image.url})`,
												backgroundRepeat: "no-repeat",
												backgroundPosition: "center",
												backgroundSize: "cover",
											}}
											className='bg-white rounded-full h-[200px] w-[200px]'
										></div>
									</a>
								</div>
							</Fragment>
						);
					})}
				</div>
				{/* {data.authors?.length ? (
					<div className='flex justify-end mt-10'>
						<Link
							to='/authors'
							class='inline-flex items-center px-4 py-2 text-sm font-medium text-red-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
						>
							Previous
						</Link>

						<Link
							to='/authors'
							href='#'
							class='inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-red-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
						>
							Next
						</Link>
					</div>
				) : null} */}
			</div>
		</div>
	);
};

export default Author;
