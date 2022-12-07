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
import BookDetails from "./pages/Book/BookDetail";
import BookList from "./pages/Book/BookList";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Blog from "./pages/Blog/Blog";
import PrivateRoutes from "./middleware/PrivateRoutes";
import Author from "./pages/Author/Author";
import { isLogin, login, userOrders } from "./loader/routeloader";
import ErrorBoundary from "./components/Error/ErrorBoundary";
import Order from "./pages/Order/Order";


function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Fragment>
				<Route
					path='/'
					element={<Root />}
					loader={isLogin}
					id='root'
					errorElement={<ErrorBoundary />}
				>
					<Route index element={<Home />}></Route>
					<Route path='/books/:id' element={<BookDetails />}></Route>
					<Route
						path='/books'
						element={<BookList />}
					></Route>
					<Route path='/categories' element={<Category />}></Route>
					<Route path='/about' element={<About />}></Route>
					<Route element={<PrivateRoutes />}>
						<Route path='/carts' element={<Cart />}></Route>
						<Route
							path='/orders'
							element={<Order />}
							loader={userOrders}
							id='order'
						></Route>
					</Route>
					<Route path='/contact' element={<Contact />}></Route>
					<Route path='/blog' element={<Blog />}></Route>
					<Route path='authors' element={<Author />}></Route>
				</Route>
				<Route>
					<Route
						path='/login'
						element={<Login />}
						loader={login}
					></Route>
				</Route>
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
