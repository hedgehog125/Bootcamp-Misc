import "./App.css";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Root from "./components/Root";

const basename = document.querySelector("base")?.getAttribute("href") ?? "/";
const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<Root />}>
				<Route path="" element={<h1>There's nothing here</h1>}></Route>
			</Route>
		</>
	),
	{ basename }
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
