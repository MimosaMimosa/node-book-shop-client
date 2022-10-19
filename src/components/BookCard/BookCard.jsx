import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
const BookCard = ({src,name,author}) => {
	return (
		<div>
			<div className='border-2'>
				<img
					src={src}
					alt='book'
					className='w-[100%]'
				/>
				<div className='px-3 py-5 bg-white'>
					<span className='block'>{name}</span>
					<span className='text-gray-400 mt-1 block'>{author}</span>
					<div className='flex justify-between items-center'>
						<div className='mt-1'>
							<StarOutlinedIcon style={{ color: "orange" }} />
							<StarOutlinedIcon style={{ color: "orange" }} />
							<StarOutlinedIcon style={{ color: "orange" }} />
							<StarOutlinedIcon style={{ color: "orange" }} />
							<StarHalfOutlinedIcon style={{ color: "orange" }} />
							<div className='mt-1 text-xs'>
								(<span style={{ color: "orange" }}>120</span>{" "}
								<span className='text-gray-400 '>Review</span>)
							</div>
						</div>
						<div>
							<span className='text-red-500 text-xl font-bold'>
								$50
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookCard;
