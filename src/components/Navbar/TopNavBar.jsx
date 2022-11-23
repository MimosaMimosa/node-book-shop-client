import SearchIcon from "@mui/icons-material/Search";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import DataContext from "../../store/Context/DataContext";
import Cookies from "js-cookie";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../store/Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import LogoutModal from "../Modal/LogoutModal";

const TopNavBar = () => {
	const [open, setOpen] = useState(false);
	const { state: user, dispatch } = useContext(AuthContext);
	const {
		state: { carts },
	} = useContext(DataContext);
	const navigate = useNavigate();
	useEffect(() => {
		const user = Cookies.get("abc_user");
		if (user) {
			dispatch({ type: "STORE", data: JSON.parse(user) });
		}
		// eslint-disable-next-line
	}, []);

	const handleLogout = () => {
		setOpen(true);
	};

	const handleAction = () => {
		setOpen(false);
		Cookies.remove("abc_token");
		Cookies.remove("abc_user");
		dispatch({ type: "STORE", data: {} });
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
							<span className='text-xs text-white rounded-[50%] w-[25px] h-[25px] bg-red-500 text-white absolute top-[-15px] left-[20px] flex items-center justify-center'>
								{carts.products?.length
									? carts.products.length
									: 0}
							</span>
						</Link>
					</li>
					{Object.keys(user).length ? (
						<li className='mx-3 ml-5'>
							<span>{user.name}</span>
						</li>
					) : null}
					{!user.name ? (
						<li>
							<Link
								to='/sign-up'
								className='py-4 px-10 bg-red-600 text-sm text-white rounded-3xl'
							>
								Sign Up
							</Link>
						</li>
					) : (
						<li>
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
