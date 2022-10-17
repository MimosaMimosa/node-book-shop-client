const NewLetter = () => {
    const image = './assets/image/section-bg1.jpg.webp'
    const bgImage = {
        backgroundImage : `url(${image})`,
        backgroundRepeat :'no-repeat',
    }
	return (
		<div className='container place-content-center text-center mt-10'>
            <div  style={bgImage} className="p-20 text-white">
            <h1 className='text-4xl font-serif'>Join Newsletter</h1>
			<p className='px-56 py-7'>
				Lorem started its journey with cast iron (CI) products in 1980.
				The initial main objective was to ensure pure water and
				affordable irrigation.
			</p>
			<div className='flex flex-col justify-center items-center'>
				<form className='w-full max-w-sm'>
					<div className='flex items-center py-2'>
						<input
							className='rounded-3xl bg-white pl-4 w-full text-gray-700 mr-3 py-3 px-2 focus:outline-none'
							type='text'
							placeholder='Enter Your Email'
							aria-label='Full name'
						/>
						<button
							className='rounded-full flex-shrink-0 bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 text-sm border-4 text-white py-2 px-3'
							type='button'
						>
							Subscribe
						</button>
					</div>
				</form>
			</div>
            </div>
		</div>
	);
};

export default NewLetter;
