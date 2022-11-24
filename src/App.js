import { Fragment } from "react";
import {
	createBrowserRouter,
	createRoutesFromElements,
	redirect,
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
import Cart from "./pages/Order/Cart";
import Contact from "./pages/Contact/Contact";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Blog from "./pages/Blog/Blog";
import PrivateRoutes from "./middleware/PrivateRoutes";
import Author from "./pages/Author/Author";
import Cookies from "js-cookie";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Fragment>
				<Route path='/' element={<Root />}>
					<Route index element={<Home />}></Route>
					<Route path='/books/:id' element={<BookDetails />}></Route>
					<Route path='/categories' element={<Category />}></Route>
					<Route path='/about' element={<About />}></Route>
					<Route element={<PrivateRoutes />}>
						<Route path='/carts' element={<Cart />}></Route>
					</Route>
					<Route path='/contact' element={<Contact />}></Route>
					<Route path='/blog' element={<Blog />}></Route>
					<Route path='authors' element={<Author />}></Route>
				</Route>
				<Route
					path='/login'
					element={<Login />}
					loader={({ request }) => {
						const url = new URL(request.url);
						if (url.searchParams.get("reset")) {
							Cookies.remove("abc_token");
							Cookies.remove("abc_user");
							return true;
						}
						if (Cookies.get("abc_token")) {
							return redirect("/");
						}
					}}
				></Route>
				<Route path='/sign-up' element={<SignUp />}></Route>
				<Route path='*' element={<PageNotFound />}></Route>
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
