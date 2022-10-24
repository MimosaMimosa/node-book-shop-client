import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import SubscriptionsRoundedIcon from "@mui/icons-material/SubscriptionsRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
const Footer = () => {
	return (
		<div>
			<div className='container lg:flex lg:justify-between lg:space-x-4 mt-20'>
				<div className='lg:w-1/4'>
					<h3 className='mb-8 text-xl'>
						<img
							src='./assets/image/xlogo2_footer.png.pagespeed.ic.wksTOD3AoG.webp'
							alt=''
						/>
					</h3>
					<div className='text-gray-500'>
						Get the breathing space now, and we’ll extend your term
						at the other end year for go.
					</div>
					<div className='mt-5 flex'>
						<div className='mr-3 cursor-pointer w-[40px] hover:bg-gray-200 h-[40px] flex items-center justify-center rounded-[50%] border-2 border-gray-200'>
							<FacebookRoundedIcon />
						</div>
						<div className='mr-3 cursor-pointer w-[40px] hover:bg-gray-200 h-[40px] flex items-center justify-center rounded-[50%] border-2 border-gray-200'>
							<SubscriptionsRoundedIcon />
						</div>
						<div className='mr-3 cursor-pointer w-[40px] hover:bg-gray-200 h-[40px] flex items-center justify-center rounded-[50%] border-2 border-gray-200'>
							<SendRoundedIcon />
						</div>
					</div>
				</div>
				<div className='lg:w-1/4'>
					<h3 className='mb-8 text-xl'>Book Category</h3>
					<div className='flex flex-col space-y-4'>
						<div>
							<a
								className='hover:underline text-gray-500'
								href=''
							>
								History
							</a>
						</div>
						<div>
							<a
								className='hover:underline text-gray-500'
								href=''
							>
								Horror - Thriller
							</a>
						</div>
						<div>
							<a
								className='hover:underline text-gray-500'
								href=''
							>
								Love Stories
							</a>
						</div>
						<div>
							<a
								className='hover:underline text-gray-500'
								href=''
							>
								Science Fiction
							</a>
						</div>
						<div>
							<a
								className='hover:underline text-gray-500'
								href=''
							>
								Business
							</a>
						</div>
					</div>
				</div>

				<div className='lg:w-1/4 mt-[60px]'>
					<div className='flex flex-col space-y-4'>
						<div>
							<a
								className='hover:underline text-gray-500'
								href=''
							>
								Biography
							</a>
						</div>
						<div>
							<a
								className='hover:underline text-gray-500'
								href=''
							>
								Astrology
							</a>
						</div>
						<div>
							<a
								className='hover:underline text-gray-500'
								href=''
							>
								Digital Marketing
							</a>
						</div>
						<div>
							<a
								className='hover:underline text-gray-500'
								href=''
							>
								Software Development
							</a>
						</div>
						<div>
							<a
								className='hover:underline text-gray-500'
								href=''
							>
								Ecommerce
							</a>
						</div>
					</div>
				</div>

				<div className='lg:w-1/4'>
					<h3 className='mb-8 text-xl'>Site Map</h3>
					<div className='flex flex-col space-y-4'>
						<div>
							<a
								className='hover:underline text-gray-500'
								href=''
							>
								Home
							</a>
						</div>
						<div>
							<a
								className='hover:underline text-gray-500'
								href=''
							>
								About Us
							</a>
						</div>
						<div>
							<a
								className='hover:underline text-gray-500'
								href=''
							>
								FAQs
							</a>
						</div>
						<div>
							<a
								className='hover:underline text-gray-500'
								href=''
							>
								Blog
							</a>
						</div>
						<div>
							<a
								className='hover:underline text-gray-500'
								href=''
							>
								Contact
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className='container mt-6 border-t border-light bg-primary/50 py-6 text-center text-sm'>
				Styled with <a className='text-blue-500 mx-2'>Tailwincss</a> |{" "}
				<a className='text-blue-500 mx-2'>React</a> & Developed with{" "}
				<a
					href='https://github.com/HsuMonLynn'
					className='mx-2 text-red-600'
				>
					Hsu
				</a>
				|
				<a
					href='https://github.com/KyiMyatNoeSoe7'
					className='mx-2 text-red-600'
				>
					Kyi
				</a>
				|
				<a
					href='https://github.com/KyiMyatNoeSoe7'
					className='mx-2 text-red-600'
				>
					Chan
				</a>
				|
				<a
					href='https://github.com/WaiYanLin71'
					className='mx-2 text-red-600'
				>
					Wai
				</a>{" "}
				<a href="https://colorlib.com" className="mr-2 text-blue-500">Credit design to colorlib.</a>
				<FavoriteRoundedIcon style={{ color: "red" }} />
			</div>
		</div>
	);
};

export default Footer;
