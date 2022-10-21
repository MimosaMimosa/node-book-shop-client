import { Fragment } from "react";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { ToastContainer } from "react-toastify";
import SignUp from "./pages/SignUp/SignUp";
import Category from "./pages/Category/Category";
import Root from "./pages/Root";
import BookDetails from "./pages/BookDetails/BookDetails";
import Order from "./pages/Order/Order";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Fragment>
				<Route path='/'  element={<Root />}>
					<Route index element={<Home/>}></Route>
					<Route path='/books/:id' element={<BookDetails/>}></Route>
					<Route path='/categories' element={<Category />}></Route>
					<Route path='/about' element={<About />}></Route>
					<Route path='/orders' element={<Order />}></Route>
				</Route>
				<Route path='/login' element={<Login />}></Route>
				<Route path='/sign-up' element={<SignUp />}></Route>
			</Fragment>
		)
	);
	return (
		<div className='App'>
			<ToastContainer />
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
