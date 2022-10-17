const LatestBook = () => {
	const latestOne = {
		backgroundImage: "url(./assets/image/wants-bg1.jpg.webp)",
		backgroundRepeat: "no-repeat",
	};

	const latestTwo = {
		backgroundImage: "url(./assets/image/wants-bg2.jpg.webp)",
		backgroundRepeat: "no-repeat",
	};
	return (
		<div className='container mt-7'>
			<div className='flex justify-between'>
				<div
					className='h-[188px] w-[49%] flex p-10 justify-between items-center'
					style={latestOne}
				>
					<h3 className="text-white text-3xl">The History <br/> of Phipino</h3>
                    <button className="rounded-3xl bg-red-600 py-3 px-10 text-white">View Details</button>
				</div>
				<div
					className='h-[188px] w-[49%] flex p-10 justify-between items-center'
					style={latestTwo}
				>
					<h3 className="text-white text-3xl">Wilma Mumduya</h3>
                    <button className="rounded-3xl bg-red-600 py-3 px-10 text-white">View Details</button>
				</div>
			</div>
		</div>
	);
};

export default LatestBook;
