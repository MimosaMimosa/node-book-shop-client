import SearchIcon from "@mui/icons-material/Search";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
const Navbar = () => {
	return (
		<div>
			<div className='flex container justify-between items-center'>
				<div className='bg-white p-3'>
					<div className='flex justify-between rounded-3xl p-3 border-3xl border'>
						<input
							type='text'
							className='w-[350px] outline-none'
							placeholder='Search Book By Name Or Author....'
						/>
						<SearchIcon />
					</div>
				</div>
				<div>
					<ul className='flex'>
						<li className="mx-3">
							<span>FAQ</span>
						</li>
						<li className="mx-3">
							<span>Order</span>
						</li>
						<li className="mx-3">
							<span></span>
						</li>
						<li className='relative mx-3'>
							<span>
								<LocalGroceryStoreOutlinedIcon className="text-xl" />
								<span className='text-xs text-white rounded-[50%] w-[25px] h-[25px] bg-red-500 text-white absolute top-[-15px] left-[20px] flex items-center justify-center'>
									0
								</span>
							</span>
						</li>
					</ul>
				</div>
			</div>
			<nav className='navbar bg-pink-soft'>
				<ul className='flex justify-center p-3'>
					<li className='mx-5 text-lg'>
						<span>Home</span>
					</li>
					<li className='mx-5 fw-bold text-lg'>
						<span>Category</span>
					</li>
					<li className='mx-5 fw-bold text-lg'>
						<span>About</span>
					</li>
					<li className='mx-5 fw-bold text-lg'>
						<span>Pages</span>
					</li>
					<li className='mx-5 fw-bold text-lg'>
						<span>Blog</span>
					</li>
					<li className='mx-5 fw-bold text-lg'>
						<span>Contact</span>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
