const Banner = () => {
	const bander = {
		backgroundImage: "url(./assets/image/bander.webp)",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
	};
	return (
		<div className='bg-pink-soft'>
			<div className='container place-content-center text-center items-center'>
				<div style={bander} className='p-40 text-white'>
					<button className='rounded-3xl bg-white py-2 px-5 text-gray-400 text-sm mb-6'>
						Science Fiction
					</button>
					<h1 className='text-6xl font-serif leading-[70px]'>
						The History
						<br />
						of Phipino
					</h1>
					<button className='rounded-3xl bg-red-600 py-3 px-10 mt-8'>
						Browse Store
					</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
