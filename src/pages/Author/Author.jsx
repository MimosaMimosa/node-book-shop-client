const Author = () => {
	return (
		<>
			<div className='container'>
				<h2 className='text-3xl font-bold text-center mt-10'>
					Authors
				</h2>
				<div className='grid grid-cols-4 gap-5 mt-5'>
					<div class='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
						<a href='#'>
							<img
								class='rounded-t-lg'
								src='https://flowbite.com/docs/images/blog/image-1.jpg'
								alt=''
							/>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Author;
