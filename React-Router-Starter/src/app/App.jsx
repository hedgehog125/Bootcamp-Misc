import React from "react";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";

import Home from "../pages/Home/Home";
import Root from "../pages/Root";

const basename = document.querySelector("base")?.getAttribute("href") ?? "/";
const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<Root />}>
				<Route path="" element={<Home />}></Route>
			</Route>
		</>,
	),
	{ basename },
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
