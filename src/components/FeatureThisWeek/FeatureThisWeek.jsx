import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
const FeatureThisWeek = () => {
	const imag = "./assets/image/xbest-books1.jpg.pagespeed.ic.a3LkFxg89O.webp";
    const imag2 ="./assets/image/xad.jpg.pagespeed.ic.WvnALPgj6F.jfif";
	return (
		<div className='container flex justify-between pt-20'>
			<div className='w-[966px] mr-[30px]'>
                <div className="flex justify-between mb-5">
                    <h2 className='text-3xl'>
                        Featured This Week
                    </h2> 
                    <span className='text-lg cursor-pointer pb-3  border-b-2'>
                        view all
                    </span>
                </div>
            <div className='bg-red-600 flex items-center py-6 pl-[50px]'>
				<div className='mr-5'>
					<img src={imag} alt='fav' />
				</div>
				<div className='text-white ml-3'>
					<h2 className='text-3xl font-bold'>The Range of Dragons</h2>
					<span className='text-xs block mt-1'>By Evan Winter</span>
					<span className='block mt-5 text-3xl'>$50.00</span>
					<div className='flex items-center mt-3'>
						<StarOutlinedIcon style={{ color: "white" }} />
						<StarOutlinedIcon style={{ color: "white" }} />
						<StarOutlinedIcon style={{ color: "white" }} />
						<StarOutlinedIcon style={{ color: "white" }} />
						<StarHalfOutlinedIcon style={{ color: "white" }} />
						<span className='text-xs ml-1'>(120 Review)</span>
					</div>
                    <button className='mt-10 rounded-3xl border py-3 px-10'>
                        View Details
                    </button>
				</div>
			</div>
            </div>
            <div>
                <img src={imag2} className='w-full' alt="" />
            </div>
		</div>
	);
};

export default FeatureThisWeek;
