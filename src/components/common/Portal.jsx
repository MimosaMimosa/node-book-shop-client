import { createPortal } from "react-dom";

const Portal = ({ children,id }) => {
	return createPortal(children, document.getElementById(id));
};

export default Portal;
