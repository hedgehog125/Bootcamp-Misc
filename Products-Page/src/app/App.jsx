import React from "react";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";

import Root from "../pages/Root";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";

const basename = document.querySelector("base")?.getAttribute("href") ?? "/";
const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<Root />}>
				<Route path="" element={<Home />}></Route>
				<Route path="/products/" element={<Products />}></Route>
			</Route>
		</>
	),
	{ basename }
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
