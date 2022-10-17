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

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Fragment>
				<Route path='/' index element={<Home />}></Route>
				<Route path='login' element={<Login />}></Route>
				<Route path='about' element={<About />}></Route>
			</Fragment>
		)
	);
	return (
		<div className='App'>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
