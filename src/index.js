import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import AuthContextProvider from "./store/Provider/AuthContextProvider";
import "react-toastify/dist/ReactToastify.css";
import DataContextProvider from "./store/Provider/DataContextProvider";
import { Provider } from "react-redux";
import store from "./redux/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<DataContextProvider>
				<AuthContextProvider>
					<App />
				</AuthContextProvider>
			</DataContextProvider>
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
