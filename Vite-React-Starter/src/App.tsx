import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";

import Root from "./components/Root";

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<Root />}>
				<Route path="" element={<h1>There's nothing here</h1>}></Route>
			</Route>
		</>,
	),
	{ basename: import.meta.env.BASE_URL },
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
