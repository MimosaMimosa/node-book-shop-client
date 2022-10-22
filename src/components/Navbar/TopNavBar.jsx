import SearchIcon from "@mui/icons-material/Search";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import DataContext from "../../store/Context/DataContext";
import Cookies from "js-cookie";
import { useContext, useEffect, useMemo, useState } from "react";
import AuthContext from "../../store/Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import ModalPortal from "../Modal/ModalPortal";
import LogoutModal from "../Modal/LogoutModal";

const TopNavBar = () => {
	const [open, setOpen] = useState(false);
	const { state: auth, dispatch } = useContext(AuthContext);
	const { state: data } = useContext(DataContext);
	const navigate = useNavigate();
	useEffect(() => {
		const authCookie = Cookies.get("node_book_shop");
		if (authCookie) {
			dispatch({ type: "STORE", data: JSON.parse(authCookie) });
		}
		// eslint-disable-next-line
	}, []);

	const orderCount = useMemo(() => {
		return data.orders.filter((item, index, array) => {
			return (
				index ===
				array.findIndex((foundItem) => foundItem._id === item._id)
			);
		}).length;
	}, [data.orders]);

	const handleLogout = () => {
		setOpen(true)
	};

	const handleAction = () => {
		setOpen(false);
		Cookies.remove('node_book_shop');
		dispatch({type:'STORE',data:{}});
		navigate('/')
	}

	return (
		<div className='flex justify-between items-center'>
			<ModalPortal>
				<LogoutModal show={open} setShow={setOpen} handleAction={handleAction}/>
			</ModalPortal>
			<div className='flex items-center'>
				<h1 className='mr-4'>
					<img src='./assets/image/logo.webp' alt='logo' />
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
					{!auth.user ? (
						<li className='ml-5'>
							<Link
								to='/sign-up'
								className='py-4 px-10 bg-red-600 text-sm text-white rounded-3xl'
							>
								Sign Up
							</Link>
						</li>
					) : (
						<li className='ml-5'>
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
