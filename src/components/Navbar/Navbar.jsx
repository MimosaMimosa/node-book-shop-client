import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";

import TopNavBar from "./TopNavBar";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
	return (
		<div>
			<div className='container'>
				<TopNavBar />
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
							preventScrollReset={true}
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
