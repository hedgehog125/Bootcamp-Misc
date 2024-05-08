import React from "react";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";

import Root from "../pages/Root";
import Home from "../pages/Home/Home";

const basename = document.querySelector("base")?.getAttribute("href") ?? "/";
const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<Root />}>
				<Route path="" element={<Home />}></Route>
			</Route>
		</>
	),
	{ basename }
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
