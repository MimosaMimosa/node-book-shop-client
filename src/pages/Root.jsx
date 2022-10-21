import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import NewLetter from "../components/NewLetter/NewLetter";
import ScrollToTop from "../components/Scroll/ScrollToTop";

const Root = () => {
	return (
		<ScrollToTop>
			<Navbar />
			<Outlet />
			<NewLetter />
			<Footer />
		</ScrollToTop>
	);
};

export default Root;
