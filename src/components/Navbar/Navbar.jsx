import SearchIcon from "@mui/icons-material/Search";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import { useContext, useMemo } from "react";
import AuthContext from "../../store/Context/AuthContext";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import DataContext from "../../store/Context/DataContext";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
	const { state: auth } = useContext(AuthContext);
	const { state: data } = useContext(DataContext);

	const orderCount = useMemo(() => {
	 return	data.orders.filter((item, index, array) => {
			return (
				index ===
				array.findIndex((foundItem) => foundItem._id === item._id)
			);
		}).length;
	}, [data.orders]);

	return (
		<div className='container'>
			<div className='flex justify-between items-center'>
				<div className='flex items-center'>
					<h1 className='mr-4'>
						<img src='./assets/image/logo.webp' alt='' />
					</h1>
					<div className='bg-white p-3'>
						<div className='flex w-[350px] justify-between items-center rounded-3xl p-1 border-3xl border'>
							<input
								type='text'
								className='w-[300px] outline-none border-0 focus:ring-0'
								placeholder='Search Book By Name Or Author....'
							/>
							<span className='mr-2'>
								<SearchIcon />
							</span>
						</div>
					</div>
				</div>
				<div>
					<ul className='flex items-center'>
						{Object.keys(auth).length ? (
							<li className='mx-3'>
								<span>{auth.user.name}</span>
							</li>
						) : null}
						<li className='mx-3'>
							<span>FAQ</span>
						</li>
						<li className='mx-3'>
							<span>Order</span>
						</li>
						<li className='relative mx-3'>
							<Link to='/orders'>
								<LocalGroceryStoreOutlinedIcon className='text-xl' />
								<span className='text-xs text-white rounded-[50%] w-[25px] h-[25px] bg-red-500 text-white absolute top-[-15px] left-[20px] flex items-center justify-center'>
									{orderCount}
								</span>
							</Link>
						</li>
						<li className='ml-5'>
							<Link
								to='/sign-up'
								className='py-4 px-10 bg-red-600 text-sm text-white rounded-3xl'
							>
								Sign Up
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<nav className='navbar bg-pink-soft'>
				<ul className='flex justify-center p-3'>
					<li className='mx-5 text-lg'>
						<Link
							to='/'
							className='cursor-pointer hover:text-red-600'
						>
							Home
						</Link>
					</li>
					<li className='mx-5 text-lg'>
						<Link
							to='/categories'
							className='cursor-pointer hover:text-red-600'
						>
							Category
						</Link>
					</li>
					<li className='mx-5 text-lg'>
						<span className='cursor-pointer hover:text-red-600'>
							About
						</span>
					</li>
					<li className='mx-5 text-lg'>
						<Menu
							as='div'
							className='relative inline-block text-left'
						>
							<div>
								<Menu.Button className='hover:text-red-600 inline-flex w-full justify-center rounded-md text-lg  font-medium  shadow-sm focus:outline-none  focus:ring-offset-2 focus:ring-offset-gray-100'>
									Pages
								</Menu.Button>
							</div>

							<Transition
								as={Fragment}
								enter='transition ease-out duration-100'
								enterFrom='transform opacity-0 scale-95'
								enterTo='transform opacity-100 scale-100'
								leave='transition ease-in duration-75'
								leaveFrom='transform opacity-100 scale-100'
								leaveTo='transform opacity-0 scale-95'
							>
								<Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
									<div className='py-1'>
										<Menu.Item>
											{({ active }) => (
												<a
													href='#'
													className={classNames(
														active
															? "bg-gray-100 text-gray-900"
															: "text-gray-700",
														"block px-4 py-2 text-sm"
													)}
												>
													Login
												</a>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<a
													href='#'
													className={classNames(
														active
															? "bg-gray-100 text-gray-900"
															: "text-gray-700",
														"block px-4 py-2 text-sm"
													)}
												>
													Support
												</a>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<a
													href='#'
													className={classNames(
														active
															? "bg-gray-100 text-gray-900"
															: "text-gray-700",
														"block px-4 py-2 text-sm"
													)}
												>
													License
												</a>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<button
													type='submit'
													className={classNames(
														active
															? "bg-gray-100 text-gray-900"
															: "text-gray-700",
														"block w-full px-4 py-2 text-left text-sm"
													)}
												>
													Sign out
												</button>
											)}
										</Menu.Item>
									</div>
								</Menu.Items>
							</Transition>
						</Menu>
					</li>
					<li className='mx-5 fw-bold text-lg'>
						<span className='cursor-pointer hover:text-red-600'>
							Blog
						</span>
					</li>
					<Link to='/contact' className='mx-5 fw-bold text-lg'>
						<span className='cursor-pointer hover:text-red-600'>
							Contact
						</span>
					</Link>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
