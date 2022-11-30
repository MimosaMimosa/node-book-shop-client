import SearchIcon from "@mui/icons-material/Search";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import { Link, useNavigate } from "react-router-dom";
import LogoutModal from "../Modal/LogoutModal";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { logout } from "../../redux/reducer/authSlice";

const TopNavBar = () => {
	const [open, setOpen] = useState(false);
	const carts = useSelector((state) => state.auth.carts);
	const authUser = useSelector((state) => state.auth.user);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleLogout = () => {
		setOpen(true);
	};

	const handleAction = () => {
		setOpen(false);
		dispatch(logout());
		navigate("/");
	};

	return (
		<div className='flex justify-between items-center'>
			<LogoutModal
				show={open}
				setShow={setOpen}
				handleAction={handleAction}
			/>
			<div className='flex items-center'>
				<Link to='/'>
					<h1 className='mr-4 cursor-pointer'>
						<img src='./assets/image/logo.webp' alt='logo' />
					</h1>
				</Link>
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
					<li className='mx-3'>
						<span>FAQ</span>
					</li>
					<li className='mx-3'>
						<span>Order</span>
					</li>
					<li className='relative mx-3'>
						<Link to='/carts'>
							<LocalGroceryStoreOutlinedIcon className='text-xl' />
							<span className='text-xs rounded-[50%] w-[25px] h-[25px] bg-red-500 text-white absolute top-[-15px] left-[20px] flex items-center justify-center'>
								{carts?.products?.length || 0}
							</span>
						</Link>
					</li>
					{authUser.token ? (
						<li className='ml-5'>
							<span>{authUser.name}</span>
						</li>
					) : null}
					{!authUser.token ? (
						<li className='ml-5'>
							<Link
								to='/sign-up'
								className='py-4 px-10 bg-red-600 text-sm text-white rounded-3xl'
							>
								Sign Up
							</Link>
						</li>
					) : (
						<li className='ml-3'>
							<button
								onClick={handleLogout}
								className='py-4 px-10 bg-red-600 text-sm text-white rounded-3xl'
							>
								Log out
							</button>
						</li>
					)}
				</ul>
			</div>
		</div>
	);
};

export default TopNavBar;
