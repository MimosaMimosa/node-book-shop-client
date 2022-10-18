import axios from "axios";
import { useContext, useState } from "react";
import AuthContext from "../../store/Context/AuthContext";
import {toast } from 'react-toastify';
import {Link, useNavigate} from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { dispatch } = useContext(AuthContext);

	const handleSubmit = (e) => {
        e.preventDefault();
		axios
			.post("http://localhost:4000/api/v1/auth/login", {
				email,
				password,
			})
			.then((res) => {
				dispatch({ type: "STORE", data: res.data });
                toast.success('Login Success');
                navigate('/')
			}).catch((error) => {
                console.log(error)
            });
	};

	return (
		<div className='h-[100vh] flex justify-center items-center py-5'>
			<div className='w-[50%] shadow-xl py-7'>
				<h2 className='text-3xl font-bold text-center'>Login</h2>
				<h3 className='text-sm text-center mt-5 font-thin'>
					Enter Login details to get access
				</h3>
				<div className='flex justify-center'>
					<form action='' className='w-[90%]' onSubmit={(e)=>{
                        handleSubmit(e)
                    }}>
						<label className='mt-8 block' htmlFor='email'>
							<label htmlFor='email' className='text-md'>
								Username Or Email Address
							</label>
							<div className='border-2 border-gray-3 px-5 py-3 mt-1'>
								<input
									id='email'
									type='text'
									className='outline-none'
									placeholder='Username / Email Address'
									onChange={(e) => setEmail(e.target.value)}
								/>
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
									className='outline-none'
									placeholder='Password'
                                    onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
						</label>
						<div className='mt-8 flex justify-between'>
							<div className='flex'>
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
								<Link to="/sign-up" className='text-red-600 mx-2'>Sign Up</Link>
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
	);
};

export default Login;
