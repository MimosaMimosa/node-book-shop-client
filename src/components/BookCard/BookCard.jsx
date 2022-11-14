import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarHalfOutlinedIcon from "@mui/icons-material/StarHalfOutlined";
import { Link } from "react-router-dom";
const BookCard = ({ id, src, name, author, price }) => {
	return (
		<>	
			<Link to={`/books/${id}`} className='border-2 cursor-pointer block'>
				<img
					src={src}
					alt='book'
					className='w-[100%] h-[380px] object-cover' 
				/>
				<div className='px-3 py-7 bg-white'>
					<span className='block'>{name.length > 20 ? name.substr(0,20) + '...' :name}</span>
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
							$<span>{price.toFixed(2)}</span>
							</span>
						</div>
					</div>
				</div>
			</Link>
		</>
	);
};

export default BookCard;
