import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout, postLogin } from "../../redux/reducer/authSlice";

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState({});
	const location = useLocation();
	const dispatch = useDispatch();

	useEffect(() => {
		/* eslint-disable */
		dispatch(logout());
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors({});
		dispatch(postLogin({ email, password }))
			.unwrap()
			.then(() => {
				const intendedUrl = location.state?.from?.pathName;
				toast.success("Login Successfully");
				navigate(intendedUrl ? intendedUrl : "/");
			})
			.catch((error) => {
				const status = error.response.status;
				if (status === 422) {
					setErrors(error.response.data);
				}
				if (status === 401) {
					toast.error("Invalid email or password");
				}
			});
	};

	return (
		<>
			<div className='h-[100vh] flex justify-center items-center py-5'>
				<div className='w-[50%] shadow-xl py-7'>
					<h2 className='text-3xl font-bold text-center'>Login</h2>
					<h3 className='text-sm text-center mt-5 font-thin'>
						Enter Login details to get access
					</h3>
					<div className='flex justify-center'>
						<form
							autoComplete='off'
							className='w-[90%]'
							onSubmit={(e) => {
								handleSubmit(e);
							}}
						>
							<label className='mt-8 block' htmlFor='email'>
								<label htmlFor='email' className='text-md'>
									Username Or Email Address
								</label>
								<div className='border-2 border-gray-3 px-5 py-3 mt-1'>
									<input
										id='email'
										type='text'
										className='outline-none border-0 focus:ring-0 w-full p-0'
										placeholder='Username / Email Address'
										onChange={(e) =>
											setEmail(e.target.value)
										}
									/>
								</div>
								<div className='text-red-600 mt-1 text-xs'>
									{errors.email || null}
								</div>
							</label>
							<label className='mt-8 block' htmlFor='password'>
								<label htmlFor='password' className='text-md'>
									Password
								</label>
								<div className='border-2 border-gray-3 px-5 py-3 mt-1'>
									<input
										id='password'
										type='password'
										className='outline-none border-0 focus:ring-0 w-full p-0'
										placeholder='Password'
										onChange={(e) =>
											setPassword(e.target.value)
										}
									/>
								</div>
								<div className='text-red-600 mt-1 text-xs'>
									{errors.password || null}
								</div>
							</label>
							<div className='mt-8 flex justify-between'>
								<div className='flex items-center'>
									<input
										type='checkbox'
										className='checked:bg-red-600 mr-2'
									/>
									Keep Me Logged In
								</div>
								<div>
									<span className='text-red-600'>
										Forgot Password?
									</span>
								</div>
							</div>
							<div className='mt-8 flex justify-between items-center'>
								<div className='flex'>
									Don’t have an account?
									<Link
										to='/sign-up'
										className='text-red-600 mx-2'
									>
										Sign Up
									</Link>
									here
								</div>
								<div>
									<button
										type='submit'
										className='bg-red-600 py-5 px-10 text-white'
									>
										Login
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
