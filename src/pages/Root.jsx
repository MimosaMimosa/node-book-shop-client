import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import NewLetter from "../components/NewLetter/NewLetter";

const Root = () => {
	return (
		<>
			<ScrollRestoration
				getKey={(location) => {
					const path = "/categories";
					return path === location.pathname
						? location.pathname
						: location.key;
				}}
			/>
			<Navbar />
			<Outlet />
			<NewLetter />
			<Footer />
		</>
	);
};

export default Root;
