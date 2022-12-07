import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirmation, setPasswordConfirmation] = useState("");
	const [errors, setErrors] = useState({});

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post(`${process.env.REACT_APP_API_URL}/api/v1/users`, {
				name,
				email,
				password,
				password_confirmation: passwordConfirmation,
			})
			.then(() => {
				toast.success("Register Successfully");
				navigate("/login");
			})
			.catch((error) => {
				setErrors(error.response.data)
				console.log(error);
			});
	};

	return (
		<div className='h-[100vh] flex justify-center items-center py-5'>
			<div className='w-[50%] shadow-xl py-7'>
				<h2 className='text-3xl font-bold text-center'>Sign Up</h2>
				<h3 className='text-sm text-center mt-5 font-thin'>
					Create your account to get full access
				</h3>
				<div className='flex justify-center'>
					<form
						action=''
						className='w-[90%]'
						onSubmit={(e) => handleSubmit(e)}
					>
						<label className='mt-8 block' htmlFor='name'>
							<label htmlFor='name' className='text-md'>
								Full Name
							</label>
							<div className='border-2 border-gray-3 px-5 py-3 mt-1'>
								<input
									id='name'
									type='text'
									className='outline-none border-0 focus:ring-0 w-full p-0'
									placeholder='Enter full name'
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
							<div className='text-red-600 mt-1 text-xs'>
								{errors.name || null}
							</div>
						</label>
						<label className='mt-8 block' htmlFor='email'>
							<label htmlFor='email' className='text-md'>
								Email Address
							</label>
							<div className='border-2 border-gray-3 px-5 py-3 mt-1'>
								<input
									id='email'
									type='text'
									className='outline-none border-0 focus:ring-0 w-full p-0'
									placeholder='Enter email address'
									onChange={(e) => setEmail(e.target.value)}
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
									placeholder='Confirm password'
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>
							</div>
							<div className='text-red-600 mt-1 text-xs'>
								{errors.password || null}
							</div>
						</label>
						<label className='mt-8 block' htmlFor='confirm'>
							<label htmlFor='confirm' className='text-md'>
								Confirm Password
							</label>
							<div className='border-2 border-gray-3 px-5 py-3 mt-1'>
								<input
									onChange={(e) => {
										setPasswordConfirmation(e.target.value);
									}}
									id='confirm'
									type='password'
									className='outline-none border-0 focus:ring-0 w-full p-0'
									placeholder='Password'
								/>
							</div>
							<div className='text-red-600 mt-1 text-xs'>
								{errors.password_confirmation || null}
							</div>
						</label>
						<div className='mt-8 flex justify-between items-center'>
							<div className='flex'>
								Already have an account?
								<Link to='/login' className='text-red-600 mx-2'>
									Login
								</Link>
								here
							</div>
							<div>
								<button
									type='submit'
									className='bg-red-600 py-5 px-10 text-white'
								>
									Sign Up
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
